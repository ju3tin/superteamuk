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
    <div className="profile-header">
      {/* PROFILE HEADER COVER */}
      <figure className="profile-header-cover liquid">
        <img src="/img/cover/01.jpg" alt="cover-01" />
      </figure>
      {/* /PROFILE HEADER COVER */}
  
      {/* PROFILE HEADER INFO */}
      <div className="profile-header-info">
        {/* USER SHORT DESCRIPTION */}
        <div className="user-short-description big">
          {/* USER SHORT DESCRIPTION AVATAR */}
          <a className="user-short-description-avatar user-avatar big" href="profile-timeline.html">
            {/* USER AVATAR BORDER */}
            <div className="user-avatar-border">
              {/* HEXAGON */}
              <div className="hexagon-148-164"></div>
              {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR BORDER */}
        
            {/* USER AVATAR CONTENT */}
            <div className="user-avatar-content">
              {/* HEXAGON */}
              <div className="hexagon-image-100-110" data-src="/img/avatar/01.jpg"></div>
              {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR CONTENT */}
        
            {/* USER AVATAR PROGRESS */}
            <div className="user-avatar-progress">
              {/* HEXAGON */}
              <div className="hexagon-progress-124-136"></div>
              {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR PROGRESS */}
        
            {/* USER AVATAR PROGRESS BORDER */}
            <div className="user-avatar-progress-border">
              {/* HEXAGON */}
              <div className="hexagon-border-124-136"></div>
              {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR PROGRESS BORDER */}
        
            {/* USER AVATAR BADGE */}
            <div className="user-avatar-badge">
              {/* USER AVATAR BADGE BORDER */}
              <div className="user-avatar-badge-border">
                {/* HEXAGON */}
                <div className="hexagon-40-44"></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR BADGE BORDER */}
        
              {/* USER AVATAR BADGE CONTENT */}
              <div className="user-avatar-badge-content">
                {/* HEXAGON */}
                <div className="hexagon-dark-32-34"></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR BADGE CONTENT */}
        
              {/* USER AVATAR BADGE TEXT */}
              <p className="user-avatar-badge-text">24</p>
              {/* /USER AVATAR BADGE TEXT */}
            </div>
            {/* /USER AVATAR BADGE */}
          </a>
          {/* /USER SHORT DESCRIPTION AVATAR */}
  
          {/* USER SHORT DESCRIPTION AVATAR */}
          <a className="user-short-description-avatar user-short-description-avatar-mobile user-avatar medium" href="profile-timeline.html">
            {/* USER AVATAR BORDER */}
            <div className="user-avatar-border">
              {/* HEXAGON */}
              <div className="hexagon-120-132"></div>
              {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR BORDER */}
        
            {/* USER AVATAR CONTENT */}
            <div className="user-avatar-content">
              {/* HEXAGON */}
              <div className="hexagon-image-82-90" data-src="/img/avatar/01.jpg"></div>
              {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR CONTENT */}
        
            {/* USER AVATAR PROGRESS */}
            <div className="user-avatar-progress">
              {/* HEXAGON */}
              <div className="hexagon-progress-100-110"></div>
              {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR PROGRESS */}
        
            {/* USER AVATAR PROGRESS BORDER */}
            <div className="user-avatar-progress-border">
              {/* HEXAGON */}
              <div className="hexagon-border-100-110"></div>
              {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR PROGRESS BORDER */}
        
            {/* USER AVATAR BADGE */}
            <div className="user-avatar-badge">
              {/* USER AVATAR BADGE BORDER */}
              <div className="user-avatar-badge-border">
                {/* HEXAGON */}
                <div className="hexagon-32-36"></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR BADGE BORDER */}
        
              {/* USER AVATAR BADGE CONTENT */}
              <div className="user-avatar-badge-content">
                {/* HEXAGON */}
                <div className="hexagon-dark-26-28"></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR BADGE CONTENT */}
        
              {/* USER AVATAR BADGE TEXT */}
              <p className="user-avatar-badge-text">24</p>
              {/* /USER AVATAR BADGE TEXT */}
            </div>
            {/* /USER AVATAR BADGE */}
          </a>
          {/* /USER SHORT DESCRIPTION AVATAR */}
    
          {/* USER SHORT DESCRIPTION TITLE */}
          <p className="user-short-description-title"><a href="profile-timeline.html">Marina Valentine</a></p>
          {/* /USER SHORT DESCRIPTION TITLE */}
    
          {/* USER SHORT DESCRIPTION TEXT */}
          <p className="user-short-description-text"><a href="#">www.gamehuntress.com</a></p>
          {/* /USER SHORT DESCRIPTION TEXT */}
        </div>
        {/* /USER SHORT DESCRIPTION */}
  
        {/* PROFILE HEADER SOCIAL LINKS WRAP */}
        <div className="profile-header-social-links-wrap">
          {/* PROFILE HEADER SOCIAL LINKS */}
          <div id="profile-header-social-links-slider" className="profile-header-social-links">
            <div className="profile-header-social-link">
              {/* SOCIAL LINK */}
              <a className="social-link facebook" href="#">
                {/* ICON FACEBOOK */}
                <svg className="icon-facebook">
                  <use xlinkHref="#svg-facebook"></use>
                </svg>
                {/* /ICON FACEBOOK */}
              </a>
              {/* /SOCIAL LINK */}
            </div>
      
            <div className="profile-header-social-link">
              {/* SOCIAL LINK */}
              <a className="social-link twitter" href="#">
                {/* ICON TWITTER */}
                <svg className="icon-twitter">
                  <use xlinkHref="#svg-twitter"></use>
                </svg>
                {/* /ICON TWITTER */}
              </a>
              {/* /SOCIAL LINK */}
            </div>
  
            <div className="profile-header-social-link">
              {/* SOCIAL LINK */}
              <a className="social-link instagram" href="#">
                {/* ICON INSTAGRAM */}
                <svg className="icon-instagram">
                  <use xlinkHref="#svg-instagram"></use>
                </svg>
                {/* /ICON INSTAGRAM */}
              </a>
              {/* /SOCIAL LINK */}
            </div>
      
            <div className="profile-header-social-link">
              {/* SOCIAL LINK */}
              <a className="social-link twitch" href="#">
                {/* ICON TWITCH */}
                <svg className="icon-twitch">
                  <use xlinkHref="#svg-twitch"></use>
                </svg>
                {/* /ICON TWITCH */}
              </a>
              {/* /SOCIAL LINK */}
            </div>
      
            <div className="profile-header-social-link">
              {/* SOCIAL LINK */}
              <a className="social-link youtube" href="#">
                {/* ICON YOUTUBE */}
                <svg className="icon-youtube">
                  <use xlinkHref="#svg-youtube"></use>
                </svg>
                {/* /ICON YOUTUBE */}
              </a>
              {/* /SOCIAL LINK */}
            </div>
  
            <div className="profile-header-social-link">
              {/* SOCIAL LINK */}
              <a className="social-link patreon" href="#">
                {/* ICON PATREON */}
                <svg className="icon-patreon">
                  <use xlinkHref="#svg-patreon"></use>
                </svg>
                {/* /ICON PATREON */}
              </a>
              {/* /SOCIAL LINK */}
            </div>
  
            <div className="profile-header-social-link">
              {/* SOCIAL LINK */}
              <a className="social-link discord" href="#">
                {/* ICON DISCORD */}
                <svg className="icon-discord">
                  <use xlinkHref="#svg-discord"></use>
                </svg>
                {/* /ICON DISCORD */}
              </a>
              {/* /SOCIAL LINK */}
            </div>
          </div>
          {/* /PROFILE HEADER SOCIAL LINKS */}
  
          {/* SLIDER CONTROLS */}
          <div id="profile-header-social-links-slider-controls" className="slider-controls">
            {/* SLIDER CONTROL */}
            <div className="slider-control left">
              {/* SLIDER CONTROL ICON */}
              <svg className="slider-control-icon icon-small-arrow">
                <use xlinkHref="#svg-small-arrow"></use>
              </svg>
              {/* /SLIDER CONTROL ICON */}
            </div>
            {/* /SLIDER CONTROL */}
  
            {/* SLIDER CONTROL */}
            <div className="slider-control right">
              {/* SLIDER CONTROL ICON */}
              <svg className="slider-control-icon icon-small-arrow">
                <use xlinkHref="#svg-small-arrow"></use>
              </svg>
              {/* /SLIDER CONTROL ICON */}
            </div>
            {/* /SLIDER CONTROL */}
          </div>
          {/* /SLIDER CONTROLS */}
        </div>
        {/* /PROFILE HEADER SOCIAL LINKS WRAP */}
  
        {/* USER STATS */}
        <div className="user-stats">
          {/* USER STAT */}
          <div className="user-stat big">
            {/* USER STAT TITLE */}
            <p className="user-stat-title">930</p>
            {/* /USER STAT TITLE */}
    
            {/* USER STAT TEXT */}
            <p className="user-stat-text">posts</p>
            {/* /USER STAT TEXT */}
          </div>
          {/* /USER STAT */}
    
          {/* USER STAT */}
          <div className="user-stat big">
            {/* USER STAT TITLE */}
            <p className="user-stat-title">82</p>
            {/* /USER STAT TITLE */}
    
            {/* USER STAT TEXT */}
            <p className="user-stat-text">friends</p>
            {/* /USER STAT TEXT */}
          </div>
          {/* /USER STAT */}
    
          {/* USER STAT */}
          <div className="user-stat big">
            {/* USER STAT TITLE */}
            <p className="user-stat-title">5.7k</p>
            {/* /USER STAT TITLE */}
    
            {/* USER STAT TEXT */}
            <p className="user-stat-text">visits</p>
            {/* /USER STAT TEXT */}
          </div>
          {/* /USER STAT */}
  
          {/* USER STAT */}
          <div className="user-stat big">
            {/* USER STAT IMAGE */}
            <img className="user-stat-image" src="/img/flag/usa.png" alt="flag-usa" />
            {/* /USER STAT IMAGE */}
    
            {/* USER STAT TEXT */}
            <p className="user-stat-text">usa</p>
            {/* /USER STAT TEXT */}
          </div>
          {/* /USER STAT */}
        </div>
        {/* /USER STATS */}
  
        {/* PROFILE HEADER INFO ACTIONS */}
        <div className="profile-header-info-actions">
          {/* PROFILE HEADER INFO ACTION */}
          <p className="profile-header-info-action button secondary"><span className="hide-text-mobile">Add</span> Friend +</p>
          {/* /PROFILE HEADER INFO ACTION */}
          
          {/* PROFILE HEADER INFO ACTION */}
          <p className="profile-header-info-action button primary"><span className="hide-text-mobile">Send</span> Message</p>
          {/* /PROFILE HEADER INFO ACTION */}
        </div>
        {/* /PROFILE HEADER INFO ACTIONS */}
      </div>
      {/* /PROFILE HEADER INFO */}
    </div>
    {/* /PROFILE HEADER */}

    {/* SECTION NAVIGATION */}
    <nav className="section-navigation">
      {/* SECTION MENU */}
      <div id="section-navigation-slider" className="section-menu">
        {/* SECTION MENU ITEM */}
        <a className="section-menu-item active" href="profile-about.html">
          {/* SECTION MENU ITEM ICON */}
          <svg className="section-menu-item-icon icon-profile">
            <use xlinkHref="#svg-profile"></use>
          </svg>
          {/* /SECTION MENU ITEM ICON */}
  
          {/* SECTION MENU ITEM TEXT */}
          <p className="section-menu-item-text">About</p>
          {/* /SECTION MENU ITEM TEXT */}
        </a>
        {/* /SECTION MENU ITEM */}
  
        {/* SECTION MENU ITEM */}
        <a className="section-menu-item" href="profile-timeline.html">
          {/* SECTION MENU ITEM ICON */}
          <svg className="section-menu-item-icon icon-timeline">
            <use xlinkHref="#svg-timeline"></use>
          </svg>
          {/* /SECTION MENU ITEM ICON */}
  
          {/* SECTION MENU ITEM TEXT */}
          <p className="section-menu-item-text">Timeline</p>
          {/* /SECTION MENU ITEM TEXT */}
        </a>
        {/* /SECTION MENU ITEM */}
  
        {/* SECTION MENU ITEM */}
        <a className="section-menu-item" href="profile-friends.html">
          {/* SECTION MENU ITEM ICON */}
          <svg className="section-menu-item-icon icon-friend">
            <use xlinkHref="#svg-friend"></use>
          </svg>
          {/* /SECTION MENU ITEM ICON */}
  
          {/* SECTION MENU ITEM TEXT */}
          <p className="section-menu-item-text">Friends</p>
          {/* /SECTION MENU ITEM TEXT */}
        </a>
        {/* /SECTION MENU ITEM */}
  
        {/* SECTION MENU ITEM */}
        <a className="section-menu-item" href="profile-groups.html">
          {/* SECTION MENU ITEM ICON */}
          <svg className="section-menu-item-icon icon-group">
            <use xlinkHref="#svg-group"></use>
          </svg>
          {/* /SECTION MENU ITEM ICON */}
  
          {/* SECTION MENU ITEM TEXT */}
          <p className="section-menu-item-text">Groups</p>
          {/* /SECTION MENU ITEM TEXT */}
        </a>
        {/* /SECTION MENU ITEM */}
  
        {/* SECTION MENU ITEM */}
        <a className="section-menu-item" href="profile-photos.html">
          {/* SECTION MENU ITEM ICON */}
          <svg className="section-menu-item-icon icon-photos">
            <use xlinkHref="#svg-photos"></use>
          </svg>
          {/* /SECTION MENU ITEM ICON */}
  
          {/* SECTION MENU ITEM TEXT */}
          <p className="section-menu-item-text">Photos</p>
          {/* /SECTION MENU ITEM TEXT */}
        </a>
        {/* /SECTION MENU ITEM */}
  
        {/* SECTION MENU ITEM */}
        <a className="section-menu-item" href="profile-videos.html">
          {/* SECTION MENU ITEM ICON */}
          <svg className="section-menu-item-icon icon-videos">
            <use xlinkHref="#svg-videos"></use>
          </svg>
          {/* /SECTION MENU ITEM ICON */}
  
          {/* SECTION MENU ITEM TEXT */}
          <p className="section-menu-item-text">Videos</p>
          {/* /SECTION MENU ITEM TEXT */}
        </a>
        {/* /SECTION MENU ITEM */}
  
        {/* SECTION MENU ITEM */}
        <a className="section-menu-item" href="profile-badges.html">
          {/* SECTION MENU ITEM ICON */}
          <svg className="section-menu-item-icon icon-badges">
            <use xlinkHref="#svg-badges"></use>
          </svg>
          {/* /SECTION MENU ITEM ICON */}
  
          {/* SECTION MENU ITEM TEXT */}
          <p className="section-menu-item-text">Badges</p>
          {/* /SECTION MENU ITEM TEXT */}
        </a>
        {/* /SECTION MENU ITEM */}
  
        {/* SECTION MENU ITEM */}
        <a className="section-menu-item" href="profile-stream.html">
          {/* SECTION MENU ITEM ICON */}
          <svg className="section-menu-item-icon icon-streams">
            <use xlinkHref="#svg-streams"></use>
          </svg>
          {/* /SECTION MENU ITEM ICON */}
  
          {/* SECTION MENU ITEM TEXT */}
          <p className="section-menu-item-text">Streams</p>
          {/* /SECTION MENU ITEM TEXT */}
        </a>
        {/* /SECTION MENU ITEM */}
  
        {/* SECTION MENU ITEM */}
        <a className="section-menu-item" href="profile-blog.html">
          {/* SECTION MENU ITEM ICON */}
          <svg className="section-menu-item-icon icon-blog-posts">
            <use xlinkHref="#svg-blog-posts"></use>
          </svg>
          {/* /SECTION MENU ITEM ICON */}
  
          {/* SECTION MENU ITEM TEXT */}
          <p className="section-menu-item-text">Blog</p>
          {/* /SECTION MENU ITEM TEXT */}
        </a>
        {/* /SECTION MENU ITEM */}
  
        {/* SECTION MENU ITEM */}
        <a className="section-menu-item" href="profile-forum.html">
          {/* SECTION MENU ITEM ICON */}
          <svg className="section-menu-item-icon icon-forum">
            <use xlinkHref="#svg-forum"></use>
          </svg>
          {/* /SECTION MENU ITEM ICON */}
  
          {/* SECTION MENU ITEM TEXT */}
          <p className="section-menu-item-text">Forum</p>
          {/* /SECTION MENU ITEM TEXT */}
        </a>
        {/* /SECTION MENU ITEM */}
  
        {/* SECTION MENU ITEM */}
        <a className="section-menu-item" href="profile-store.html">
          {/* SECTION MENU ITEM ICON */}
          <svg className="section-menu-item-icon icon-store">
            <use xlinkHref="#svg-store"></use>
          </svg>
          {/* /SECTION MENU ITEM ICON */}
  
          {/* SECTION MENU ITEM TEXT */}
          <p className="section-menu-item-text">Store</p>
          {/* /SECTION MENU ITEM TEXT */}
        </a>
        {/* /SECTION MENU ITEM */}
      </div>
      {/* /SECTION MENU */}
  
      {/* SLIDER CONTROLS */}
      <div id="section-navigation-slider-controls" className="slider-controls">
        {/* SLIDER CONTROL */}
        <div className="slider-control left">
          {/* SLIDER CONTROL ICON */}
          <svg className="slider-control-icon icon-small-arrow">
            <use xlinkHref="#svg-small-arrow"></use>
          </svg>
          {/* /SLIDER CONTROL ICON */}
        </div>
        {/* /SLIDER CONTROL */}
  
        {/* SLIDER CONTROL */}
        <div className="slider-control right">
          {/* SLIDER CONTROL ICON */}
          <svg className="slider-control-icon icon-small-arrow">
            <use xlinkHref="#svg-small-arrow"></use>
          </svg>
          {/* /SLIDER CONTROL ICON */}
        </div>
        {/* /SLIDER CONTROL */}
      </div>
      {/* /SLIDER CONTROLS */}
    </nav>
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