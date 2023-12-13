import {
  type PayloadAction,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

interface APIAuth {
  success: boolean;
  token: string;
}

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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authenticate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        authenticate.fulfilled,
        (state, action: PayloadAction<APIAuth>) => {
          state.isAuthenticated = action.payload.success;
          state.token = action.payload.token;
          state.receivedAt = Date.now();
          state.isLoading = false;
        }
      )
      .addCase(authenticate.rejected, (state, _) => {
        state.isAuthenticated = false;
        state.isLoading = false;
      });
  },
});

export const authenticate = createAsyncThunk<APIAuth>(
  "auth/authenticate",
  async () => {
    const url = "https://api.kvikmyndir.is/authenticate";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Basic R3VsbGk6OFJMVUNtUUhwdzQzZFA2",
      },
    });

    const data: APIAuth = await response.json();
    return data;
  }
);

export default authSlice.reducer;
