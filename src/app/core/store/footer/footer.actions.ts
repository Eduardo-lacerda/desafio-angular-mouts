import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { FooterButton } from './footer.models';

export const ADD_FOOTER_BUTTON = '[Footer] ADD_FOOTER_BUTTON';
export const CLEAN_ALL_FOOTER_BUTTON = '[Footer] CLEAN_ALL_FOOTER_BUTTON';

export class AddFooterButtonAction implements Action {
  readonly type = ADD_FOOTER_BUTTON;
  constructor(public payload: FooterButton) {}
}

export class CleanAllFooterButtonAction implements Action {
  readonly type = CLEAN_ALL_FOOTER_BUTTON;
  constructor() {}
}

export type FooterActions = AddFooterButtonAction | CleanAllFooterButtonAction ;
