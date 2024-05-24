import React, { useState, useEffect } from 'react';
import '../../../../styles/css/vendor/bootstrap.min.css'; // Adjust path as necessary
import '../../../../styles/css/styles.min.css'
import { ReactComponent as Logo } from '../../../../styles/img/drawing4.svg'; // Importing SVG as a React component


function LoginPage() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  // Add 'active' class to the first tab on component mount
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


  return (
    <div className="landing">
      <div className="landing-decoration"></div>
      <div className="landing-info">
        <div className="logo">
       <Logo />
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
          <img className="form-box-decoration overflowing" src="img/landing/rocket.png" alt="rocket" />
          <h2 className="form-box-title">Account Login</h2>
          <form className="form">
            <div className="form-row">
              <div className="form-item">
                <div className="form-input">
                  <label htmlFor="login-username">Username or Email</label>
                  <input type="text" id="login-username" name="login_username" />
                </div>
              </div>
            </div>
            {/* Additional form items */}
            <div class="form-row">
          
            <div class="form-item">
              <div class="form-input">
                <label for="login-password">Password</label>
                <input type="password" id="login-password" name="login_password" />
              </div>
            
            </div>
            <div class="form-row space-between">
           <div class="form-item">
              <div class="checkbox-wrap">
                <input type="checkbox" id="login-remember" name="login_remember" checked="" />
                <div class="checkbox-box">
                  <svg class="icon-cross">
                    <use xlinkHref="#svg-cross"></use>
                  </svg>
                </div>
                <label for="login-remember">Remember Me</label>
              </div>
            </div>
            <div class="form-item">
              <a class="form-link" href="#">Forgot Password?</a>
            </div>
            
          </div>
          <div class="form-row">
            <div class="form-item">
              <button class="button medium secondary">Login to your Account!</button>
            </div>
          
          </div>
          
          </div>
          </form>
          <p class="lined-text">Login with your Social Account</p>

          <div class="social-links">
          <a class="social-link facebook" href="#">
            <svg class="icon-facebook">
              <use xlinkHref="#svg-facebook"></use>
            </svg>
          </a>
           <a class="social-link twitter" href="#">
            <svg class="icon-twitter">
              <use xlinkHref="#svg-twitter"></use>
            </svg>
          </a>
          <a class="social-link twitch" href="#">
            <svg class="icon-twitch">
              <use xlinkHref="#svg-twitch"></use>
            </svg>
           </a>
          <a class="social-link youtube" href="#">
            <svg class="icon-youtube">
              <use xlinkHref="#svg-youtube"></use>
            </svg>
          </a>
        </div>

        </div>
        {/* Additional forms */}
        <div className="form-box login-register-form-element" style={activeTab === 1 ? formStyleActive : formStyleInactive}>
          <img className="form-box-decoration overflowing" src="img/landing/rocket.png" alt="rocket" />
          <h2 className="form-box-title">Create your Account!</h2>
          <form className="form">
            <div className="form-row">
              <div className="form-item">
                <div className="form-input">
                  <label htmlFor="login-username">Your Email</label>
                  <input type="text" id="login-username" name="login_username" />
                </div>
              </div>
            </div>
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
                  <label htmlFor="login-username">Password</label>
                  <input type="password" id="login-password" name="login_password" />
                </div>
              </div>
            </div>

            {/* Additional form items */}
            <div class="form-row">
          
            <div class="form-item">
              <div class="form-input">
                <label for="login-password">Repeat Password</label>
                <input type="password" id="login-password" name="login_password" />
              </div>
            
            </div>
            <div class="form-row space-between">
           <div class="form-item">
              <div class="checkbox-wrap">
                <input type="checkbox" id="login-remember" name="login_remember" checked="" />
                <div class="checkbox-box">
                  <svg class="icon-cross">
                    <use xlinkHref="#svg-cross"></use>
                  </svg>
                </div>
                <label for="login-remember">Remember Me</label>
              </div>
            </div>
            <div class="form-item">
              <a class="form-link" href="#">Forgot Password?</a>
            </div>
            
          </div>
          <div class="form-row">
            <div class="form-item">
              <button class="button medium secondary">Login to your Account!</button>
            </div>
          
          </div>
          
          </div>
          </form>
          <p class="lined-text">Login with your Social Account</p>

          <div class="social-links">
          <a class="social-link facebook" href="#">
            <svg class="icon-facebook">
              <use xlinkHref="#svg-facebook"></use>
            </svg>
          </a>
           <a class="social-link twitter" href="#">
            <svg class="icon-twitter">
              <use xlinkHref="#svg-twitter"></use>
            </svg>
          </a>
          <a class="social-link twitch" href="#">
            <svg class="icon-twitch">
              <use xlinkHref="#svg-twitch"></use>
            </svg>
           </a>
          <a class="social-link youtube" href="#">
            <svg class="icon-youtube">
              <use xlinkHref="#svg-youtube"></use>
            </svg>
          </a>
        </div>

        </div>
    
      </div>
      <script src="/js/app.bundle.min.js"></script>
    </div>
  );
}

export default LoginPage;