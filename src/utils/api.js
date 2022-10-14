import axios from "axios";

axios.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response.status === 401) {
      const refreshToken = localStorage.getItem("refresh");
      const data = await axios.post(
        "/api/token/refresh/",
        {
          refresh: refreshToken,
        },
        { withCredentials: true }
      );
      if (data) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.access}`;
        localStorage.setItem("access", data.access)
      } else {
        localStorage.removeItem('refresh')
        localStorage.removeItem('access')
      }
    }
  }
);
    
export const sendData = async (username, password) => {
    const data = await axios.post(
      "/api/token/",
      {
        username,
        password,
      },
      { withCredentials: true }
    )

    axios.defaults.headers.common["Authorization"] = `Bearer ${data.access}`;
    localStorage.setItem("access", data.access)
    localStorage.setItem("refresh", data.refresh)
  };