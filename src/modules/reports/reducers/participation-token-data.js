import {
  UPDATE_PARTICIPATION_TOKENS_DATA,
  UPDATE_PARTICIPATION_TOKENS_BALANCE
} from "modules/reports/actions/participation-tokens-management";
import { RESET_STATE } from "modules/app/actions/reset-state";

const DEFAULT_STATE = {};

export default function(participationTokensData = DEFAULT_STATE, action) {
  switch (action.type) {
    case UPDATE_PARTICIPATION_TOKENS_DATA: {
      const updatedParticipationTokens = Object.keys(
        action.participationTokensData
      ).reduce((p, feeWindowID) => {
        p[feeWindowID] = {
          ...participationTokensData[feeWindowID],
          ...action.participationTokensData[feeWindowID]
        };
        return p;
      }, {});

      return {
        ...participationTokensData,
        ...updatedParticipationTokens
      };
    }
    case UPDATE_PARTICIPATION_TOKENS_BALANCE: {
      if (!action.feeWindowID) return participationTokensData;
      return {
        ...participationTokensData,
        [action.feeWindowID]: {
          ...participationTokensData[action.feeWindowID],
          balance: action.balance
        }
      };
    }
    case RESET_STATE:
    default:
      return participationTokensData;
  }
}
