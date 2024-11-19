import React from 'react';

import { Navbar, Nav, Container, Card, Button } from 'react-bootstrap'; // Importa los componentes de React-Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Componente Real.js
const Real = () => {
  return (
    <div>
      {/* Menú de navegación */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Realidad Aumentada</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="#about">Sobre la AR</Nav.Link>
              <Nav.Link href="#tech">Tecnología</Nav.Link>
              <Nav.Link href="#applications">Aplicaciones</Nav.Link>
              <Nav.Link href="#applications">usuario</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
      <Container id="about" className="my-5">
        <h2>¿Qué es la Realidad Aumentada?</h2>
        <p>
          La Realidad Aumentada (AR) es una tecnología que permite superponer
          información digital (gráficos, sonidos, etc.) sobre el mundo físico en tiempo real.
          Esta tecnología ha tenido un gran impacto en diversas áreas, desde el entretenimiento
          hasta la medicina y la educación.
        </p>
        <Card className="mb-3">
          <Card.Img variant="top" src="https://via.placeholder.com/600x400?text=Realidad+Aumentada" alt="Imagen sobre AR" />
          <Card.Body>
            <Card.Title>Explora el mundo con AR</Card.Title>
            <Card.Text>
              La realidad aumentada permite que interactuemos con el entorno de una manera nueva,
              al integrar elementos virtuales con el mundo físico en tiempo real.
            </Card.Text>
            <Button variant="primary">Ver más</Button>
          </Card.Body>
        </Card>
      </Container>

      {/* Sección de tecnología detrás de la AR */}
      <Container id="tech" className="my-5">
        <h2>Tecnología de la Realidad Aumentada</h2>
        <p>
          La tecnología de la realidad aumentada se basa en varios avances en hardware y software,
          tales como cámaras, sensores, procesadores y algoritmos de visión por computadora.
          Gracias a estos avances, la AR se ha vuelto accesible a través de dispositivos como teléfonos
          móviles, tabletas y gafas inteligentes.
        </p>
        <Card className="mb-3">
          <Card.Img variant="top" src="https://via.placeholder.com/600x400?text=Tecnología+AR" alt="Tecnología AR" />
          <Card.Body>
            <Card.Title>Componentes Clave de la AR</Card.Title>
            <Card.Text>
              Los sistemas AR emplean sensores de movimiento, cámaras de alta definición y plataformas
              de procesamiento gráfico para detectar y superponer objetos virtuales sobre el mundo real.
            </Card.Text>
            <Button variant="primary">Más detalles</Button>
          </Card.Body>
        </Card>
      </Container>

      {/* Sección de aplicaciones de AR */}
      <Container id="applications" className="my-5">
        <h2>Aplicaciones de la Realidad Aumentada</h2>
        <p>
          La AR está revolucionando diversas industrias. Algunas de sus aplicaciones incluyen:
        </p>
        <ul>
          <li>Juegos y entretenimiento</li>
          <li>Educación interactiva</li>
          <li>Medicina y cirugía</li>
          <li>Arquitectura y diseño</li>
          <li>Marketing y publicidad</li>
        </ul>
        <Card className="mb-3">
          <Card.Img variant="top" src="https://via.placeholder.com/600x400?text=Aplicaciones+AR" alt="Aplicaciones AR" />
          <Card.Body>
            <Card.Title>Aplicación Popular: Pokémon GO</Card.Title>
            <Card.Text>
              Un ejemplo famoso de AR en los juegos es Pokémon GO, que permite a los jugadores
              capturar Pokémon en el mundo real utilizando sus dispositivos móviles.
            </Card.Text>
            <Button variant="primary">Ver ejemplos</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Real;
