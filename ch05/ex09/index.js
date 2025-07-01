function jsonParse(str) {
  try {
    return "{success: true, data: " + JSON.stringify(JSON.parse(str)) + "}";
  } catch (e) {
    return "{success: false , error: " + e.message + "}";
  }
}

export { jsonParse };
