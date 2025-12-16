// src/components/Footer.jsx
import React from 'react';
// Importa tus estilos si creas un archivo Footer.css
// import './Footer.css'; 

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        &copy; {currentYear} She Manifests. All rights reserved. 
        | Diseñado con <span role="img" aria-label="Heart">💜</span>
      </p>
    </footer>
  );
}

export default Footer;