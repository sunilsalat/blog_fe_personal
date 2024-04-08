import { useSelector } from "react-redux";
import Toast from "../common/error/toast/Toast";
import RootRoute from "./routes/RootRoute";

const App = () => {
  const { message, type } = useSelector((state) => state.toast);
  return (
    <>
      {message && <Toast type={type} message={message} />}
      <RootRoute />
    </>
  );
};

export default App;
