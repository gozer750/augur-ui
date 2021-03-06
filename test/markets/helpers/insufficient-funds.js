import { describe, it } from "mocha";
import { assert } from "chai";
import insufficientFunds from "modules/markets/helpers/insufficient-funds";

describe("src/modules/markets/helpers/insufficient-funds.js", () => {
  describe("when user has insufficient ETH", () => {
    it("should output 'ETH'", () => {
      const validityBond = 0.01;
      const gasCost = 0.001;
      const designatedReportNoShowReputationBond = 0.035;
      const availableEth = 0.001;
      const availableRep = 10;

      const expected = "ETH";
      const result = insufficientFunds(
        validityBond,
        gasCost,
        designatedReportNoShowReputationBond,
        availableEth,
        availableRep
      );

      assert.equal(result, expected);
    });
  });
  describe("when user has insufficient REP", () => {
    it("should output 'REP'", () => {
      const validityBond = 0.01;
      const gasCost = 0.001;
      const designatedReportNoShowReputationBond = 0.035;
      const availableEth = 10;
      const availableRep = 0.03;

      const expected = "REP";
      const result = insufficientFunds(
        validityBond,
        gasCost,
        designatedReportNoShowReputationBond,
        availableEth,
        availableRep
      );

      assert.equal(result, expected);
    });
  });
  describe("when user has insufficient ETH and REP", () => {
    it("should output 'ETH and REP'", () => {
      const validityBond = 0.01;
      const gasCost = 0.001;
      const designatedReportNoShowReputationBond = 0.035;
      const availableEth = 0.001;
      const availableRep = 0.03;

      const expected = "ETH and REP";
      const result = insufficientFunds(
        validityBond,
        gasCost,
        designatedReportNoShowReputationBond,
        availableEth,
        availableRep
      );

      assert.equal(result, expected);
    });
  });
  describe("when user has sufficient funds", () => {
    it("should output empty string", () => {
      const validityBond = 0.01;
      const gasCost = 0.001;
      const designatedReportNoShowReputationBond = 0.035;
      const availableEth = 0.035;
      const availableRep = 0.035;

      const expected = "";
      const result = insufficientFunds(
        validityBond,
        gasCost,
        designatedReportNoShowReputationBond,
        availableEth,
        availableRep
      );

      assert.equal(result, expected);
    });
  });
});
