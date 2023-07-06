import axios from "axios";
import { showErrorToast } from "./toastAlert";

export function get(url) {
  return axios({
    method: "GET",
    url: url,
  });
}
export function getWithParams(url, params) {
  return axios({
    method: "GET",
    url: url,
    params: params,
  });
}
export function post(url, data, contentType = "application/json") {
  return axios({
    method: "POST",
    url: url,
    data: data,
    headers: {
      "Content-Type": contentType,
    },
  });
}


export function showError(err){
    showErrorToast(err.response?.data?.message || err.message || "Something went wrong!");

    if (err && err.response && err.response.data && err.response.data.errors) {
        for (let error of Object.entries(err.response.data.errors)){
            if (error[1][0] && typeof error[1] == "object"){
                showErrorToast(error[1][0]  || "Something went wrong!");
                continue;
            }
            if (error[1]){
                showErrorToast(error[1] || "Something went wrong!");
            }
        }
    }
}