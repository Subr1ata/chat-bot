import { Button } from "../../components/ui/button";
import React, { useEffect, useState } from "react";
import {
  // CredentialResponse,
  // GoogleLogin,
  TokenResponse,
  // googleLogout,
  useGoogleLogin,
} from "@react-oauth/google";
import axios from "axios";
import { FaGoogle } from "react-icons/fa";
import { BsMicrosoft } from "react-icons/bs";

const SignIn = () => {
  // const responseMessage = (response: CredentialResponse) => {
  //   console.log("response::", response);
  // };
  // const errorMessage = () => {
  //   console.log("error");
  // };

  const [user, setUser] =
    useState<
      Omit<TokenResponse, "error" | "error_description" | "error_uri">
    >();
  const [profile, setProfile] = useState<null | any>([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  console.log("profile::", profile);

  // log out function to log the user out of google and set the profile array to null
  // const logOut = () => {
  //   googleLogout();
  //   setProfile(null);
  // };

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <div className="flex flex-row h-screen overscroll-none">
      <div className="flex w-full md:w-[50%] bg-[#FFFFFF] items-center flex-col justify-between">
        <div className="flex flex-col items-center space-y-10">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-3xl font-bold">Welcome back</span>
            <span className="text-gray-500 text-[16px]">
              Welcome back! Log in with your provider.
            </span>
          </div>
          {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} /> */}
          <div className="space-y-2 p-4">
            <Button
              onClick={() => login()}
              variant={"outline"}
              className="w-full gap-2"
            >
              <FaGoogle className="w-4 h-4" />
              <span className="font-bold text-[15px]">
                Continue with Google
              </span>
            </Button>
            <Button variant={"outline"} className="w-full gap-2">
              <BsMicrosoft className="w-4 h-4" />
              <span className="font-bold text-[15px]">
                Continue with Microsoft
              </span>
            </Button>
          </div>
        </div>
        {/* <div> */}
        <div className="flex flex-row justify-between items-end p-5">
          <div>
            <span className="text-[15px] text-gray-500">© Aspect 2023</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[15px] text-gray-500">Privacy</span>
            <span className="text-[15px] text-gray-500">Terms</span>
            <span className="text-[15px] text-gray-500">Get Help</span>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="hidden md:block md:w-[50%] bg-slate-700">Bye</div>
    </div>
  );
};

export default SignIn;
