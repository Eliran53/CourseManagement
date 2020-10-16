export const urlBase = () => {
  const domain = process.env.NODE_ENV === "production" ? process.env.REACT_APP_DOMAIN : "localhost:3000";
  const http = process.env.NODE_ENV === "production" ? "https" : "http";

  const url = `${http}://${domain}`;

  return url;
};