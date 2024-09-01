const axios = require("axios");

const createApiClient = (baseUrl, defaultParams = {}) => {
  const client = axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Interceptor to add params to the request body for POST, PUT, PATCH, etc.
  client.interceptors.request.use((config) => {
    if (
      config.method === "post" ||
      config.method === "put" ||
      config.method === "patch"
    ) {
      config.data = {
        ...config.data,
        ...defaultParams,
      };
    } else if (config.method === "get") {
      // For GET requests, add params to the query string if needed
      config.params = {
        ...config.params,
        ...defaultParams,
      };
    }

    return config;
  });

  return client;
};

module.exports = createApiClient;
