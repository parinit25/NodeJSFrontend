import axios from "axios";

class APIHelper {
  static instance = null;
  apiClient;

  constructor(baseUrl) {
    if (!APIHelper.instance) {
      this.apiClient = axios.create({
        baseURL: "http://localhost:3000",
        headers:{
          "Accept": "*/*",
          "Content-Type":"application/json"
        }
      });
      APIHelper.instance = this;
    }

    return APIHelper.instance;
  }

  async get(url) {
    try {
      const response = await this.apiClient.get(url);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  async post(url, data) {
    try {
      console.log(data,"data")
      const response = await this.apiClient.post(url, data);
      return response;
    } catch (error) {
      console.error("Error posting data:", error);
      throw error;
    }
  }

  async put(url, data) {
    try {
      const response = await this.apiClient.put(url, data);
      return response.data;
    } catch (error) {
      console.error("Error updating data:", error);
      throw error;
    }
  }

  async patch(url, data) {
    try {
      const response = await this.apiClient.patch(url, data);
      return response.data;
    } catch (error) {
      console.error("Error patching data:", error);
      throw error;
    }
  }

  async delete(url) {
    try {
      const response = await this.apiClient.delete(url);
      return response.data;
    } catch (error) {
      console.error("Error deleting data:", error);
      throw error;
    }
  }
}

export default APIHelper;
