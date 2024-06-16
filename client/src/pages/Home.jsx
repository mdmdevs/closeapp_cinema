import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <>
        <nav>
          <ul>
            <li>
              <a href="landingpage.html">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="forms.html">Forms</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </nav>
        <section>
          <div class="landing"></div>
          <div class="main-content">
            <h1>Unlocking Potentials</h1>
            <p>
              Welcome to the gateway of your cinematic journey! At Close Up
              Cinema, we specialize in bringing dreams to life on the silver
              screen. Whether you're a seasoned actor seeking your next
              breakthrough role or a fresh face eager to make your mark, we're
              here to match talent with opportunity. Join us in shaping the
              stories that captivate audiences worldwide. Your spotlight moment
              awaits!
            </p>

            <div class="box">
              <Link to="register">
                <button>Register NOW</button>
              </Link>
            </div>
          </div>
          <script src="script.js"></script>
        </section>
      </>
    </div>
  );
};

export default Home;
