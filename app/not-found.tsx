
import '/app/styles/css/vendor/bootstrap.min.css'; // Adjust path as necessary
import '/app/styles/css/styles.min.css'
export default function Custom404() {
    return (
    <div className="error-section">
     
      <p className="error-section-title">404</p>
     
      
      <div className="error-section-info">
     
        <p className="error-section-subtitle">Oops!!...</p>
     
           <p className="error-section-text">Seems that you made a wrong turn and encountered a web black hole that absorbed the page you were looking for! But don't panic because you can go back!</p>
     
        <p className="error-section-text">If the problem persists, please send us an email to our support team at <a href="#">ju3tin95@gmail.com</a></p>
     
     
     
        <a className="button medium primary" href="profile-timeline.html">Go Back</a>
     
      </div>
     
     </div>)
    
  }