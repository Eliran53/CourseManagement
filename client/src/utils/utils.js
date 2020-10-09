export const urlBase = () => {
  const domain = process.env.REACT_APP_DOMAIN;
  const http = process.env.NODE_ENV === "production" ? "https" : "http";

  const url = `${http}://${domain}`;

  return url;
};
