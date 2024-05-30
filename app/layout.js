
import '/app/styles/css/vendor/bootstrap.min.css'; // Adjust path as necessary
import '/app/styles/css/styles.min.css'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      
        
          <div>{children}</div>
      
      </body>
    </html>
  );
}
