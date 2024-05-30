import { useState } from 'react';

import '../app/styles/css/vendor/bootstrap.min.css'; // Adjust path as necessary
import '../app/styles/css/styles.min.css';
import Svglogo from "../app/svg/Swvsvg";
import GoogleLogo from "../app/svg/GoogleLogo";
import FacebookLogo from "../app/svg/FacebookLogo";
import TwitterLogo from "../app/svg/TwitterLogo";
import TwitchLogo from "../app/svg/TwitchLogo";
import YoutubeLogo from "../app/svg/YoutubeLogo";
function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            console.log('Login successful:', data);
            // Redirect or manage login state
        } else {
            console.error('Login failed:', data.message);
        }
    };

    return (
        <div>

      <img className="form-box-decoration overflowing" src="/img/landing/rocket.png" alt="rocket"></img>
      {/*  /FORM BOX DECORATION */}

      {/*  FORM BOX TITLE */}
      <h2 className="form-box-title">Account Login</h2>
      {/*  /FORM BOX TITLE */}
        <form onSubmit={handleSubmit}>
              <div className="form-row">
          {/*  FORM ITEM */}
          <div className="form-item">
            {/*  FORM INPUT */}
            <div className="form-input">
              <label for="login-username">Username or Email</label>
            <input type="email" id="login-username" style={{'borderRadius': '12px', transition: 'border-color .2s ease-in-out', border: '1px solid #dedeea', width: '100%','height':'54px', 'padding': '0 18px'}} name="login_username" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div></div></div>
        


            <div class="form-row">
                <div class="form-item">
                    <div class="form-input">
                        <label for="login-password">Password</label>
            <input type="password" id="login-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div></div></div>

          <div className="form-row space-between">
          {/*  FORM ITEM */}
          <div className="form-item">
            {/*  CHECKBOX WRAP */}
            <div className="checkbox-wrap">
              <input type="checkbox" id="login-remember" name="login_remember" checked></input>
              {/*  CHECKBOX BOX */}
              <div className="checkbox-box">
                {/*  ICON CROSS */}
                <Svglogo />
                {/*  /ICON CROSS */}
              </div>
              {/*  /CHECKBOX BOX */}
              <label for="login-remember">Remember Me</label>
            </div>
            {/*  /CHECKBOX WRAP */}
          </div>
          {/*  /FORM ITEM */}
  
          {/*  FORM ITEM */}
          <div className="form-item">
            {/*  FORM LINK */}
            <a className="form-link" href="#">Forgot Password?</a>
            {/*  /FORM LINK */}
          </div>
          {/*  /FORM ITEM */}
        </div>
        {/*  /FORM ROW */}
  
        {/*  FORM ROW */}
        <div className="form-row">
          {/*  FORM ITEM */}
          <div className="form-item">
            {/*  BUTTON */}
            <button className="button medium secondary">Login to your Account!</button>
            {/*  /BUTTON */}
          </div>
          {/*  /FORM ITEM */}
        </div>


        </form>


      {/*  LINED TEXT */}
      <p className="lined-text">Login with your Social Account</p>
      {/*  /LINED TEXT */}
  
      {/*  SOCIAL LINKS */}
      <div className="social-links">
        {/*  SOCIAL LINK */}
        <a className="social-link facebook" href="#">
          {/*  ICON FACEBOOK */}
          <FacebookLogo />
          {/*  /ICON FACEBOOK */}
        </a>
        {/*  /SOCIAL LINK */}
  
        {/*  SOCIAL LINK */}
        <a className="social-link twitter" href="#">
          {/*  ICON TWITTER */}
    <TwitterLogo />
             {/*  /ICON TWITTER */}
        </a>
        {/*  /SOCIAL LINK */}
  
        {/*  SOCIAL LINK */}
        <a className="social-link twitch" href="#">
          {/*  ICON TWITCH */}
    <TwitchLogo />
          {/*  /ICON TWITCH */}
        </a>
        {/*  /SOCIAL LINK */}
  
        {/*  SOCIAL LINK */}
        <a className="social-link youtube" href="#">
          {/*  ICON YOUTUBE */}
        <YoutubeLogo />   
        {/*  /ICON YOUTUBE */}
        </a>
        {/*  /SOCIAL LINK */}
      </div>
      {/*  /SOCIAL LINKS */}
      </div>

    );
}

export default LoginForm;