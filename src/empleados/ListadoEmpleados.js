import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';

export default function ListadoEmpleados() {

  const urlBase = "http://localhost:8080/rh-app/empleados";

  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    cargarEmpleados();
  }, []);

  const cargarEmpleados = async () => {
      try {
        const resultado = await axios.get(urlBase);
        setEmpleados(resultado.data);
      } catch (error) {
        console.error("Error cargando empleados:", error);
      }
  };

  const eliminarEmpleado = async (id) => {
    try {
      await axios.delete(`${urlBase}/${id}`);
      cargarEmpleados();
    } catch (error) {
      console.error("Error eliminando empleado:", error);
    }
  };

  return (
    <div className='container' style={{ backgroundColor: '#f5f7fa', padding: '20px', borderRadius: '10px' }}>
        <div className='container text-center' style={{ margin: "30px", color: '#4caf50' }}>
            <h3>Sistema de Recursos Humanos</h3>
        </div>

        <table className="table table-striped table-hover align-middle" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <thead className='table-dark'>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Departamento</th>
                    <th scope="col">Sueldo</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    empleados.map((empleado, indice) => (
                        <tr key={indice}>
                            <th scope="row">{empleado.idPersonal}</th>
                            <td>{empleado.nombre}</td>
                            <td>{empleado.departamento}</td>
                            <td>
                                <NumericFormat value={empleado.sueldo}
                                    displayType={'text'}
                                    thousandSeparator={','}
                                    prefix={'$'}
                                    decimalScale={2}
                                    fixedDecimalScale
                                />
                            </td>
                            <td className='text-center'>
                                <Link to={`/editar/${empleado.idPersonal}`}
                                    className='btn btn-warning btn-sm me-3' style={{ borderRadius: '5px' }}>
                                    Editar
                                </Link>
                                <button onClick={() => eliminarEmpleado(empleado.idPersonal)}
                                    className='btn btn-danger btn-sm' style={{ borderRadius: '5px' }}>
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  );
}
