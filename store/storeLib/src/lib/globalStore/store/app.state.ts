import { appReducer } from "./global-state.reducer";
export interface AppState {
  globalState: number;
  key1: string;
  key2: number;
  key3: boolean;
  characters: any[];
  loading: boolean;
  error: string | null;
}

export const appReducers = {
  app: appReducer,
};
