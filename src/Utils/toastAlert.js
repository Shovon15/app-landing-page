import { toast } from "react-toastify";
import "./toast.css";

export function showErrorToast(message) {
  toast.error(message, {
    position: "top-right",
    autoClose: 700,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    // theme: "light",
    theme: "colored",
    className: "toast-message",
  });
}

export function showSuccessToast(message) {
  toast.success(message, {
    position: "top-right",
    autoClose: 700,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    // theme: "light",
    theme: "colored",
    className: "toast-message",
  });
}
