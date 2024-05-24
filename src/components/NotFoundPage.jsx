import React from 'react';
import '../styles/css/vendor/bootstrap.min.css'; // Adjust path as necessary
import '../styles/css/styles.min.css'
function NotFoundPage() {
  return (
    <div>
      <head>
        <title>Vikinger | 404</title>
        <link rel="icon" href="/img/favicon.ico" />
      </head>
      <body>
        <div className="error-section">
          <p className="error-section-title">404</p>
          <div className="error-section-info">
            <p className="error-section-subtitle">Oops!!...</p>
            <p className="error-section-text">Seems that you made a wrong turn and encountered a web black hole that absorbed the page you were looking for! But don't panic because you can go back!</p>
            <p className="error-section-text">If the problem persists, please send us an email to our support team at <a href="mailto:support@vikinger.com">support@vikinger.com</a></p>
            <a className="button medium primary" href="/profile-timeline.html">Go Back</a>
          </div>
        </div>
        <script src="/js/app.bundle.min.js"></script>
      </body>
    </div>
  );
}

export default NotFoundPage;