import Swal from "sweetalert2";
import { PASSWORDERROR, LOADING, SUCCESS, } from "./actiontype"
import { useNavigate } from "react-router-dom";



export const fetchapi = (data) => (obj) => {
  
  data({ type: LOADING });
  fetch(`https://mock-server-app2-dll0.onrender.com/user?email=${obj.email}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        if (res[0].password == obj.password) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-start",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Login in successfully"
          });


          data({ type: SUCCESS, payload: res });
        } else {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-start",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "error",
            title: "Password Is Not Match"
          });
          data({ type: PASSWORDERROR });
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Fill The Above Details Correctly",
          });
        
        data({ type: PASSWORDERROR });
      });
  };