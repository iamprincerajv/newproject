import Image from "next/image";
import React from "react";
import lock from "@/assets/lock.svg";

const SignIn = () => {
  return (
    <form className="d-flex flex-column-reverse flex-lg-column">
      <div>
        <button className="btn btn-outline-dark btn-google mb-3 fw-bold">
          <i className="bi bi-google"></i> Continue with Google
        </button>
        <button className="btn btn-outline-dark btn-facebook fw-bold">
          <i className="bi bi-facebook"></i> Continue with Facebook
        </button>
      </div>
      <div className="text-center my-3 fw-bold">Or connect with</div>
      <div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required
          />
        </div>
        <div className="form-check d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <input
              className="border-1 boder-black"
              type="checkbox"
              id="remember-me"
            />
            <label className="form-check-label" htmlFor="remember-me">
              Remember me
            </label>
          </div>
          <a
            href="#"
            className="text-decoration-none text-black d-flex align-items-center"
          >
            <Image className="me-2" src={lock} alt="forgot password" />
            <span>Forgot password?</span>
          </a>
        </div>
        <button
          type="submit"
          className="boder-2 rounded-2 boder-black py-2 fw-bold w-100 mt-4"
        >
          Continue
        </button>
      </div>
    </form>
  );
};

export default SignIn;
