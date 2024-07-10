// import { adminLogin } from "../../constants/api";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { notifyError, notifySuccess } from "../../constants/toastAlerts";

// //Acion dispatcher for user login
// export const userLogin = (backendData, navigate) => async (dispatch) => {
//   try {
//     let data = await axios.post(adminLogin, backendData);

//     if (data.data.token) {
//       Cookies.set("token", data.data.token);
//       Cookies.set("userData", JSON.stringify(data.data));

//       dispatch({
//         type: "LOGIN_SUCCCESS",
//         payload: {
//           token: data.token,
//           data: data.data,
//           message: data.data.message,
//         },
//       });
//       notifySuccess(data.data.message)
//       navigate("/cma/dashboard");
//     } else {
//       dispatch({ type: "LOGIN_FAILED", payload: data.message });
//       notifyError(data.message);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };


// import axios from "axios";
// import Cookies from "js-cookie";
// import { LOGIN_FAILED, LOGIN_SUCCCESS } from "../actionTypes";
// import { notifyError } from "../../constants/toastAlerts";


// //Acion dispatcher for user login
// export const userLogin = (res) => (dispatch) => {
//   console.log("res", res)
//   if (res.data.token) {
//     dispatch({ type: "RELOAD", payload: false });
//     dispatch({
//       type: LOGIN_SUCCCESS,
//       payload: res.data,
//     });
//   } else {
//     dispatch({ type: "RELOAD", payload: false });
//     dispatch({ type: LOGIN_FAILED, payload: res.data });
//     notifyError(res.data.message);
//   }
// };


