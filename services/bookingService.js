const createApiClient = require("../utils/apiClient");

exports.getBookings = async (params) => {
  try {
    const bookingApiClient = createApiClient(process.env.BOOKING_SERVICE_URL);
    const response = await bookingApiClient.get(path, params);
    return response.data;
  } catch (error) {
    throw new Error(
      `Service B Error: ${error.response ? error.response.data : error.message}`
    );
  }
};
