import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import Header from "../Header/Header";

export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: this.props.state ? this.props.location.state.message : "",
    };

  }

  signIn = () => {
    const url = "http://localhost:8080/login"
    const data = {
      email: this.email,
      senha: this.password,
    };

    const requestInfo = {
      method: "POST",
      body: JSON.stringify(data), // transformar json com os dados inseridos em string
      headers: new Headers({
        "Content-Type": "application/json"
      }),
    };

    fetch(url, requestInfo)

      .then(response => {

        if (response.ok) {
          return response.headers.get("Authorization")
        }

        throw new Error("Login inválido") //mensagem da exceção

      }).then(token => {

        localStorage.setItem("token", token);

      }).catch(
        e => {
          this.setState({ message: e.message }) //exibição da mensagem de exceção
        }
      );

  }

  render() {

    return (

      <div>

        <Header title="Login de Usuário" />
        <hr />

        { //condição verdadeira (caminho feliz) operador ternário
          this.state.message !== "" ? (
            <Alert color="danger" className="text-center">{this.state.message}</Alert> //messagem de alerta
          ) //senão (else) condição falso (caminho infeliz)
            : ""
        }

        <Form>

          <FormGroup>
            <Label for="email">E-mail:</Label>
            <Input type="text" id="email" onChange={e => this.email = e.target.value} placeholder="Digite seu e-mail" />
          </FormGroup>

          <FormGroup>
            <Label for="password">Senha:</Label>
            <Input type="password" id="password" onChange={e => this.password = e.target.value} placeholder="Digite sua senha" />
          </FormGroup>

          <Button color="primary" block onClick={this.signIn}> Entrar </Button>

        </Form>

      </div>
    );
  }
}
