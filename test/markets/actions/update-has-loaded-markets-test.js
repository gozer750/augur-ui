import {
  updateHasLoadedMarkets,
  UPDATE_HAS_LOADED_MARKETS
} from "modules/markets/actions/update-market-loading";

describe("modules/markets/actions/update-market-loading.js", () => {
  const test = t => {
    it(t.description, () => {
      t.assertions(updateHasLoadedMarkets(t.hasLoadedMarkets));
    });
  };

  test({
    description: "should return the expected object",
    hasLoadedMarkets: true,
    assertions: action => {
      const expected = {
        type: UPDATE_HAS_LOADED_MARKETS,
        hasLoadedMarkets: true
      };

      assert.deepEqual(action, expected, `Didn't return the expected object`);
    }
  });
});
