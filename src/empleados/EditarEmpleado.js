import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditarEmpleado() {
    const urlBase = "http://localhost:8080/rh-app/empleados";
    let navegacion = useNavigate();
    const { id } = useParams();
    
    const [empleado, setEmpleado] = useState({
        nombre: "",
        departamento: "",
        sueldo: ""
    });

    const { nombre, departamento, sueldo } = empleado;

    // Mover cargarEmpleados dentro del useEffect o utilizar useCallback para evitar redefinirla
    const cargarEmpleados = useCallback(async () => {
        try {
            const resultado = await axios.get(`${urlBase}/${id}`);
            setEmpleado(resultado.data);
        } catch (error) {
            console.error("Error al cargar empleado:", error.response?.data || error.message);
        }
    }, [id]); // Asegúrate de que id esté en las dependencias de useCallback

    useEffect(() => {
        cargarEmpleados();
    }, [cargarEmpleados]); // Llama a cargarEmpleados solo cuando cambie `id`

    const onInputChange = (e) => {
        setEmpleado({ ...empleado, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`${urlBase}/${id}`, empleado);
        //redirigimos a la pagina de inicio
        navegacion('/');
    };

    return (
        <div className='container' style={{ backgroundColor: '#f5f7fa', padding: '20px', borderRadius: '10px' }}>
            <div className='text-center' style={{ margin: "30px", color: '#4caf50' }}>
                <h3>Editar Empleado</h3>
            </div>
            <form onSubmit={(e) => onSubmit(e)} style={{ maxWidth: '500px', margin: '0 auto' }}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label" style={{ color: '#00796b' }}>Nombre</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nombre" 
                        name='nombre' 
                        required={true} 
                        value={nombre} 
                        onChange={(e) => onInputChange(e)} 
                        style={{ borderColor: '#81c784' }} 
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="departamento" className="form-label" style={{ color: '#00796b' }}>Departamento</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="departamento" 
                        name='departamento' 
                        value={departamento} 
                        onChange={(e) => onInputChange(e)} 
                        style={{ borderColor: '#81c784' }} 
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="sueldo" className="form-label" style={{ color: '#00796b' }}>Sueldo</label>
                    <input 
                        type="number" 
                        step="any" 
                        className="form-control" 
                        id="sueldo" 
                        name='sueldo' 
                        value={sueldo} 
                        onChange={(e) => onInputChange(e)} 
                        style={{ borderColor: '#81c784' }} 
                    />
                </div>

                <div className='text-center'>
                    <button type="submit" className="btn" style={{ backgroundColor: '#4caf50', color: 'white' }}>Guardar</button>
                    <a href='/' className='btn' style={{ backgroundColor: '#f44336', color: 'white', marginLeft: '10px' }}>Regresar</a>
                </div>
            </form>
        </div>
    );
}
