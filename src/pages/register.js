import useAutoLogin from "hooks/use-auto-login";
// import useYupValidationResolver from "hooks/use-yup-validation-resolver";
// import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// import InputField from "components/ui-elements/input-field";

// import { registerSchema } from "configs/yup-validation-schemas";

import { asyncRegister } from "services/reqres/requests";

function Register() {
  const dispatch = useDispatch();
  // const resolver = useYupValidationResolver(registerSchema);
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({ resolver });

  const onSubmit = (data) => {
    console.log("hello");
    dispatch(asyncRegister(data));
  };

  useAutoLogin(); // will redirect to '/' if user is logged in

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-5 col-lg-6 col-md-7 mt-5">
          <div className="card radius-10">
            <div className="card-body p-4">
              <div className="text-center">
                <h4>Sign Up</h4>
                <p>Creat New account</p>
              </div>
              <form onSubmit={onSubmit} className="form-body row g-3">
                <div className="col-12 col-lg-12">
                  <div className="d-grid gap-2">
                    <a href="./#" className="btn border border-2 border-primary">
                      <img
                        src="assets/images/icons/google.png"
                        width="20"
                        alt=""
                      />
                      <span className="ms-3 fw-500">Sign up with Google</span>
                    </a>
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
                  <label htmlFor="inputName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    placeholder="Your name"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="inputEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="abc@example.com"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="inputPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Your password"
                  />
                </div>
                <div className="col-12 col-lg-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      I agree the Terms and Conditions
                    </label>
                  </div>
                </div>
                <div className="col-12 col-lg-12">
                  <div className="d-grid">
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value={"Sign Up"}
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-12 text-center">
                  <p className="mb-0">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-1"
                    >
                      Sign In
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

export default Register;
