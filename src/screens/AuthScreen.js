import { useSelector } from "react-redux";

import LoginScreen from "./LoginScreen";
import SignupScreen from "./signUpScreen";
import { selectSign } from "../redux/accountSlice";

const AuthScreen = () => {
    const hasAccount = useSelector(selectSign);

   return (
      hasAccount?
      <LoginScreen theme={MyTheme}/>:<SignupScreen theme={MyTheme}/>
   );
};

export default AuthScreen;
