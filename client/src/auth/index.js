import axios from "axios";

export default function axiosWithAuth() {
  const token = localStorage.getItem("token");
  const axiosInstance = axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  });
  return axiosInstance;
}
