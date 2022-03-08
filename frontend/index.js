import { Provider } from "react-redux";
import { store } from "./store";

export default function ({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
