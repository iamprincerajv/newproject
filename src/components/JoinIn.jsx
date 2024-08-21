import Image from "next/image";
import React from "react";
import lock from "@/assets/lock.svg";

const JoinIn = () => {
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
        <div className="form-check d-flex justify-content-end align-items-center">
          <span style={{ color: "#939CA3", fontSize: "13px" }}>
            Password strength
          </span>
        </div>
        <span style={{ fontSize: "14px" }}>
          By continuing, you agree to our <strong>Terms of Service</strong> and{" "}
          <strong>Privacy Policy</strong>.
        </span>
        <button
          type="submit"
          className="rounded-2 py-2 fw-bold border-0 text-white w-100 mt-2"
          style={{ backgroundColor: "#8064A2" }}
        >
          Agree and Continue
        </button>
      </div>
    </form>
  );
};

export default JoinIn;
