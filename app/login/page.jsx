"use client";
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import '../styles/css/vendor/bootstrap.min.css'; // Adjust path as necessary
import '../styles/css/styles.min.css'
import GoogleLogo from "../svg/GoogleLogo";
import FacebookLogo from "../svg/FacebookLogo";
import TwitterLogo from "../svg/TwitterLogo";
import TwitchLogo from "../svg/TwitchLogo";
import YoutubeLogo from "../svg/YoutubeLogo";
import LoginForm from "../../components/LoginForm";
import socialLinksData from '../../socialLinks.json'; // Import the social links data



function LoginPage() {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
 
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    setActiveTab(0); // Ensures the first tab is active on load
  }, []);
  const formStyleActive = {
    display: 'block', // Show the form
    transition: 'all 0.3s ease'
  };

  const formStyleInactive = {
    display: 'none', // Hide the form
    transition: 'all 0.3s ease'
  };


 // Generate social links dynamically
const socialLinks = socialLinksData.map((link) => (
  `<a class="social-link ${link.name.toLowerCase()}" href="${link.url}">
  ${link.icon.toLowerCase()}
  </a>`
  
));

// Check if the element with class 'social-links' exists before setting innerHTML
const socialLinksHtml = socialLinks.join('');
const socialLinksElement = document.querySelector('.social-links');

if (socialLinksElement) {
  socialLinksElement.innerHTML = socialLinksHtml;
} else {
  console.error("Element with class 'social-links' not found.");
}

  return (
    <div className="landing">
      <div className="landing-decoration"></div>
      <div className="landing-info">
        <div className="logo">
        <GoogleLogo />
       </div>
        <h2 className="landing-info-pretitle">Welcome to</h2>
        <h1 className="landing-info-title">Superteam UK</h1>
        <p className="landing-info-text">The fastest growing blockchain network & community! Connect with your friends and play with our quests and badges gamification system!</p>
        <div className="tab-switch">
        <p className={`tab-switch-button ${activeTab === 0 ? 'active' : ''}`} onClick={() => handleTabClick(0)}>
        Login
      </p>
      <p className={`tab-switch-button ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>
        Register
      </p>
        </div>
      </div>
      <div className="landing-form">
        {/* Login Form */}
        <div className="form-box login-register-form-element" style={activeTab === 0 ? formStyleActive : formStyleInactive}>
        <img className="form-box-decoration overflowing" src="/img/landing/rocket.png" alt="rocket" />
          <h2 className="form-box-title">Account Login</h2>
          <LoginForm />
         
          <p className="lined-text">Login with your Social Account</p>

          <div className="social-links">
         
        </div>

        </div>
        {/* Additional forms */}
        <div className="form-box login-register-form-element" style={activeTab === 1 ? formStyleActive : formStyleInactive}>
       <img className="form-box-decoration overflowing" src="/img/landing/rocket.png" alt="rocket" />
          <h2 className="form-box-title">Create your Account!</h2>
          <form className="form">
           {/* Additional form items */}
            <div className="form-row">
              <div className="form-item">
                <div className="form-input">
                  <label htmlFor="login-username">Username</label>
                  <input type="text" id="login-username" name="login_username" />
                </div>
              </div>
            </div>
            {/* Additional form items */}
            <div className="form-row">
              <div className="form-item">
                <div className="form-input">
                  <label htmlFor="login-email">Your Email</label>
                  <input type="text" id="login-email" name="login_email" />
                </div>
              </div>
            </div>

           {/* Additional form items */}
           <div className="form-row">
              <div className="form-item">
                <div className="form-input">
                  <label htmlFor="login-password">Password</label>
                  <input type="password" id="login-password" name="login_password" />
                </div>
              </div>
            </div>

            {/* Additional form items */}
            <div className="form-row">
          
            <div className="form-item">
              <div className="form-input">
                <label for="login-repeat-password">Repeat Password</label>
                <input type="password" id="login-repeat-password" name="login_repeat_password" />
              </div>
            
            </div>
            <div className="form-row space-between">
           <div className="form-item">
              <div className="checkbox-wrap">
                <input type="checkbox" id="login-remember" name="login_remember" checked="" />
                <div className="checkbox-box">
                  <svg className="icon-cross">
                    <use xlinkHref="#svg-cross"></use>
                  </svg>
                </div>
                <label for="login-remember">Remember Me</label>
              </div>
            </div>
            <div className="form-item">
              <a className="form-link" href="#">Forgot Password?</a>
            </div>
            
          </div>
          <div className="form-row">
            <div className="form-item">
              <button className="button medium secondary">Login to your Account!</button>
            </div>
          
          </div>
          
          </div>
          </form>
          <p className="lined-text">Login with your Social Account</p>

          <div className="social-links">
          <a className="social-link facebook" href="#">
            <svg className="icon-facebook">
              <use xlinkHref="#svg-facebook"></use>
            </svg>
          </a>
           <a className="social-link twitter" href="#">
            <svg className="icon-twitter">
              <use xlinkHref="#svg-twitter"></use>
            </svg>
          </a>
          <a className="social-link twitch" href="#">
            <svg className="icon-twitch">
              <use xlinkHref="#svg-twitch"></use>
            </svg>
           </a>
          <a className="social-link youtube" href="#">
            <svg className="icon-youtube">
              <use xlinkHref="#svg-youtube"></use>
            </svg>
          </a>
        </div>

        </div>
    
      </div>
    </div>
  );
}

export default LoginPage;