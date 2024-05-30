import menuItems from '../Menuitem/menuItems.json';
function SectionNavigation() {
    return (
<nav className="section-navigation">
      {/* SECTION MENU */}
      <div id="section-navigation-slider" className="section-menu">
        {/* SECTION MENU ITEM */}


        {menuItems.map(item => (
          <a className="section-menu-item" href={item.href}>
            <svg className={`section-menu-item-icon icon-${item.name}`}>
              <use xlinkHref={`#${item.icon}`}></use>
            </svg>
            <p className="section-menu-item-text">{item.text}</p>
          </a>
        ))}



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
    </nav>);
}
export default SectionNavigation;