import { publicRequest } from "../utils.js/requestMethod"
import { loginFailure, loginNotActive, loginStart, loginSuccess, registerFailure, registerStart, registerSuccess } from "./authSlice"

//AUTH SECTION
export const registerUser = async (user, dispatch) => {
    dispatch(registerStart())
    try {
      const res = await publicRequest.post('/auth/register', user)
      dispatch(registerSuccess(res.data))
    } catch (error) {
      dispatch(registerFailure())
    }

  }

export const loginUser = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    if(res.data.status === "active"){
      dispatch(loginSuccess(res.data));
    }
    else if(res.data.status === "pending"){
      dispatch(loginNotActive(res.data))
    }
  } catch (err) {
    dispatch(loginFailure());
  }
};


//USERS

