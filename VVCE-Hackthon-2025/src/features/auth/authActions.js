// authActions.js
import {
    loginSuccess,
    logoutSuccess,
    createUserRequest,
    createUserSuccess,
    createUserFailure,
  } from "./authSlice";
  import axios from "axios";
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const API_URL_LOGIN = baseUrl + "/all/signin";
  const API_URL_SIGNUP = baseUrl + "/all/signup";
  
  export const createUserAction = (userData) => async (dispatch) => {
    try {
      dispatch(createUserRequest());
      console.log(userData);
      const response = await axios.post(API_URL_SIGNUP, userData);
  
      const { data } = response;
      console.log(data);
      if (data.statusType === "SUCCESS") {
        dispatch(createUserSuccess(data));
        return { success: true, data };
      } else {
        return { success: false, data };
      }
  
      // localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      dispatch(createUserFailure(error.message));
      return { success: false, error: error.message };
    }
  };
  export const login = (userData) => async (dispatch) => {
    try {
      const response = await axios.post(API_URL_LOGIN, userData);
      const { data } = response;

      await dispatch(loginSuccess({ user: data }));
  
      return { success: true, data }; // Return success response
    } catch (error) {
      dispatch(createUserFailure(error?.response?.data)); // Dispatch failure action
      return { success: false, error: error?.response?.data }; // Return error response
    }
  };
  
  // export const regiseterUser = ()
  
  export const logout = () => (dispatch) => {
    dispatch(logoutSuccess());
  };