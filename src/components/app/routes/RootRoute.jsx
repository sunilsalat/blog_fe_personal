import { useRoutes } from "react-router-dom";
import { routeData } from "../../../constant/routeData";

const RootRoute = () => {

  const routing = useRoutes(routeData);
  return routing;
};

export default RootRoute;
