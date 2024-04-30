import React from "react";

function ResetPassword() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-5 col-lg-6 col-md-7 ">
          <div className="reset-passowrd">
            <div className="card radius-10 w-100 mt-8">
              <div className="card-body p-4">
                <div className="text-center">
                  <h4>Reset password</h4>
                  <p>You will receive an e-mail in maximum 60 seconds</p>
                </div>
                <form className="form-body row g-3">
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
                  <div className="col-12 col-lg-12">
                    <div className="d-grid">
                      <button type="button" className="btn btn-primary">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
