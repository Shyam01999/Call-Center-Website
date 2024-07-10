// // Initial state
// const initialState = {
//     userData: null,
//     errorMessage: null
//   };

//   // Reducer function
//   const loginReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "LOGIN_SUCCESS":
//           return {
//             ...state,
//             userData: action.payload.data,
//             errorMessage: null
//           };
//         case "LOGIN_FAILED":
//           return {
//             ...state,
//             userData: null,
//             // errorMessage: action.payload
//           };
//         default:
//           return state;
//       }
//   };

//   export default loginReducer;

// import Cookies from "js-cookie";
// import { LOGIN_FAILED, LOGIN_SUCCCESS, LOGOUT_SUCCESS } from "../actionTypes";

// const storedToken = Cookies.get('companytoken');
// const storedUserData = Cookies.get('userinfo');
// // Initial state
// const initialState = {
//   token: storedToken,
//   userData: storedUserData ? JSON.parse(storedUserData) : {},
//   errorMessage: null
// };

// // Reducer function
// const loginReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case LOGIN_SUCCCESS:
//       return {
//         ...state,
//         token: payload.token,
//         userData: payload.data,
//         errorMessage: null,
//       };

//     case LOGIN_FAILED:
//       return {
//         ...state,
//         token: null,
//         userData: null,
//         // errorMessage: action.payload
//       };

//     case LOGOUT_SUCCESS:
//       Cookies.remove("companytoken");
//       Cookies.remove("userinfo");
//       return {
//         ...state,
//         token: "",
//         userData: {},
//       };
//     default:
//       return state;
//   }
// };

// export default loginReducer;

