import { ActionReducerMap } from "@ngrx/store";
import { FooterState, footerReducer } from './footer';

export interface AppState {
  footer: FooterState
}

export const reducers: ActionReducerMap<AppState, any> = {
  footer: footerReducer
};
