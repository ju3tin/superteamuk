function navwidget() {
    return (
<nav id="navigation-widget-small" className="navigation-widget navigation-widget-desktop closed sidebar left delayed">
   
    <a className="user-avatar small no-outline online" href="profile-timeline.html">
    
      <div className="user-avatar-content">
     
        <div className="hexagon-image-30-32" data-src="../../../../img/avatar/01.jpg"></div>
      
      </div>
     
      <div className="user-avatar-progress">
        <div className="hexagon-progress-40-44"></div>
       </div>
    
      <div className="user-avatar-progress-border">
        <div className="hexagon-border-40-44"></div>
      </div>
       <div className="user-avatar-badge">
        <div className="user-avatar-badge-border">
           <div className="hexagon-22-24"></div>
         </div>
        <div className="user-avatar-badge-content">
          <div className="hexagon-dark-16-18"></div>
        </div>
        <p className="user-avatar-badge-text">24</p>
      </div>
    </a>
    <ul className="menu small">
      <li className="menu-item">
        <a className="menu-item-link text-tooltip-tfr" href="newsfeed.html" data-title="Newsfeed">
          <svg className="menu-item-link-icon icon-newsfeed">
            <use xlinkHref="#svg-newsfeed"></use>
          </svg>
        </a>
      </li>
      <li className="menu-item">
        <a className="menu-item-link text-tooltip-tfr" href="overview.html" data-title="Overview">
          <svg className="menu-item-link-icon icon-overview">
            <use xlinkHref="#svg-overview"></use>
          </svg>
        </a>
      </li>
      <li className="menu-item">
        <a className="menu-item-link text-tooltip-tfr" href="groups.html" data-title="Groups">
          <svg className="menu-item-link-icon icon-group">
            <use xlinkHref="#svg-group"></use>
          </svg>
        </a>
      </li>
      <li className="menu-item">
        <a className="menu-item-link text-tooltip-tfr" href="members.html" data-title="Members">
          <svg className="menu-item-link-icon icon-members">
            <use xlinkHref="#svg-members"></use>
          </svg>
        </a>
      </li>
      <li className="menu-item">
        <a className="menu-item-link text-tooltip-tfr" href="badges.html" data-title="Badges">
          <svg className="menu-item-link-icon icon-badges">
            <use xlinkHref="#svg-badges"></use>
          </svg>
        </a>
      </li>
      <li className="menu-item">
        <a className="menu-item-link text-tooltip-tfr" href="quests.html" data-title="Quests">
          <svg className="menu-item-link-icon icon-quests">
            <use xlinkHref="#svg-quests"></use>
          </svg>
        </a>
      </li>
  
      <li className="menu-item">
        <a className="menu-item-link text-tooltip-tfr" href="streams.html" data-title="Streams">
          <svg className="menu-item-link-icon icon-streams">
            <use xlinkHref="#svg-streams"></use>
          </svg>
        </a>
      </li>
      <li className="menu-item">
        <a className="menu-item-link text-tooltip-tfr" href="events.html" data-title="Events">
          <svg className="menu-item-link-icon icon-events">
            <use xlinkHref="#svg-events"></use>
          </svg>
        </a>
      </li>
      <li className="menu-item">
        <a className="menu-item-link text-tooltip-tfr" href="forums.html" data-title="Forums">
          <svg className="menu-item-link-icon icon-forums">
            <use xlinkHref="#svg-forums"></use>
          </svg>
        </a>
      </li>
      <li className="menu-item">
        <a className="menu-item-link text-tooltip-tfr" href="marketplace.html" data-title="Marketplace">
          <svg className="menu-item-link-icon icon-marketplace">
            <use xlinkHref="#svg-marketplace"></use>
          </svg>
        </a>
      </li>
    </ul>
  </nav>
   );
}

export default navwidget;