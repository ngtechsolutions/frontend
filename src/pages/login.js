import useAutoLogin from "hooks/use-auto-login";
import useYupValidationResolver from "hooks/use-yup-validation-resolver";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";

import axios from "axios";
import InputField from "components/ui-elements/input-field";

import { loginSchema } from "configs/yup-validation-schemas";

import { asyncLogin } from "services/reqres/requests";
import { useState } from "react";

function Login() {
  const dispatch = useDispatch();

  const resolver = useYupValidationResolver(loginSchema);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver });

  const onSubmit = () => {
    console.log("onSubmit", email, pass);
    dispatch(asyncLogin({ email: email, password: pass }));
  };

  useAutoLogin(); // will redirect to '/' or '/from-path' if user is logged in

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
      );

      console.log(userInfo.data);
      dispatch(
        asyncLogin({
          email: userInfo.data.email,
          password: tokenResponse.access_token,
        })
      );
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-5 col-md-7 mt-5">
          <div className="card radius-10">
            <div className="card-body p-4">
              <div className="text-center">
                <h4>Sign In</h4>
                <p>Sign In to your account</p>
              </div>
              <form className="form-body row g-3">
                <div className="col-12 col-lg-12">
                  <div className="d-grid gap-2">
                    {/* <a className="btn border border-2 border-primary">
                      <img
                        src="assets/images/icons/google.png"
                        width="20"
                        alt=""
                      />
                      <span className="ms-3 fw-500">Sign in with Google</span>
                    </a> */}
                    <button
                      type="button"
                      className="btn border border-2 border-primary"
                      onClick={googleLogin}
                      // disabled={renderProps.disabled}
                    >
                      <img
                        src="assets/images/icons/google.png"
                        width="20"
                        alt=""
                      />
                      <span className="ms-3 fw-500">Sign in with Google</span>
                    </button>
                  </div>
                </div>
                <div className="col-12 col-lg-12">
                  <div className="position-relative border-bottom my-3">
                    <div className="position-absolute seperator-2 translate-middle-y">
                      OR
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="inputEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    name="email"
                    placeholder="abc@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="inputPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Your password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                </div>
                <div className="col-12 col-lg-6">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckRemember"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckRemember"
                    >
                      Remember Me
                    </label>
                  </div>
                </div>
                <div className="col-12 col-lg-6 text-end">
                  <Link
                    to="/reset-password"
                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-1"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="col-12 col-lg-12">
                  <div className="d-grid">
                    <button onClick={onSubmit} className="btn btn-primary">
                      Sign In
                    </button>
                  </div>
                </div>
                <div className="col-12 col-lg-12 text-center">
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-1"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
