import { jsonParse } from "./index.js";

describe("test05-09", () => {
  it("should return success with valid JSON string", () => {
    const input = '{"key": "value"}';
    expect(jsonParse(input)).toBe('{success: true, data: {"key":"value"}}');
  });

  it("should return error with invalid JSON string", () => {
    const input = "invalid json";
    expect(jsonParse(input)).toBe(
      "{success: false , error: Unexpected token 'i', \"invalid json\" is not valid JSON}",
    );
  });

  it("should handle empty JSON object", () => {
    const input = "{}";
    expect(jsonParse(input)).toBe("{success: true, data: {}}");
  });

  it("should handle nested JSON objects", () => {
    const input = '{"nested": {"key": "value"}}';
    expect(jsonParse(input)).toBe(
      '{success: true, data: {"nested":{"key":"value"}}}',
    );
  });
});
