import { useContext, useState } from "react";
import React from "react";
import imG from "../Assets/imG.jpg";
import SearchBar from "./SearchBar";
import "./HomePage.css";
import icon from "../Assets/pexels-thirdman-5327584.jpg";
import AuthHomepage from "../routes/authHomepage.js";
import { AuthContext } from "../auth/Auth";

const HomePage = () => {
  const [res, setres] = useState("");

  const { loggedIn } = useContext(AuthContext);
  if (loggedIn) {
    return(<>
      <AuthHomepage />
    </>)
  }

  return (
    <>
      <div className="banner row py-5 ps-5 align-items-center">
        <div className="col-6 text-light text-center">
          <h1>Book Your Clinic Appointment NOW!</h1>
          <p>Easy interface to manage your clinic visit appointments</p>
        </div>

        <div className="image-overlay-container">
          <img src={imG} alt="Email" className="main-image" />

          {/* Overlay Text */}
          <div className="text-overlay">Find the best Doctors</div>

          {/* Overlay Search Bar */}
          <div className="search-bar-container">
            <SearchBar onSearch={setres} />
          </div>
        </div>
      </div>

      <div className="content-section bg-dark row py-5 ps-5 align-items-center">
        <div className="flex-container">
          <div className="flex-item">
            <h2>Why choose Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quod accusantium, dolorem sapiente minus et quis assumenda nemo
              optio numquam quidem in exercitationem quisquam debitis ut
              dignissimos magnam alias delectus.
            </p>
          </div>
          <div className="flex-item">
            <h2>Appointment</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quod accusantium, dolorem sapiente minus et quis assumenda nemo
              optio numquam quidem in exercitationem quisquam debitis ut
              dignissimos magnam alias delectus.
            </p>
          </div>
          <div className="flex-item">
            <h2>Emergency Cases</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quod accusantium, dolorem sapiente minus et quis assumenda nemo
              optio numquam quidem in exercitationem quisquam debitis ut
              dignissimos magnam alias delectus.
            </p>
          </div>
          <div className="flex-item">
            <h2>Working hours</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quod accusantium, dolorem sapiente minus et quis assumenda nemo
              optio numquam quidem in exercitationem quisquam debitis ut
              dignissimos magnam alias delectus.
            </p>
          </div>
        </div>

        <div className="about-us-section">
          <h2>About Us</h2>
          <div className="about-us">
            <div className="about-us-image">
              <img src={icon} alt="Us" />
            </div>
            <div className="about-us-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, fugit, reprehenderit libero inventore, minima
                corrupti accusantium vel necessitatibus tempore voluptas
                asperiores dolor quaerat. Ad officiis voluptatem nemo impedit,
                necessitatibus eveniet. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Reiciendis, voluptas ipsa optio, quibusdam
                adipisci sunt debitis ducimus similique officiis a eveniet animi
                blanditiis ab rem dicta eligendi cumque enim modi.
              </p>
            </div>
          </div>
        </div>

        <div className="circular-items">
          <div className="circular-item">
            <h1>
              <b>1000+</b>
            </h1>
            <h2>
              <b>Satisfied Patients</b>
            </h2>
          </div>
          <div className="circular-item">
            <h1>
              <b>1000+</b>
            </h1>
            <h2>
              <b>Satisfied Patients</b>
            </h2>
          </div>
          <div className="circular-item">
            <h1>
              <b>1000+</b>
            </h1>
            <h2>
              <b>Satisfied Patients</b>
            </h2>
          </div>
        </div>

        {/* <div className="contact-us">
          <h2>Contact Us</h2>
        </div> */}
      </div>
    </>
  );
};

export default HomePage;
