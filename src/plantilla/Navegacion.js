import React from 'react';
import { Link } from 'react-router-dom';

export default function Navegacion() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark" style={styles.navbar}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={styles.brand}>
            Sistema de Recursos Humanos
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                  data-bs-target="#navbarNav" aria-controls="navbarNav" 
                  aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/" style={styles.navLink}>
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/agregar" style={styles.navLink}>
                  Agregar Empleado
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tecnologias" style={styles.navLink}>
                  Tecnologías QE Aprendiendo
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#4caf50', // Fondo verde suave
    borderBottom: '3px solid #81c784',
  },
  brand: {
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  navLink: {
    color: 'white',
    fontSize: '18px',
    fontWeight: '500',
    textTransform: 'capitalize',
    padding: '8px 15px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  navLinkActive: {
    color: '#81c784', // Cambiar color cuando está activo
    backgroundColor: '#2c6e49',
  },
};

