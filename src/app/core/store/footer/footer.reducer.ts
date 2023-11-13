import * as global from './footer.actions';
import { FooterButton } from './footer.models';

export interface FooterState {
  footerButtonList: FooterButton[];
};

export const initialState: FooterState = {
  footerButtonList: [],
};

export function footerReducer(state = initialState, action: global.FooterActions): FooterState {
  switch (action.type) {
    case global.ADD_FOOTER_BUTTON: {
        return {
          ...state,
          footerButtonList: [...state.footerButtonList, action.payload]
        };
      }

      default: {
        return state;
      }
    case global.CLEAN_ALL_FOOTER_BUTTON: {
      return {
        ...state,
        footerButtonList: []
      }
    }

  }
}
