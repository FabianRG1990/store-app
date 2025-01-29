import { globalStateReducer } from "./global-state.reducer";

export interface AppState {
  globalState: number;

}

export const appReducers = {
  globalState: globalStateReducer
};
