import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Login = () => {
  return (
    <Container className="my-5">
      <h2 className="mb-4">Formulario de Registro</h2>
      <Form>
        {/* Campo Nombre */}
        <Form.Group controlId="formNombre" className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre" />
        </Form.Group>

        {/* Campo Apellido */}
        <Form.Group controlId="formApellido" className="mb-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu apellido" />
        </Form.Group>

        {/* Campo Edad */}
        <Form.Group controlId="formEdad" className="mb-3">
          <Form.Label>Edad</Form.Label>
          <Form.Control type="number" placeholder="Ingresa tu edad" />
        </Form.Group>

        {/* Campo Correo */}
        <Form.Group controlId="formCorreo" className="mb-3">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu correo electrónico" />
        </Form.Group>

        {/* Campo Celular */}
        <Form.Group controlId="formCelular" className="mb-3">
          <Form.Label>Celular</Form.Label>
          <Form.Control type="tel" placeholder="Ingresa tu número de celular" />
        </Form.Group>

        {/* Botón Enviar */}
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default Login;

