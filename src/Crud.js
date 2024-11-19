import React, { useState } from 'react';
import { Container, Table, Form, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Crud = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '', age: '' });
  const [editUser, setEditUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  // Añadir un nuevo usuario
  const handleAddUser = () => {
    if (newUser.name && newUser.email && newUser.age) {
      setUsers([...users, { ...newUser, id: Date.now() }]);
      setNewUser({ name: '', email: '', age: '' });
    }
  };

  // Abrir el modal para editar
  const handleEdit = (user) => {
    setEditUser(user);
    setShowModal(true);
  };

  // Guardar cambios en la edición
  const handleSaveEdit = () => {
    setUsers(users.map((user) => (user.id === editUser.id ? editUser : user)));
    setShowModal(false);
  };

  // Eliminar un usuario
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4">CRUD de Usuarios</h2>

      {/* Formulario para agregar usuarios */}
      <Form className="mb-4">
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Ingresa el nombre"
            value={newUser.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Ingresa el correo"
            value={newUser.email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formAge" className="mb-3">
          <Form.Label>Edad</Form.Label>
          <Form.Control
            type="number"
            name="age"
            placeholder="Ingresa la edad"
            value={newUser.age}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleAddUser}>
          Agregar Usuario
        </Button>
      </Form>

      {/* Tabla para mostrar usuarios */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>
                <Button variant="warning" size="sm" onClick={() => handleEdit(user)}>
                  Editar
                </Button>{' '}
                <Button variant="danger" size="sm" onClick={() => handleDelete(user.id)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal para editar usuarios */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="editName" className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={editUser?.name || ''}
                onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="editEmail" className="mb-3">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="email"
                value={editUser?.email || ''}
                onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="editAge" className="mb-3">
              <Form.Label>Edad</Form.Label>
              <Form.Control
                type="number"
                value={editUser?.age || ''}
                onChange={(e) => setEditUser({ ...editUser, age: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSaveEdit}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Crud;
