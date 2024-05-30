"use client";
import React from 'react';
import '../styles/css/vendor/bootstrap.min.css';
import '../styles/css/styles.min.css' 
import '../styles/css/vendor/tiny-slider.css'
import GoogleLogo from "../svg/GoogleLogo";
import FacebookLogo from "../svg/FacebookLogo";
import TwitterLogo from "../svg/TwitterLogo";
import TwitchLogo from "../svg/TwitchLogo";
import YoutubeLogo from "../svg/YoutubeLogo";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm"
import Svglogo from "../svg/Swvsvg"


function login1() {
  const script = document.createElement("script");
  script.src = "/js/app.bundle.min.js";
  script.async = true;
  document.body.appendChild(script);
return (
    <div>
{/*  LANDING */}
<div className="landing">
  {/*  LANDING DECORATION */}
  <div className="landing-decoration"></div>
      <div className="landing-info">
        <div className="logo">
        <GoogleLogo />
       </div>
        <h2 className="landing-info-pretitle">Welcome to</h2>
        <h1 className="landing-info-title">Superteam UK</h1>
        <p className="landing-info-text">The fastest growing blockchain network & community! Connect with your friends and play with our quests and badges gamification system!</p>
        <div className="tab-switch">
      {/*  TAB SWITCH BUTTON */}
      <p className="tab-switch-button login-register-form-trigger">Login</p>
      {/*  /TAB SWITCH BUTTON */}

      {/*  TAB SWITCH BUTTON */}
      <p className="tab-switch-button login-register-form-trigger">Register</p>
      {/*  /TAB SWITCH BUTTON */}
    </div>
    {/*  /TAB SWITCH */}
  </div>
  {/*  /LANDING INFO */}

  {/*  LANDING FORM */}
  <div className="landing-form">
    {/*  FORM BOX */}
    <div className="form-box login-register-form-element">
  
  
      {/*  FORM */}
      <LoginForm />
      {/*  /FORM */}
  
    </div>
    {/*  /FORM BOX */}
  
    {/*  FORM BOX */}
    <div className="form-box login-register-form-element">
        
      {/*  FORM */}
      
      <RegisterForm />
      
         </div>
    {/*  /FORM BOX */}
  </div>
  {/*  /LANDING FORM */}
</div>
</div>
);
}

export default login1;