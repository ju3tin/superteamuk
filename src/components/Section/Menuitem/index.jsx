import React from 'react';
import menuItems from './menuItems.json';  // Adjust the path as necessary

function SectionNavigation1() {
  return (
      <div id="section-navigation-slider" className="section-menu">
        {menuItems.map(item => (
          <a key={item.id} className="section-menu-item" href={item.href}>
            <svg className="section-menu-item-icon">
              <use xlinkHref={`#${item.icon}`}></use>
            </svg>
            <p className="section-menu-item-text">{item.text}</p>
          </a>
        ))}
      </div>
  );
}

export default SectionNavigation1;