export type DataResult = Array<Record<string, any>>

export type StateSchema = {
  datasets: {
    [key: string]: {
      parameters: Record<string, any>;
      headless: boolean;
      status: 'loading' | 'error' | 'success'
      results: Record<string, DataResult | GeoJSON.Feature[] | 'pending'>
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