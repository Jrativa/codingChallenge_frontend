import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import DashBoard from './components/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Employee } from './components/Dashboard';

function App() {
  const [logged, setLogged] = useState(false);
  const [employee, setEmployee] = useState<Employee>();

  useEffect(() => {
    if (logged && employee) {
      console.log('El usuario está autenticado.');
      console.log('Datos del empleado:', employee);
      localStorage.setItem('employee', JSON.stringify(employee));
      window.location.href = "/employee/dash";
      // Aquí puedes realizar otras operaciones cuando el usuario esté autenticado
    }
  }, [logged, employee]);

  const handleLogin = (formData:FormData) => {
    fetch('http://localhost:8000/login', {
      method: 'POST',
      body: formData,
    })
      .then(async (response) => {
        if (response.ok) {
          const data = await response.json();
          if (data && data.employee) {
            setLogged(true);
            setEmployee(data.employee);
          } else {
            console.error('Error al iniciar sesión');
          }
        } else {
          console.error('Error al iniciar sesión');
        }
      })
      .catch((error) => {
        console.error('Error de red:', error);
      });
  };

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login onLogin={handleLogin} />} />
            <Route path="/employee/dash" element={<DashBoard employee={employee} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
