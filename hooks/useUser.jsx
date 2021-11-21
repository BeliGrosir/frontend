import Cookies from "js-cookie";

export default function useUser() {
  return Cookies.get("user") ? Cookies.get("user") : false;
}