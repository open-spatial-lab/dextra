// @ts-ignore
import { Geometry } from "@pieterprovoost/wkx";
import centroid from "@turf/centroid";

const GEOM_CACHE: {
  [key: string]: {
    [key: string]: GeoJSON.Geometry;
  };
} = {};

const geomParsers = {
  WKT: (geoColumn: string) => (row: Record<string, unknown>) =>
    Geometry.parse(row[geoColumn]).toGeoJSON(),
  WKB: (geoColumn: string) => (row: Record<string, unknown>) => {
    if (!row[geoColumn]) console.warn("No geometry found in row", row);
    const geom = Geometry._parseWkb(
      row[geoColumn]
    ).toGeoJSON() as GeoJSON.Geometry;
    return geom;
  },
  GeoJSON: (geoColumn: string) => (row: Record<string, unknown>) => {
    const v = row[geoColumn];
    return typeof v === "string"
      ? (JSON.parse(v) as GeoJSON.Geometry)
      : (v as GeoJSON.Geometry);
  },
} as const;

const operationParsers = {
  centroid: (d: any) => centroid(d).geometry,
} as const;

const buildGeomFunction = (
  combinedKey: string,
  geoType: "WKB" | "WKT" | "GeoJSON",
  geoColumn: string,
  id?: string,
  operation?: string
) => {
  const geomParser = geomParsers[geoType](geoColumn);
  const operationParser =
    operation === undefined
      ? (d: any) => d
      : operationParsers[operation as keyof typeof operationParsers];

  if (id) {
    return (row: Record<string, unknown>) => {
      const rowId = row[id] as string;
      if (!GEOM_CACHE[combinedKey][rowId]) {
        GEOM_CACHE[combinedKey][rowId] = operationParser(geomParser(row));
      }
      return GEOM_CACHE[combinedKey][rowId];
    };
  } else {
    return (row: Record<string, unknown>) => operationParser(geomParser(row));
  }
};

export async function convertToGeojsonLike(
  datasetId: string,
  data: Array<Record<string, unknown>>,
  geoType: "WKT" | "WKB" | "GeoJSON",
  geoColumn: string,
  geoId?: string,
  operation?: string
): Promise<Array<GeoJSON.Feature>> {
  const combinedKey = `${datasetId}/${geoColumn}${operation ? `/${operation}`: ''}`;
  if (!GEOM_CACHE[combinedKey]) GEOM_CACHE[combinedKey] = {};
  const geomParser = buildGeomFunction(
    combinedKey,
    geoType,
    geoColumn,
    geoId,
    operation
  );
  const nullGeomFilter = (row: Record<string, unknown>) =>
    row[geoColumn] !== null && row[geoColumn] !== undefined;

  const parseRow = (row: Record<string, unknown>) =>
    ({
      type: "Feature",
      geometry: geomParser(row),
      properties: row,
    } as GeoJSON.Feature);

  const out = [];
  for (const row of data) {
    nullGeomFilter(row) && out.push(parseRow(row));
  }
  return out;
}
