
  import { useEffect, useState } from 'react';

function Bar1() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
    return (
<aside className="floaty-bar">
    {/* BAR ACTIONS */}
    <div className="bar-actions">
      {/* PROGRESS STAT */}
      <div className="progress-stat">
        {/* BAR PROGRESS WRAP */}
        <div className="bar-progress-wrap">
          {/* BAR PROGRESS INFO */}
          <p className="bar-progress-info">Next: <span className="bar-progress-text"></span></p>
          {/* /BAR PROGRESS INFO */}
        </div>
        {/* /BAR PROGRESS WRAP */}
    
        {/* PROGRESS STAT BAR */}
        <div id="logged-user-level-cp" className="progress-stat-bar"></div>
        {/* /PROGRESS STAT BAR */}
      </div>
      {/* /PROGRESS STAT */}
    </div>
    {/* /BAR ACTIONS */}

    {/* BAR ACTIONS */}
    <div className="bar-actions">
      {/* ACTION LIST */}
      <div className="action-list dark">
        {/* ACTION LIST ITEM */}
        <a className="action-list-item" href="marketplace-cart.html">
          {/* ACTION LIST ITEM ICON */}
          <svg className="action-list-item-icon icon-shopping-bag">
            <use xlinkHref="#svg-shopping-bag"></use>
          </svg>
          {/* /ACTION LIST ITEM ICON */}
        </a>
        {/* /ACTION LIST ITEM */}

        {/* ACTION LIST ITEM */}
        <a className="action-list-item" href="hub-profile-requests.html">
          {/* ACTION LIST ITEM ICON */}
          <svg className="action-list-item-icon icon-friend">
            <use xlinkHref="#svg-friend"></use>
          </svg>
          {/* /ACTION LIST ITEM ICON */}
        </a>
        {/* /ACTION LIST ITEM */}

        {/* ACTION LIST ITEM */}
        <a className="action-list-item" href="hub-profile-messages.html">
          {/* ACTION LIST ITEM ICON */}
          <svg className="action-list-item-icon icon-messages">
            <use xlinkHref="#svg-messages"></use>
          </svg>
          {/* /ACTION LIST ITEM ICON */}
        </a>
        {/* /ACTION LIST ITEM */}

        {/* ACTION LIST ITEM */}
        <a className="action-list-item unread" href="hub-profile-notifications.html">
          {/* ACTION LIST ITEM ICON */}
          <svg className="action-list-item-icon icon-notification">
            <use xlinkHref="#svg-notification"></use>
          </svg>
          {/* /ACTION LIST ITEM ICON */}
        </a>
        {/* /ACTION LIST ITEM */}
      </div>
      {/* /ACTION LIST */}

      {/* ACTION ITEM WRAP */}
      <a className="action-item-wrap" href="hub-profile-info.html">
        {/* ACTION ITEM */}
        <div className="action-item dark">
          {/* ACTION ITEM ICON */}
          <svg className="action-item-icon icon-settings">
            <use xlinkHref="#svg-settings"></use>
          </svg>
          {/* /ACTION ITEM ICON */}
        </div>
        {/* /ACTION ITEM */}
      </a>
      {/* /ACTION ITEM WRAP */}
    </div>
    {/* /BAR ACTIONS */}
  </aside>
   );
}
export default Bar1;