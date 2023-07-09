import { ToastContainer } from "react-toastify"

export default function Toaster(){
  return <ToastContainer
  position="bottom-right"
  autoClose={800}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
  />
}