import "./Login.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export function Login() {

  const resultado = useContext(ThemeContext)
  const temaEscuro = resultado.temaEscuro

  return (
  <div className={temaEscuro ? "bg-dark text-light" : "bg-light text-dark"}>
    <Form className="form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="label">E-mail</Form.Label>
        <Form.Control className="input" type="email" placeholder="Digite seu e-mail" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="label">Senha</Form.Label>
        <Form.Control className="input" type="password" placeholder="Digite sua senha" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Manter conectado" />
      </Form.Group>
      <Button variant="outline-success" type="submit">
        Submit
      </Button>
    </Form>
  </div>
    );
}
