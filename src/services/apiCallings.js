import toast from "react-hot-toast";
import { endPoint } from ".";
import axios from "axios";

export const storeCookies = () => {
  let expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + 1 * 60 * 60 * 1000); // 2 hours in milliseconds
  // expirationDate.setTime(expirationDate.getTime() + 60*1000); // 2 hours in milliseconds
  document.cookie = `token=anandtoken; expires=${expirationDate.toUTCString()}; path=/`;
};

export function checkTokenValidity() {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    if (cookie[0] === "token") {
      const tokenExpiration = new Date(cookie[1]);
      if (tokenExpiration < new Date()) {
        // Token has expired
        return false;
      }
      return true;
    }
  }
  // Token not found
  return false;
}

export const logOutFunction = async () => {
  try {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/"; // Redirect to login page
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};

export const getProfile = async () => {
  const id = localStorage.getItem("user_id");
  try {
    const response = await axios.get(endPoint?.profile + `?id=${id}`);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
export const getHistory = async () => {
  const id = localStorage.getItem("user_id");
  try {
    const response = await axios.get(endPoint?.history + `?userid=${id}&limit=0`);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};
