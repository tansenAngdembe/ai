export const apiCall = async (uri) => {
    try {
      const response = await axios.request(uri);
      const data = await response.data
      console.log(data.tabs)
    } catch (error) {
      console.error(error);
    }
  }

 