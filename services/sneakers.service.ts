import axiosInstance from "../api.config";

export const API_BASE_URL = "https://closing-publicly-maggot.ngrok-free.app";

export const SneakersService = {
  getAllSneakers: async () => {
    try {
      const response = await axiosInstance.get(`${API_BASE_URL}/sneakers/`)
      return response.data;
    } catch (e) {
      console.error("Error fetching sneakers", e)
      throw e
    }
  },
  getSneakerById: async (id: number) => {
    try {
      const response = await axiosInstance.get(`${API_BASE_URL}/sneakers/${id}`)
      return response.data
    } catch (e) {
      console.error("Error fetching sneaker", e)
      throw e
    }
  },
}
