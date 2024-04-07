import { SignIn } from "./enter";
import { ROUTE_CONSTANTS } from "../shared/config";
import { Route, Routes } from "react-router-dom";


export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_CONSTANTS.ENTER} element={<SignIn />} />
    </Routes>
  );
};
