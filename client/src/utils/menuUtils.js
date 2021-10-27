/**
 * Get all of the products from the API server endpoint
 * @returns {Object[]}
 */
export const getMenu = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/products`
    );

    if (!response.ok) {
      return Promise.reject(response);
    }

    return response.json();
  } catch (error) {
    return Promise.reject(error);
  }
};
