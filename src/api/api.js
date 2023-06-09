export const api = {
  get: async function () {
    try {
      let response = await fetch("http://localhost:5000/images");
      response = await response.json();
      return response;
    } catch (err) {
      console.error(err.message);
    }
  },
};
