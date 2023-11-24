import axios from "axios";

const BASE_URL = "https://api.mocki.io/v2/016d11e8";

/**
 * Fetches the product widgets from the server.
 *
 * @return {Promise} The response data from the server.
 */
export async function fetchProductWidgets() {
  try {
    const response = await axios.get(`${BASE_URL}/product-widgets`);
    return response.data;
  } catch (error) {
    console.error("Error while fetching product widgets:", error);
    throw error;
  }
}
