export type DataResult = Array<Record<string, any>>

export type StateSchema = {
  datasets: {
    [key: string]: {
      parameters: Record<string, any>;
      headless: boolean;
      status: 'loading' | 'error' | 'success'
      results: Record<string, DataResult>;
    };
  };
};