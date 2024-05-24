import React from 'react';
import '../../../../styles/css/vendor/bootstrap.min.css'; // Assuming you have an external CSS file
import Navcomponent from '../../../../components/Navigation/navwidget1';
import Navcomponent1 from '../../../../components/Navigation/navwidget2';
import Navcomponent2 from '../../../../components/Navigation/navwidget3';
import Chatwidget from '../../../../components/Chat/chatwidget';
import Chatwidget1 from '../../../../components/Chat/chatwidget1';
import Header1 from '../../../../components/Header';

function ProfileAbout() {
  const script = document.createElement("script");
  script.src = "/js/app.bundle.min.js";
  script.async = true;
  document.body.appendChild(script);
  return (
    
    <div>
    <Navcomponent />
    <Navcomponent1 />
    <Navcomponent2 />
    <Chatwidget />
    <Chatwidget1 />
    <Header1 />
    <div className="content-grid">
      <div className="grid-column">
        <div className="widget-box">
          {/* Timeline Information */}
          <div className="timeline-information">
            <p className="timeline-information-title">Lead Costume Designer</p>
            <p className="timeline-information-date">2015 - NOW</p>
            <p className="timeline-information-text">Lead Costume Designer for the "Amazzo Costumes" agency...</p>
          </div>
          {/* More timeline information components */}
        </div>
      </div>

      <div className="grid-column">
        <div className="widget-box">
          {/* Progress Arc Summary */}
          <div className="progress-arc-summary">
            <div className="progress-arc-wrap">
              <div className="progress-arc">
                <canvas id="profile-completion-chart"></canvas>
              </div>
              <div className="progress-arc-info">
                <p className="progress-arc-title">59%</p>
              </div>
            </div>
            <div className="progress-arc-summary-info">
              <p className="progress-arc-summary-title">Profile Completion</p>
              <p className="progress-arc-summary-subtitle">Marina Valentine</p>
              <p className="progress-arc-summary-text">Complete your profile...</p>
            </div>
          </div>
          {/* More components like Achievement Status List */}
        </div>
      </div>
    </div>
    
    </div>
    
  );
}

export default ProfileAbout;