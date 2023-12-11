import React from "react";
import Navigator from "./src/routes/index";
import { Provider } from "react-redux";
import store from "./src/redux/store";

const App: React.FC = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);
export default App;
