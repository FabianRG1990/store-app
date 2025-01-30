import { appReducer, globalStateReducer } from "./global-state.reducer";

export interface AppState {
  globalState: number;
  key1: string;
  key2: number;
  key3: boolean;
}

export const appReducers = {
  globalState: globalStateReducer,
  app: appReducer
};
