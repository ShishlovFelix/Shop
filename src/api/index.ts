import axios from "axios";
import Swal from "sweetalert2";

export const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});

export const err = {
  NETWORK: "Network error - make sure API is running",
  SERVER: "Server error - check the terminal for more info",
  UNAUTHORIZED: "Authorization Required",
  NOTFOUND: "404 not found",
  DEFAULT: "Something went wrong",
  LARGE_REQ: "File can not be larger than 8mb",
  USER: "Another user is using the same email address!",
};

export const showErrorNotification = (msg: string, delay = 3000) => {
  Swal.fire({
    toast: true,
    icon: "error",
    title: msg,
    position: "top",
    showConfirmButton: false,
    timer: delay,
    timerProgressBar: true,
  });
};

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response && error.response.status) {
      const { status } = error.response;

      if (status === 404) {
        showErrorNotification(err.NOTFOUND);
        //   history.replace('/notfound');
      }

      if (error.message === "Network Error" && !error.response) {
        showErrorNotification(err.NETWORK);
      }

      if (status === 400) {
        showErrorNotification(err.USER);
      }

      if (status === 401) {
        showErrorNotification(err.UNAUTHORIZED);
      }

      if (status === 413) {
        showErrorNotification(err.LARGE_REQ);
      }

      if (status === 500) {
        showErrorNotification(err.SERVER);
      }
    }

    return Promise.reject(error);
  }
);
