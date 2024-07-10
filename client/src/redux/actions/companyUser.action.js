// import axios from "axios";
// import { companyUserAdd, companyUserGet, companyUserUpdate } from "../../constants/api";

// //Acion dispatcher for adding new user data
// export const addcompanyUser = (userData) => async (dispatch) => {
//   try {
//     console.log(userData);
//     const res = await axios.post(companyUserAdd, userData);
//     console.log(res);
//     if (res.data.message === "User added successfully") {
//       dispatch({ type: "USER_ADDED" });
//     }
//   } catch (error) {
//     console.log(`Error in adding user data ${error}`);
//   }
// };

// //Acion dispatcher for updating  user data
// export const updatecompanyUser = (userData) => async (dispatch) => {
//   try {
//     console.log(userData);
//     const res = await axios.post(companyUserUpdate, userData);
//     console.log(res);
//     if (res.data.message === "User updated successfully") {
//       dispatch({ type: "USER_UPDATED" });
//     }
//   } catch (error) {
//     console.log(`Error in updating user data ${error}`);
//   }
// };

// //Get all user data
// export const getCompanyUsers = (backendData) => async (dispatch) => {
//   try {
//     const res = await axios.post(companyUserGet, backendData);
//     const initialData =
//       res.data && res.data.data && res.data.data.length > 0 ? res.data : [];
//     if (initialData) {
//       dispatch({ type: "GET_USER", payload: initialData });
//     }
//   } catch (error) {
//     console.log(`Error in fetching user data ${error}`);
//   }
// };
