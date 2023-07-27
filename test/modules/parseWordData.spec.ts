import { assert } from "chai";

import { parseWordData } from "../../src/modules/parseWordData";
import {
  ExpectedSingleWordSearch,
  ExpectedWordSearch,
  MockSingleWordSearch,
  MockWordSearch,
} from "../__mocks__/WordSearch";

suite("parse word data module", () => {
  test("should parse single result correctly", () => {
    assert.equal(parseWordData(MockSingleWordSearch), ExpectedSingleWordSearch);
  });
  test("should parse results correctly", () => {
    assert.equal(parseWordData(MockWordSearch), ExpectedWordSearch);
  });
});
