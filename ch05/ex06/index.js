try {
  console.log("try block executed");
  throw new Error("An error occurred in the try block");
} catch (e) {
  console.error("An error occurred:", e);
} finally {
  console.log("finally block executed");
}
