export const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080"
    : "https://h2s-sms-api.herokuapp.com";
export * from "./Groups";
export * from "./Students";
export * from "./User";
