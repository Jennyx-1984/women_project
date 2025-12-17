import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        &copy; {currentYear} She Manifests. All rights reserved. 
        | Designed with <span role="img" aria-label="Heart">💜</span>
      </p>
    </footer>
  );
}

export default Footer;