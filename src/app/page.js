"use client";

import Image from "next/image";
import styles from "./page.module.css";
import imgHome from "@/assets/homePage.svg";
import imgHome2 from "@/assets/homePage2.svg";
import people from "@/assets/people.svg";
import place from "@/assets/place.svg";
import product from "@/assets/product.svg";
import program from "@/assets/program.svg";
import add from "@/assets/add.svg";
import testimonials from "@/assets/testimonials.svg";
import play from "@/assets/play.svg";
import woman from "@/assets/woman.svg";
import woman2 from "@/assets/woman2.svg";
import arrow from "@/assets/arrow.svg";
import SignIn from "@/components/SignIn";
import { useState } from "react";
import JoinIn from "@/components/JoinIn";

export default function Home() {
  const [signInClass, setSignInClass] = useState({
    color: "#8064A2",
    borderBottom: "3px solid #8064A2",
  });
  const [joinInclass, setJoinInClass] = useState({ color: "#939CA3" });
  const [isSignIn, setIsSignIn] = useState(true);

  const signInClick = () => {
    setIsSignIn(true);
    setSignInClass({
      color: "#8064A2",
      borderBottom: "3px solid #8064A2",
    });
    setJoinInClass({ color: "#939CA3" });
  };

  const joinInClick = () => {
    setIsSignIn(false);
    setJoinInClass({
      color: "#8064A2",
      borderBottom: "3px solid #8064A2",
    });
    setSignInClass({ color: "#939CA3" });
  };

  const isBrowser = () => typeof window !== 'undefined';

  function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <>
      <div className="container d-flex flex-column align-items-center">
        <div className="row d-flex justify-content-evenly align-items-center p-4">
          <div className="col-11 col-lg-7">
            <h1 className="fst-italic">
              Explore your <span style={{ color: "#0096C8" }}>hobby</span> or{" "}
              <span style={{ color: "#8064A2" }}>passion</span>
            </h1>
            <p className="mt-4">
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities...
            </p>
            <p>
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>
          </div>

          <div className="auth-form col-11 col-lg-4">
            <div className="d-flex mb-4 justify-content-center justify-content-lg-start">
              <div
                onClick={signInClick}
                style={signInClass}
                className={`fw-bold me-4 fs-5`}
              >
                Sign In
              </div>
              <div
                onClick={joinInClick}
                style={joinInclass}
                className={`fw-bold fs-5`}
              >
                Join In
              </div>
            </div>
            {isSignIn ? <SignIn /> : <JoinIn />}
          </div>
        </div>
        <Image
          src={imgHome2}
          alt="Illustration"
          className="illustration mt-4 col-11"
        />
      </div>

      <div className="container row d-flex justify-content-evenly mt-5">
        <div className="col-11 ms-4 ms-sm-0 col-sm-4 text-center text-md-start m-1 mb-5 p-4" id="people">
          <div className="mb-3 d-flex align-items-center justify-content-center justify-content-md-start">
            <Image src={people} alt="people" />
            <span className="fw-bold ms-3">People</span>
          </div>
          <p className="mb-4">
            Find a teacher, coach, or expert for your hobby interest in your
            locality. Find a partner, teammate, accompanist or collaborator.
          </p>
          <div className="row">
            <button
              className="rounded-1 border-1 px-3 py-1 col-12 col-sm-8 col-md-5 col-lg-4 col-xl-3"
              style={{ borderColor: "#8064A2", color: "#8064A2" }}
            >
              Connect
            </button>
          </div>
        </div>
        <div className="col-11 ms-4 ms-sm-0 col-sm-4 text-center text-md-start m-1 mb-5 p-4" id="place">
          <div className="mb-3 d-flex align-items-center justify-content-center justify-content-md-start">
            <Image src={place} alt="place" />
            <span className="fw-bold ms-3">Place</span>
          </div>
          <p className="mb-4">
            Find a class, school, playground, auditorium, studio, shop or an
            event venue. Book a slot at venues that allow booking through
            hobbycue.
          </p>
          <div className="row">
            <button
              className="rounded-1 border-1 px-3 py-1 col-12 col-sm-8 col-md-5 col-lg-4 col-xl-3"
              style={{ borderColor: "#8064A2", color: "#8064A2" }}
            >
              Meet up
            </button>
          </div>
        </div>
        <div className="col-11 ms-4 ms-sm-0 col-sm-4 text-center text-md-start m-1 mb-5 p-4" id="product">
          <div className="mb-3 d-flex align-items-center justify-content-center justify-content-md-start">
            <Image src={product} alt="product" />
            <span className="fw-bold ms-3">Product</span>
          </div>
          <p className="mb-4">
            Find equipment or supplies required for your hobby. Buy, rent or
            borrow from shops, online stores or from community members.
          </p>
          <div className="row">
            <button
              className="rounded-1 border-1 px-3 py-1 col-12 col-sm-8 col-md-5 col-lg-4 col-xl-3"
              style={{ borderColor: "#8064A2", color: "#8064A2" }}
            >
              Get it
            </button>
          </div>
        </div>
        <div className="col-11 ms-4 ms-sm-0 col-sm-4 text-center text-md-start m-1 mb-5 p-4" id="program">
          <div className="mb-3 d-flex align-items-center justify-content-center justify-content-md-start">
            <Image src={program} alt="program" />
            <span className="fw-bold ms-3">Program</span>
          </div>
          <p className="mb-4">
            Find events, meetups and workshops related to your hobby. Register
            or buy tickets online.
          </p>
          <div className="row">
            <button
              className="rounded-1 border-1 px-3 py-1 col-12 col-sm-8 col-md-5 col-lg-4 col-xl-3"
              style={{ borderColor: "#8064A2", color: "#8064A2" }}
            >
              Attend
            </button>
          </div>
        </div>
      </div>

      <div className="container row d-flex justify-content-evenly mb-5 mt-5 p-4">
        <div className="col-11 ms-4 ms-sm-0 col-sm-9 m-1 text-center text-md-center">
          <div className="mb-3 d-flex align-items-center justify-content-center justify-content-md-start">
            <Image src={add} alt="add" />
            <span className="fw-bold ms-3">Add your own</span>
          </div>
          <p className="mb-4">
            Are you a teacher or expert? Do you sell or rent out equipment,
            venue or event tickets? Or, you know someone who should be on
            hobbycue? Go ahead and Add your Own page
          </p>
          <div className="row">
            <button
              className="rounded-1 border-1 px-3 py-1 col-12 col-sm-4 col-md-3 col-xl-2"
              style={{ borderColor: "#8064A2", color: "#8064A2" }}
            >
              Add new
            </button>
          </div>
        </div>
      </div>

      <div className="container row d-flex justify-content-evenly mb-5 mt-5 text-center text-md-start">
        <div className="col-9 m-1 ms-4 ms-sm-0">
          <div className="mb-3 d-flex align-items-center justify-content-center justify-content-md-start">
            <Image src={testimonials} alt="testimonials" />
            <span className="fw-bold ms-3">Testimonials</span>
          </div>
          <p className="mb-4">
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </p>
          <div className="d-flex row justify-content-evenly flex-column-reverse flex-lg-row">
            <div
              className="col-12 col-lg-7 d-flex justify-content-evenly align-items-center rounded-1"
              style={{ backgroundColor: "#CCC1DA" }}
            >
              <div
                className="rounded-circle bg-white d-flex justify-content-center align-items-center"
                style={{ height: "40px", width: "40px" }}
              >
                <Image src={play} alt="play" />
              </div>
              <div className="d-flex justify-content-evenly w-sm-50">
                <input type="range" size={1} />
                <span style={{ color: "#8064A2" }}>0:00</span>
              </div>
              <Image
                src={woman2}
                alt="Shubha Nagarajan"
                width={30}
                className="w-sm-25"
              />
            </div>
            <div className="col-12 col-md-4 col-lg-4 d-flex justify-content-evenly align-items-center">
              <Image src={woman2} alt="Shubha Nagarajan" className="w-25" />
              <div>
                <div className="fw-bold" style={{ color: "#8064A2" }}>
                  Shubha Nagarajan
                </div>
                <div style={{ color: "#0096C8" }}>Classical Dancer</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <p className="d-inline fw-bold fst-italic fs-1">
          Your <span className="spanText">Hobby</span>, Your
          <span className="spanText"> Community...</span>
        </p>
        <div className="mt-4">
          <button className="btn-get-started text-white border-0 rounded-1 px-3 py-1">
            Get started
          </button>
        </div>
        <div className="row mt-5 illustrations justify-content-center">
          <Image className="col-11" src={imgHome} alt="hobbies" />
        </div>
      </div>

      <Image onClick={scrollToTop} src={arrow} alt="scroll to top" style={{position: "fixed", bottom: "5vh", right: "5vw"}} />
    </>
  );
}
