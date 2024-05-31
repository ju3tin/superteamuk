import menuItems from '../Menuitem/menuItems.json';


  import { useEffect, useState } from 'react';

function SectionNavigation() {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
    return (
<nav className="section-navigation">
      {/* SECTION MENU */}
      <div id="section-navigation-slider" className="section-menu">
        {/* SECTION MENU ITEM */}
        {menuItems.map(item => (
          <a key={item.id} className="section-menu-item" href={item.href}>
            <svg className={`section-menu-item-icon icon-${item.name}`}>
              <use xlinkHref={`#${item.icon}`}></use>
            </svg>
            <p className="section-menu-item-text">{item.text}</p>
          </a>
        ))}
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