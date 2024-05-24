import React from 'react';
import '../../../../styles/css/vendor/bootstrap.min.css';
import '../../../../styles/css/styles.min.css' 
import '../../../../styles/css/vendor/tiny-slider.css'
import Navcomponent from '../../../../components/Navigation/navwidget1';
import Navcomponent1 from '../../../../components/Navigation/navwidget2';
import Navcomponent2 from '../../../../components/Navigation/navwidget3';
import Chatwidget from '../../../../components/Chat/chatwidget';
import Chatwidget1 from '../../../../components/Chat/chatwidget1';
import Header1 from '../../../../components/Header';
import Bar1 from '../../../../components/Bar';
import Profileheader from '../../../../components/Profile/header';
import SectionNavigation from '../../../../components/Section/Navigation';

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
    <Bar1 />
    <div className="content-grid">
    {/* PROFILE HEADER */}
    <Profileheader />
    {/* /PROFILE HEADER */}

    {/* SECTION NAVIGATION */}
    <SectionNavigation />
    {/* /SECTION NAVIGATION */}

    {/* GRID */}
    <div className="grid grid-3-6-3">
      {/* GRID COLUMN */}
      <div className="grid-column">
        {/* WIDGET BOX */}
        <div className="widget-box">
          {/* WIDGET BOX SETTINGS */}
          <div className="widget-box-settings">
            {/* POST SETTINGS WRAP */}
            <div className="post-settings-wrap">
              {/* POST SETTINGS */}
              <div className="post-settings widget-box-post-settings-dropdown-trigger">
                {/* POST SETTINGS ICON */}
                <svg className="post-settings-icon icon-more-dots">
                  <use xlinkHref="#svg-more-dots"></use>
                </svg>
                {/* /POST SETTINGS ICON */}
              </div>
              {/* /POST SETTINGS */}
      
              {/* SIMPLE DROPDOWN */}
              <div className="simple-dropdown widget-box-post-settings-dropdown">
                {/* SIMPLE DROPDOWN LINK */}
                <p className="simple-dropdown-link">Widget Settings</p>
                {/* /SIMPLE DROPDOWN LINK */}
              </div>
              {/* /SIMPLE DROPDOWN */}
            </div>
            {/* /POST SETTINGS WRAP */}
          </div>
          {/* /WIDGET BOX SETTINGS */}
      
          {/* WIDGET BOX TITLE */}
          <p className="widget-box-title">About Me</p>
          {/* /WIDGET BOX TITLE */}
      
          {/* WIDGET BOX CONTENT */}
          <div className="widget-box-content">
            {/* PARAGRAPH */}
            <p className="paragraph">Hi! My name is Marina but some people may know me as GameHuntress! I have a Twitch channel where I stream, play and review all the newest games.</p>
            {/* /PARAGRAPH */}
      
            {/* INFORMATION LINE LIST */}
            <div className="information-line-list">
              {/* INFORMATION LINE */}
              <div className="information-line">
                {/* INFORMATION LINE TITLE */}
                <p className="information-line-title">Joined</p>
                {/* /INFORMATION LINE TITLE */}
      
                {/* INFORMATION LINE TEXT */}
                <p className="information-line-text">March 26th, 2017</p>
                {/* /INFORMATION LINE TEXT */}
              </div>
              {/* /INFORMATION LINE */}
      
              {/* INFORMATION LINE */}
              <div className="information-line">
                {/* INFORMATION LINE TITLE */}
                <p className="information-line-title">City</p>
                {/* /INFORMATION LINE TITLE */}
      
                {/* INFORMATION LINE TEXT */}
                <p className="information-line-text">Los Angeles, California</p>
                {/* /INFORMATION LINE TEXT */}
              </div>
              {/* /INFORMATION LINE */}
      
              {/* INFORMATION LINE */}
              <div className="information-line">
                {/* INFORMATION LINE TITLE */}
                <p className="information-line-title">Country</p>
                {/* /INFORMATION LINE TITLE */}
      
                {/* INFORMATION LINE TEXT */}
                <p className="information-line-text">United States</p>
                {/* /INFORMATION LINE TEXT */}
              </div>
              {/* /INFORMATION LINE */}
      
              {/* INFORMATION LINE */}
              <div className="information-line">
                {/* INFORMATION LINE TITLE */}
                <p className="information-line-title">Age</p>
                {/* /INFORMATION LINE TITLE */}
      
                {/* INFORMATION LINE TEXT */}
                <p className="information-line-text">32 Years</p>
                {/* /INFORMATION LINE TEXT */}
              </div>
              {/* /INFORMATION LINE */}
      
              {/* INFORMATION LINE */}
              <div className="information-line">
                {/* INFORMATION LINE TITLE */}
                <p className="information-line-title">Web</p>
                {/* /INFORMATION LINE TITLE */}
      
                {/* INFORMATION LINE TEXT */}
                <p className="information-line-text"><a href="#">www.gamehuntress.com</a></p>
                {/* /INFORMATION LINE TEXT */}
              </div>
              {/* /INFORMATION LINE */}
            </div>
            {/* /INFORMATION LINE LIST */}
          </div>
          {/* /WIDGET BOX CONTENT */}
        </div>
        {/* /WIDGET BOX */}
      
        {/* WIDGET BOX */}
        <div className="widget-box">
          {/* WIDGET BOX SETTINGS */}
          <div className="widget-box-settings">
            {/* POST SETTINGS WRAP */}
            <div className="post-settings-wrap">
              {/* POST SETTINGS */}
              <div className="post-settings widget-box-post-settings-dropdown-trigger">
                {/* POST SETTINGS ICON */}
                <svg className="post-settings-icon icon-more-dots">
                  <use xlinkHref="#svg-more-dots"></use>
                </svg>
                {/* /POST SETTINGS ICON */}
              </div>
              {/* /POST SETTINGS */}
      
              {/* SIMPLE DROPDOWN */}
              <div className="simple-dropdown widget-box-post-settings-dropdown">
                {/* SIMPLE DROPDOWN LINK */}
                <p className="simple-dropdown-link">Widget Settings</p>
                {/* /SIMPLE DROPDOWN LINK */}
              </div>
              {/* /SIMPLE DROPDOWN */}
            </div>
            {/* /POST SETTINGS WRAP */}
          </div>
          {/* /WIDGET BOX SETTINGS */}
      
          {/* WIDGET BOX TITLE */}
          <p className="widget-box-title">Personal Info</p>
          {/* /WIDGET BOX TITLE */}
      
          {/* WIDGET BOX CONTENT */}
          <div className="widget-box-content">
            {/* INFORMATION LINE LIST */}
            <div className="information-line-list">
              {/* INFORMATION LINE */}
              <div className="information-line">
                {/* INFORMATION LINE TITLE */}
                <p className="information-line-title">Email</p>
                {/* /INFORMATION LINE TITLE */}
      
                {/* INFORMATION LINE TEXT */}
                <p className="information-line-text">ghuntress@yourmail.com</p>
                {/* /INFORMATION LINE TEXT */}
              </div>
              {/* /INFORMATION LINE */}
      
              {/* INFORMATION LINE */}
              <div className="information-line">
                {/* INFORMATION LINE TITLE */}
                <p className="information-line-title">Birthday</p>
                {/* /INFORMATION LINE TITLE */}
      
                {/* INFORMATION LINE TEXT */}
                <p className="information-line-text">August 24th, 1987</p>
                {/* /INFORMATION LINE TEXT */}
              </div>
              {/* /INFORMATION LINE */}
      
              {/* INFORMATION LINE */}
              <div className="information-line">
                {/* INFORMATION LINE TITLE */}
                <p className="information-line-title">Occupation</p>
                {/* /INFORMATION LINE TITLE */}
      
                {/* INFORMATION LINE TEXT */}
                <p className="information-line-text">Costume Designer</p>
                {/* /INFORMATION LINE TEXT */}
              </div>
              {/* /INFORMATION LINE */}
      
              {/* INFORMATION LINE */}
              <div className="information-line">
                {/* INFORMATION LINE TITLE */}
                <p className="information-line-title">Status</p>
                {/* /INFORMATION LINE TITLE */}
      
                {/* INFORMATION LINE TEXT */}
                <p className="information-line-text">In a Relationship</p>
                {/* /INFORMATION LINE TEXT */}
              </div>
              {/* /INFORMATION LINE */}
      
              {/* INFORMATION LINE */}
              <div className="information-line">
                {/* INFORMATION LINE TITLE */}
                <p className="information-line-title">Birthplace</p>
                {/* /INFORMATION LINE TITLE */}
      
                {/* INFORMATION LINE TEXT */}
                <p className="information-line-text">Long Island, New York United States</p>
                {/* /INFORMATION LINE TEXT */}
              </div>
              {/* /INFORMATION LINE */}
      
              {/* INFORMATION LINE */}
              <div className="information-line">
                {/* INFORMATION LINE TITLE */}
                <p className="information-line-title">Ps ID</p>
                {/* /INFORMATION LINE TITLE */}
      
                {/* INFORMATION LINE TEXT */}
                <p className="information-line-text">da_GHuntress</p>
                {/* /INFORMATION LINE TEXT */}
              </div>
              {/* /INFORMATION LINE */}
      
              {/* INFORMATION LINE */}
              <div className="information-line">
                {/* INFORMATION LINE TITLE */}
                <p className="information-line-title">Xb ID</p>
                {/* /INFORMATION LINE TITLE */}
      
                {/* INFORMATION LINE TEXT */}
                <p className="information-line-text">GameHuntress89</p>
                {/* /INFORMATION LINE TEXT */}
              </div>
              {/* /INFORMATION LINE */}
            </div>
            {/* /INFORMATION LINE LIST */}
          </div>
          {/* /WIDGET BOX CONTENT */}
        </div>
        {/* /WIDGET BOX */}
      </div>
      {/* /GRID COLUMN */}

      {/* GRID COLUMN */}
      <div className="grid-column">
        {/* WIDGET BOX */}
        <div className="widget-box">
          {/* WIDGET BOX SETTINGS */}
          <div className="widget-box-settings">
            {/* POST SETTINGS WRAP */}
            <div className="post-settings-wrap">
              {/* POST SETTINGS */}
              <div className="post-settings widget-box-post-settings-dropdown-trigger">
                {/* POST SETTINGS ICON */}
                <svg className="post-settings-icon icon-more-dots">
                  <use xlinkHref="#svg-more-dots"></use>
                </svg>
                {/* /POST SETTINGS ICON */}
              </div>
              {/* /POST SETTINGS */}
      
              {/* SIMPLE DROPDOWN */}
              <div className="simple-dropdown widget-box-post-settings-dropdown">
                {/* SIMPLE DROPDOWN LINK */}
                <p className="simple-dropdown-link">Widget Settings</p>
                {/* /SIMPLE DROPDOWN LINK */}
              </div>
              {/* /SIMPLE DROPDOWN */}
            </div>
            {/* /POST SETTINGS WRAP */}
          </div>
          {/* /WIDGET BOX SETTINGS */}
      
          {/* WIDGET BOX TITLE */}
          <p className="widget-box-title">Interests</p>
          {/* /WIDGET BOX TITLE */}
      
          {/* WIDGET BOX CONTENT */}
          <div className="widget-box-content">
            {/* INFORMATION BLOCK LIST */}
            <div className="information-block-list">
              {/* INFORMATION BLOCK */}
              <div className="information-block">
                {/* INFORMATION BLOCK TITLE */}
                <p className="information-block-title">Favourite TV Shows</p>
                {/* /INFORMATION BLOCK TITLE */}
      
                {/* INFORMATION BLOCK TEXT */}
                <p className="information-block-text">Breaking Good, RedDevil, People of Interest, The Running Dead, Found,  American Guy, The Last Windbender, Game of Wars.</p>
                {/* /INFORMATION BLOCK TEXT */}
              </div>
              {/* /INFORMATION BLOCK */}
      
              {/* INFORMATION BLOCK */}
              <div className="information-block">
                {/* INFORMATION BLOCK TITLE */}
                <p className="information-block-title">Favourite Music Bands / Artists</p>
                {/* /INFORMATION BLOCK TITLE */}
      
                {/* INFORMATION BLOCK TEXT */}
                <p className="information-block-text">Iron Maid, DC/AC, Megablow, Kung Fighters, System of a Revenge, Rammstown.</p>
                {/* /INFORMATION BLOCK TEXT */}
              </div>
              {/* /INFORMATION BLOCK */}
      
              {/* INFORMATION BLOCK */}
              <div className="information-block">
                {/* INFORMATION BLOCK TITLE */}
                <p className="information-block-title">Favourite Movies</p>
                {/* /INFORMATION BLOCK TITLE */}
      
                {/* INFORMATION BLOCK TEXT */}
                <p className="information-block-text">The Revengers Saga, The Scarred Wizard and the Fire Crown, Crime Squad, Metal Man, The Dark Rider, Watchers, The Impossible Heist.</p>
                {/* /INFORMATION BLOCK TEXT */}
              </div>
              {/* /INFORMATION BLOCK */}
      
              {/* INFORMATION BLOCK */}
              <div className="information-block">
                {/* INFORMATION BLOCK TITLE */}
                <p className="information-block-title">Favourite Books</p>
                {/* /INFORMATION BLOCK TITLE */}
      
                {/* INFORMATION BLOCK TEXT */}
                <p className="information-block-text">The Crime of the Century, Egiptian Mythology 101, The Scarred Wizard, Lord of the Wings, Amongst Gods, The Oracle, A Tale of Air and Water.</p>
                {/* /INFORMATION BLOCK TEXT */}
              </div>
              {/* /INFORMATION BLOCK */}
      
              {/* INFORMATION BLOCK */}
              <div className="information-block">
                {/* INFORMATION BLOCK TITLE */}
                <p className="information-block-title">Favourite Games</p>
                {/* /INFORMATION BLOCK TITLE */}
      
                {/* INFORMATION BLOCK TEXT */}
                <p className="information-block-text">The First of Us, Assassin’s Squad, Dark Assylum, NMAK16, Last Cause 4, Grand Snatch Auto.</p>
                {/* /INFORMATION BLOCK TEXT */}
              </div>
              {/* /INFORMATION BLOCK */}
            </div>
            {/* /INFORMATION BLOCK LIST */}
          </div>
          {/* /WIDGET BOX CONTENT */}
        </div>
        {/* /WIDGET BOX */}
      
        {/* WIDGET BOX */}
        <div className="widget-box">
          {/* WIDGET BOX SETTINGS */}
          <div className="widget-box-settings">
            {/* POST SETTINGS WRAP */}
            <div className="post-settings-wrap">
              {/* POST SETTINGS */}
              <div className="post-settings widget-box-post-settings-dropdown-trigger">
                {/* POST SETTINGS ICON */}
                <svg className="post-settings-icon icon-more-dots">
                  <use xlinkHref="#svg-more-dots"></use>
                </svg>
                {/* /POST SETTINGS ICON */}
              </div>
              {/* /POST SETTINGS */}
      
              {/* SIMPLE DROPDOWN */}
              <div className="simple-dropdown widget-box-post-settings-dropdown">
                {/* SIMPLE DROPDOWN LINK */}
                <p className="simple-dropdown-link">Widget Settings</p>
                {/* /SIMPLE DROPDOWN LINK */}
              </div>
              {/* /SIMPLE DROPDOWN */}
            </div>
            {/* /POST SETTINGS WRAP */}
          </div>
          {/* /WIDGET BOX SETTINGS */}
      
          {/* WIDGET BOX TITLE */}
          <p className="widget-box-title">Jobs &amp; Education</p>
          {/* /WIDGET BOX TITLE */}
      
          {/* WIDGET BOX CONTENT */}
          <div className="widget-box-content">
            {/* TIMELINE INFORMATION LIST */}
            <div className="timeline-information-list">
              {/* TIMELINE INFORMATION */}
              <div className="timeline-information">
                {/* TIMELINE INFORMATION TITLE */}
                <p className="timeline-information-title">Lead Costume Designer</p>
                {/* /TIMELINE INFORMATION TITLE */}
      
                {/* TIMELINE INFORMATION DATE */}
                <p className="timeline-information-date">2015 - NOW</p>
                {/* /TIMELINE INFORMATION DATE */}
      
                {/* TIMELINE INFORMATION TEXT */}
                <p className="timeline-information-text">Lead Costume Designer for the "Amazzo Costumes" agency. I'm in charge of a ten person group, overseeing all the proyects and talking to potential clients. I also handle some face to face interviews for new candidates.</p>
                {/* /TIMELINE INFORMATION TEXT */}
              </div>
              {/* /TIMELINE INFORMATION */}
      
              {/* TIMELINE INFORMATION */}
              <div className="timeline-information">
                {/* TIMELINE INFORMATION TITLE */}
                <p className="timeline-information-title">Costume Designer</p>
                {/* /TIMELINE INFORMATION TITLE */}
      
                {/* TIMELINE INFORMATION DATE */}
                <p className="timeline-information-date">2013 - 2015</p>
                {/* /TIMELINE INFORMATION DATE */}
      
                {/* TIMELINE INFORMATION TEXT */}
                <p className="timeline-information-text">Costume Designer for the "Jenny Taylors" agency. Was in charge of working side by side with the best designers in order to complete and perfect orders.</p>
                {/* /TIMELINE INFORMATION TEXT */}
              </div>
              {/* /TIMELINE INFORMATION */}
      
              {/* TIMELINE INFORMATION */}
              <div className="timeline-information">
                {/* TIMELINE INFORMATION TITLE */}
                <p className="timeline-information-title">Designer Intern</p>
                {/* /TIMELINE INFORMATION TITLE */}
      
                {/* TIMELINE INFORMATION DATE */}
                <p className="timeline-information-date">2012 - 2013</p>
                {/* /TIMELINE INFORMATION DATE */}
      
                {/* TIMELINE INFORMATION TEXT */}
                <p className="timeline-information-text">Intern for the "Jenny Taylors" agency. Was in charge of the communication with the clients and day-to-day chores.</p>
                {/* /TIMELINE INFORMATION TEXT */}
              </div>
              {/* /TIMELINE INFORMATION */}
      
              {/* TIMELINE INFORMATION */}
              <div className="timeline-information">
                {/* TIMELINE INFORMATION TITLE */}
                <p className="timeline-information-title">The Antique College of Design</p>
                {/* /TIMELINE INFORMATION TITLE */}
      
                {/* TIMELINE INFORMATION DATE */}
                <p className="timeline-information-date">2007 - 2012</p>
                {/* /TIMELINE INFORMATION DATE */}
      
                {/* TIMELINE INFORMATION TEXT */}
                <p className="timeline-information-text">Bachelor of Costume Design in the Antique College. It was a five years intensive career, plus a course about Cosplays. Average: A+</p>
                {/* /TIMELINE INFORMATION TEXT */}
              </div>
              {/* /TIMELINE INFORMATION */}
            </div>
            {/* /TIMELINE INFORMATION LIST */}
          </div>
          {/* /WIDGET BOX CONTENT */}
        </div>
        {/* /WIDGET BOX */}
      </div>
      {/* /GRID COLUMN */}

      {/* GRID COLUMN */}
      <div className="grid-column">
        {/* WIDGET BOX */}
        <div className="widget-box">
          {/* PROGRESS ARC SUMMARY */}
          <div className="progress-arc-summary">
            {/* PROGRESS ARC WRAP */}
            <div className="progress-arc-wrap">
              {/* PROGRESS ARC */}
              <div className="progress-arc">
                <canvas id="profile-completion-chart"></canvas>
              </div>
              {/* PROGRESS ARC */}
        
              {/* PROGRESS ARC INFO */}
              <div className="progress-arc-info">
                {/* PROGRESS ARC TITLE */}
                <p className="progress-arc-title">59%</p>
                {/* /PROGRESS ARC TITLE */}
              </div>
              {/* /PROGRESS ARC INFO */}
            </div>
            {/* /PROGRESS ARC WRAP */}
        
            {/* PROGRESS ARC SUMMARY INFO */}
            <div className="progress-arc-summary-info">
              {/* PROGRESS ARC SUMMARY TITLE */}
              <p className="progress-arc-summary-title">Profile Completion</p>
              {/* /PROGRESS ARC SUMMARY TITLE */}
        
              {/* PROGRESS ARC SUMMARY TITLE */}
              <p className="progress-arc-summary-subtitle">Marina Valentine</p>
              {/* /PROGRESS ARC SUMMARY TITLE */}
        
              {/* PROGRESS ARC SUMMARY TITLE */}
              <p className="progress-arc-summary-text">Complete your profile by filling profile info fields, completing quests &amp; unlocking badges</p>
              {/* /PROGRESS ARC SUMMARY TITLE */}
            </div>
            {/* /PROGRESS ARC SUMMARY INFO */}
          </div>
          {/* /PROGRESS ARC SUMMARY */}
      
          {/* ACHIEVEMENT STATUS LIST */}
          <div className="achievement-status-list">
            {/* ACHIEVEMENT STATUS */}
            <div className="achievement-status">
              {/* ACHIEVEMENT STATUS PROGRESS */}
              <p className="achievement-status-progress">11/30</p>
              {/* /ACHIEVEMENT STATUS PROGRESS */}
      
              {/* ACHIEVEMENT STATUS INFO */}
              <div className="achievement-status-info">
                {/* ACHIEVEMENT STATUS TITLE */}
                <p className="achievement-status-title">Quests</p>
                {/* /ACHIEVEMENT STATUS TITLE */}
                
                {/* ACHIEVEMENT STATUS TEXT */}
                <p className="achievement-status-text">Completed</p>
                {/* /ACHIEVEMENT STATUS TEXT */}
              </div>
              {/* /ACHIEVEMENT STATUS INFO */}
      
              {/* ACHIEVEMENT STATUS IMAGE */}
              <img className="achievement-status-image" src="/img/badge/completedq-s.png" alt="bdage-completedq-s" />
              {/* /ACHIEVEMENT STATUS IMAGE */}
            </div>
            {/* /ACHIEVEMENT STATUS */}
      
            {/* ACHIEVEMENT STATUS */}
            <div className="achievement-status">
              {/* ACHIEVEMENT STATUS PROGRESS */}
              <p className="achievement-status-progress">22/46</p>
              {/* /ACHIEVEMENT STATUS PROGRESS */}
      
              {/* ACHIEVEMENT STATUS INFO */}
              <div className="achievement-status-info">
                {/* ACHIEVEMENT STATUS TITLE */}
                <p className="achievement-status-title">Badges</p>
                {/* /ACHIEVEMENT STATUS TITLE */}
                
                {/* ACHIEVEMENT STATUS TEXT */}
                <p className="achievement-status-text">Unlocked</p>
                {/* /ACHIEVEMENT STATUS TEXT */}
              </div>
              {/* /ACHIEVEMENT STATUS INFO */}
      
              {/* ACHIEVEMENT STATUS IMAGE */}
              <img className="achievement-status-image" src="/img/badge/unlocked-badge.png" alt="bdage-unlocked-badge" />
              {/* /ACHIEVEMENT STATUS IMAGE */}
            </div>
            {/* /ACHIEVEMENT STATUS */}
          </div>
          {/* /ACHIEVEMENT STATUS LIST */}
        </div>
        {/* /WIDGET BOX */}

        {/* WIDGET BOX */}
        <div className="widget-box">
          {/* WIDGET BOX SETTINGS */}
          <div className="widget-box-settings">
            {/* POST SETTINGS WRAP */}
            <div className="post-settings-wrap">
              {/* POST SETTINGS */}
              <div className="post-settings widget-box-post-settings-dropdown-trigger">
                {/* POST SETTINGS ICON */}
                <svg className="post-settings-icon icon-more-dots">
                  <use xlinkHref="#svg-more-dots"></use>
                </svg>
                {/* /POST SETTINGS ICON */}
              </div>
              {/* /POST SETTINGS */}
      
              {/* SIMPLE DROPDOWN */}
              <div className="simple-dropdown widget-box-post-settings-dropdown">
                {/* SIMPLE DROPDOWN LINK */}
                <p className="simple-dropdown-link">Widget Settings</p>
                {/* /SIMPLE DROPDOWN LINK */}
              </div>
              {/* /SIMPLE DROPDOWN */}
            </div>
            {/* /POST SETTINGS WRAP */}
          </div>
          {/* /WIDGET BOX SETTINGS */}
      
          {/* WIDGET BOX TITLE */}
          <p className="widget-box-title">More Stats</p>
          {/* /WIDGET BOX TITLE */}
      
          {/* WIDGET BOX CONTENT */}
          <div className="widget-box-content">
            {/* STAT BLOCK LIST */}
            <div className="stat-block-list">
              {/* STAT BLOCK */}
              <div className="stat-block">
                {/* STAT BLOCK DECORATION */}
                <div className="stat-block-decoration">
                  {/* STAT BLOCK DECORATION ICON */}
                  <svg className="stat-block-decoration-icon icon-friend">
                    <use xlinkHref="#svg-friend"></use>
                  </svg>
                  {/* /STAT BLOCK DECORATION ICON */}
                </div>
                {/* /STAT BLOCK DECORATION */}
      
                {/* STAT BLOCK INFO */}
                <div className="stat-block-info">
                  {/* STAT BLOCK TITLE */}
                  <p className="stat-block-title">Last friend added</p>
                  {/* /STAT BLOCK TITLE */}
      
                  {/* STAT BLOCK TEXT */}
                  <p className="stat-block-text">5 Days Ago</p>
                  {/* /STAT BLOCK TEXT */}
                </div>
                {/* /STAT BLOCK INFO */}
              </div>
              {/* /STAT BLOCK */}
      
              {/* STAT BLOCK */}
              <div className="stat-block">
                {/* STAT BLOCK DECORATION */}
                <div className="stat-block-decoration">
                  {/* STAT BLOCK DECORATION ICON */}
                  <svg className="stat-block-decoration-icon icon-status">
                    <use xlinkHref="#svg-status"></use>
                  </svg>
                  {/* /STAT BLOCK DECORATION ICON */}
                </div>
                {/* /STAT BLOCK DECORATION */}
      
                {/* STAT BLOCK INFO */}
                <div className="stat-block-info">
                  {/* STAT BLOCK TITLE */}
                  <p className="stat-block-title">Last post update</p>
                  {/* /STAT BLOCK TITLE */}
      
                  {/* STAT BLOCK TEXT */}
                  <p className="stat-block-text">1 Day Ago</p>
                  {/* /STAT BLOCK TEXT */}
                </div>
                {/* /STAT BLOCK INFO */}
              </div>
              {/* /STAT BLOCK */}
      
              {/* STAT BLOCK */}
              <div className="stat-block">
                {/* STAT BLOCK DECORATION */}
                <div className="stat-block-decoration">
                  {/* STAT BLOCK DECORATION ICON */}
                  <svg className="stat-block-decoration-icon icon-comment">
                    <use xlinkHref="#svg-comment"></use>
                  </svg>
                  {/* /STAT BLOCK DECORATION ICON */}
                </div>
                {/* /STAT BLOCK DECORATION */}
      
                {/* STAT BLOCK INFO */}
                <div className="stat-block-info">
                  {/* STAT BLOCK TITLE */}
                  <p className="stat-block-title">Most commented post</p>
                  {/* /STAT BLOCK TITLE */}
      
                  {/* STAT BLOCK TEXT */}
                  <p className="stat-block-text">56 Comments</p>
                  {/* /STAT BLOCK TEXT */}
                </div>
                {/* /STAT BLOCK INFO */}
              </div>
              {/* /STAT BLOCK */}
      
              {/* STAT BLOCK */}
              <div className="stat-block">
                {/* STAT BLOCK DECORATION */}
                <div className="stat-block-decoration">
                  {/* STAT BLOCK DECORATION ICON */}
                  <svg className="stat-block-decoration-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up"></use>
                  </svg>
                  {/* /STAT BLOCK DECORATION ICON */}
                </div>
                {/* /STAT BLOCK DECORATION */}
      
                {/* STAT BLOCK INFO */}
                <div className="stat-block-info">
                  {/* STAT BLOCK TITLE */}
                  <p className="stat-block-title">Most liked post</p>
                  {/* /STAT BLOCK TITLE */}
      
                  {/* STAT BLOCK TEXT */}
                  <p className="stat-block-text">904 Likes</p>
                  {/* /STAT BLOCK TEXT */}
                </div>
                {/* /STAT BLOCK INFO */}
              </div>
              {/* /STAT BLOCK */}
            </div>
            {/* /STAT BLOCK LIST */}
          </div>
          {/* /WIDGET BOX CONTENT */}
        </div>
        {/* /WIDGET BOX */}
      </div>
      {/* /GRID COLUMN */}
    </div>
    {/* /GRID */}
  </div>
    
    </div>
    
  );
}

export default ProfileAbout;