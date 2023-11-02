export type DataResult = Array<Record<string, any>>

export type StateSchema = {
  datasets: {
    [key: string]: {
      parameters: Record<string, any>;
      statuses: Record<string, 'pending' | 'error' | 'success'>
    };
  };
  geoListeners: Array<
  {
    dataset: string;
    geoType: 'WKT' | 'WKB' | 'GeoJSON';
    geoColumn: string;
    geoId?: string;
  }
  >
  
  usingMsgPack: boolean;
};

export type nonReactiveStoreSchema = Record<string, Record<string, DataResult | GeoJSON.Feature[]>>