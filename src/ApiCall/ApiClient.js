import { useSelector } from "react-redux";

const auth = "";

class ApiClient {
  
  static async get(endpoint) {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  static async post(endpoint, data) {
    try {
      // auth = useSelector((state) => state.login.auth);
      console.log("@DNS " + auth)
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: auth,
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw error;
    }
  }

  // Add methods for PUT, DELETE, etc. if needed
}

export default ApiClient;
