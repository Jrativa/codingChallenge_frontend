import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import DashBoard from './components/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Employee } from './components/Dashboard';
import NotFound from './components/NotFound'; 
import { Modal, Button } from 'react-bootstrap';

function App() {
  const [logged, setLogged] = useState(false);
  const [employee, setEmployee] = useState<Employee>();
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (logged && employee) {
      console.log('El usuario está autenticado.');
      console.log('Datos del empleado:', employee);
      localStorage.setItem('employee', JSON.stringify(employee));
      window.location.href = "/employee/dash";
    }
  }, [logged, employee]);

  const handleLogin = (formData: FormData) => {
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
            setError('Email or password incorrect');
            setShowModal(true);
          }
        } else {
          setError('Email or password incorrect');
          setShowModal(true);
        }
      })
      .catch((error) => {
        setError('Network Error');
        setShowModal(true);
        console.error('Error de red:', error);
      });
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login onLogin={handleLogin} />} />
            <Route path="/employee/dash" element={<DashBoard employee={employee} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{error}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default App;
