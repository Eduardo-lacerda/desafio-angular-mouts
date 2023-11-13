import { createSelector } from '@ngrx/store';
import { AppState } from 'app/core/store';
import { FooterState } from 'app/core/store/footer/footer.reducer';
import { FooterButton } from './footer.models';

export const getFooterButtonList = (state: AppState) => state.footer;
export const selectAllFooterButtons = createSelector(
  getFooterButtonList,
  (search: FooterState) => search.footerButtonList
);
