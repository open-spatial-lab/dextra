import { html } from "lit";

export const communityAreaOptions = {
  url: "https://d14xp4vykd1up4.cloudfront.net/data-query/656e2ffe98b5d40008de1bb6",
  valueCol: "area_numbe",
  labelCol: "community",
};

export const zipOptions = {
  url: "https://d14xp4vykd1up4.cloudfront.net/data-query/656e613d9733450008ec83f6",
  valueCol: "FIPS",
};

export const tractOptions = {
  url: "https://d14xp4vykd1up4.cloudfront.net/data-query/656e61539733450008ec83f7",
  valueCol: "FIPS",
};

export const dateOptions = {
  url: "https://d14xp4vykd1up4.cloudfront.net/data-query/656e304998b5d40008de1bb7",
  valueCol: "VIOLATION DATE",
};

export const crashTypeOptions = {
  url: "https://d14xp4vykd1up4.cloudfront.net/data-query/656e61ef9733450008ec83f9",
  valueCol: "FIRST_CRASH_TYPE",
};

export const crashHourOptions = {
  url: "https://d14xp4vykd1up4.cloudfront.net/data-query/656e7a6c69e2370008020014",
  valueCol: "CRASH_HOUR",
};

export const communityAreasJoinedData =
  "https://d14xp4vykd1up4.cloudfront.net/data-query/656e27f621c45800084f8ae1";
export const communityAreaSummary =
  "https://d14xp4vykd1up4.cloudfront.net/data-query/656e38e4706aae0008b21e17";

export const tractData =
  "https://d14xp4vykd1up4.cloudfront.net/data-query/656e62659733450008ec83fa";
export const tractSummary =
  "https://d14xp4vykd1up4.cloudfront.net/data-query/656e77fa69e2370008020012";

export const zipData =
  "https://d14xp4vykd1up4.cloudfront.net/data-query/656e755769e237000802000f";
export const zipSummary =
  "https://d14xp4vykd1up4.cloudfront.net/data-query/656e782d69e2370008020013";

export const summary =
  "https://d14xp4vykd1up4.cloudfront.net/data-query/6531dde2f46b22000893d375";
export const geo =
  "https://d14xp4vykd1up4.cloudfront.net/data-query/653267d6e26896000848fc3e";
export const redLightDot =
  "https://d14xp4vykd1up4.cloudfront.net/data-query/6532789178d66b0009321d78";
export const speedDot =
  "https://d14xp4vykd1up4.cloudfront.net/data-query/653289411fc91e0008ec7996";

export const speedTicketsOverTime = "https://d14xp4vykd1up4.cloudfront.net/data-query/656f47483443a800080913be"
export const redLightTicketsOverTime = "https://d14xp4vykd1up4.cloudfront.net/data-query/656f47d63443a800080913bf"
export const crashesOverTime = "https://d14xp4vykd1up4.cloudfront.net/data-query/656f47203443a800080913bd"

export const CommunityAreaBoundaries = html` <osl-map-layer
  legendTitle="Community Areas"
  visible="true"
  stroked="true"
  filled="false"
  geoType="WKB"
  geoColumn="geometry"
  layer="line"
  type="static"
  staticStroke="[0,0,0]"
  geoId="community"
  data=${communityAreasJoinedData}
  lineWidthMaxPixels="5"
  lineWidthMinPixels="2"
  fixed="true"
></osl-map-layer>`;

export const CommunityAreaLabels = html`
  <osl-map-layer
    legendTitle="Community Areas Labels"
    visible="true"
    stroked="false"
    filled="false"
    geoType="WKB"
    geoColumn="geometry"
    layer="text"
    type="static"
    staticRadius="100"
    textColumn="community"
    textSizeScale="5"
    textSize="64"
    textMaxWidth="400"
    textSizeMaxPixels="16"
    geoId="community"
    data=${communityAreasJoinedData}
    geoOperation="centroid"
    fixed="true"
  ></osl-map-layer>
`;
