import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import Header from "../Header/Header";

export default class Login extends Component {
  render() {
    return (
      <div>
        <Header title="Página de Login"/>
        <hr/>
      <Form>
        <FormGroup>
            <Label for= "email">E-mail:</Label>
            <Input type="text" id="email" placeholder="Digite seu e-mail"/>
        </FormGroup>
        <FormGroup>
            <Label for="password">Senha:</Label>
            <Input type="password" id="password" placeholder="Digite sua senha"/>
        </FormGroup>
        <Button color="primary" block>Entrar</Button>
      </Form>
      </div>
    );
  }
}
