import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { MyStack } from "./src/Stacks/TopTabs";

export default function App() {
  return (
    <Provider store={store}>
      <MyStack />
    </Provider>
  );
}
