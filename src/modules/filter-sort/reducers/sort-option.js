import { UPDATE_SORT_OPTION } from "modules/filter-sort/actions/update-sort-option";
import { RESET_STATE } from "modules/app/actions/reset-state";
import { MARKET_OPEN_INTEREST } from "modules/filter-sort/constants/market-sort-params";

const DEFAULT_STATE = MARKET_OPEN_INTEREST;

export default function(sortOption = DEFAULT_STATE, action) {
  switch (action.type) {
    case UPDATE_SORT_OPTION:
      return action.data;
    case RESET_STATE:
      return DEFAULT_STATE;
    default:
      return sortOption;
  }
}
