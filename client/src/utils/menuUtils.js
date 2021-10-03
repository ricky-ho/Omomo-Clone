export const getMenu = async () => {
  try {
    const response = await fetch(`/api/products`);
    return response.json();
  } catch (err) {
    return {
      error: err,
      message: "Error: could not fetch products",
    };
  }
};
