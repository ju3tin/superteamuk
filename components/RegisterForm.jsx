
import { useState } from 'react';

import '../app/styles/css/vendor/bootstrap.min.css'; // Adjust path as necessary
import '../app/styles/css/styles.min.css';
import Svglogo from "../app/svg/Swvsvg";
import GoogleLogo from "../app/svg/GoogleLogo";
import FacebookLogo from "../app/svg/FacebookLogo";
import TwitterLogo from "../app/svg/TwitterLogo";
import TwitchLogo from "../app/svg/TwitchLogo";
import YoutubeLogo from "../app/svg/YoutubeLogo";
function RegisterForm() {
    return (
    <div>

      {/*  FORM BOX DECORATION */}
      <img className="form-box-decoration" src="/img/landing/rocket.png" alt="rocket"></img>
      {/*  /FORM BOX DECORATION */}

      {/*  FORM BOX TITLE */}
      <h2 className="form-box-title">Create your Account!</h2>
      {/*  /FORM BOX TITLE */}
  
<form className="form">
{/*  FORM ROW */}
<div className="form-row">
  {/*  FORM ITEM */}
  <div className="form-item">
    {/*  FORM INPUT */}
    <div className="form-input">
      <label for="register-email">Your Email</label>
      <input type="text" id="register-email" name="register_email"></input>
    </div>
    {/*  /FORM INPUT */}
  </div>
  {/*  /FORM ITEM */}
</div>
{/*  /FORM ROW */}

{/*  FORM ROW */}
<div className="form-row">
  {/*  FORM ITEM */}
  <div className="form-item">
    {/*  FORM INPUT */}
    <div className="form-input">
      <label for="register-username">Username</label>
      <input type="text" id="register-username" name="register_username"></input>
    </div>
    {/*  /FORM INPUT */}
  </div>
  {/*  /FORM ITEM */}
</div>
{/*  /FORM ROW */}

{/*  FORM ROW */}
<div className="form-row">
  {/*  FORM ITEM */}
  <div className="form-item">
    {/*  FORM INPUT */}
    <div className="form-input">
      <label for="register-password">Password</label>
      <input type="password" id="register-password" name="register_password"></input>
    </div>
    {/*  /FORM INPUT */}
  </div>
  {/*  /FORM ITEM */}
</div>
{/*  /FORM ROW */}

{/*  FORM ROW */}
<div className="form-row">
  {/*  FORM ITEM */}
  <div className="form-item">
    {/*  FORM INPUT */}
    <div className="form-input">
      <label for="register-password-repeat">Repeat Password</label>
      <input type="password" id="register-password-repeat" name="register_password_repeat"></input>
    </div>
    {/*  /FORM INPUT */}
  </div>
  {/*  /FORM ITEM */}
</div>
{/*  /FORM ROW */}

{/*  FORM ROW */}
<div className="form-row">
  {/*  FORM ITEM */}
  <div className="form-item">
    {/*  CHECKBOX WRAP */}
    <div className="checkbox-wrap">
      <input type="checkbox" id="register-newsletter" name="register_newsletter" checked></input>
      {/*  CHECKBOX BOX */}
      <div className="checkbox-box">
        {/*  ICON CROSS */}
        <Svglogo />
        {/*  /ICON CROSS */}
      </div>
      {/*  /CHECKBOX BOX */}
      <label for="register-newsletter">Send me news and updates via email</label>
    </div>
    {/*  /CHECKBOX WRAP */}
  </div>
  {/*  /FORM ITEM */}
</div>
{/*  /FORM ROW */}

{/*  FORM ROW */}
<div className="form-row">
  {/*  FORM ITEM */}
  <div className="form-item">
    {/*  BUTTON */}
    <button className="button medium primary">Register Now!</button>
    {/*  /BUTTON */}
  </div>
  {/*  /FORM ITEM */}
</div>
{/*  /FORM ROW */}
</form>
{/*  /FORM */}

{/*  FORM TEXT */}
<p className="form-text">You'll receive a confirmation email in your inbox with a link to activate your account. If you have any problems, <a href="#">contact us</a>!</p>
{/*  /FORM TEXT */}
</div>

);
}

export default RegisterForm;