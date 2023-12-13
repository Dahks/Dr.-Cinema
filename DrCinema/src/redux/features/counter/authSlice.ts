import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from "../../store";

const baseUrl = "https://api.kvikmyndir.is";

interface AuthState {
  isAuthenticated: boolean;
  token: string | undefined;
  receivedAt: number | undefined;
  isLoading: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: undefined,
  receivedAt: undefined,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthState>) => {
      const { isAuthenticated, token, receivedAt, isLoading } = action.payload;
      state.isAuthenticated = isAuthenticated;
      state.token = token;
      state.receivedAt = receivedAt;
      state.isLoading = isLoading;
    },
    setAuthIsLoading: (state) => {
      state.isLoading = true;
    },
  },
});

export const authenticate = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(setAuthIsLoading());
    const url = "https://api.kvikmyndir.is/authenticate";
    // const data = {
    //   username: "Gulli",
    //   password: "8RLUCmQHpw43dP6",
    // };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic R3VsbGk6OFJMVUNtUUhwdzQzZFA2",
      },
      //   body: JSON.stringify(data), // Convert the JavaScript object to a JSON string
    })
      .then(async (response) => {
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          const auth: AuthState = {
            isAuthenticated: true,
            receivedAt: Date.now(),
            token: data.token,
            isLoading: false,
          };
          dispatch(setAuth(auth));
        } else {
          console.error("ERROR: invalid authentication");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
};

export const { setAuth, setAuthIsLoading } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: RootState) => state.auth.token;

export default authSlice.reducer;
