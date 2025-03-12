import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer-container" style={styles.footer}>
      <div style={styles.card}>
        <h4 style={styles.title}>Sistema de Recursos Humanos</h4>
        <Link to="/" style={styles.link}>Regresar al inicio</Link>
      </div>
    </div>
  );
}

const styles = {
  footer: {
    backgroundColor: '#4caf50', // Fondo verde suave
    color: 'white',
    padding: '20px 0',
    marginTop: '30px',
    borderTop: '3px solid #81c784',
  },
  card: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#2c6e49', // Fondo oscuro verde
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  link: {
    fontSize: '18px',
    color: '#81c784',
    textDecoration: 'none',
    fontWeight: '500',
    padding: '5px 10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
};

