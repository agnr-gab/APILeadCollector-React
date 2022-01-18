import react, { Component } from "react";
import { Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import Header from "../../Header";

export default class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: this.props.state ? this.state.message : "",
    };
  }

  save = (lead) => {
    const url = "http://localhost:8080/leads";
    const data = {
      nome: lead.nome,
      email: lead.email,
      observacoes: lead.observacoes,
    };

    const requestInfo = {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      })
    };

    fetch(url, requestInfo)

      .then((response) => {
        return response

      })

      .catch(
        e => {
          this.state({ message: e.message });
        });
  };

  render() {
    return (
      <div>
        <Header title="Landing Page" />
        <hr />

        {
          this.state.message !== '' ? (
            <Alert color='danger' className='text-center'>{this.state.message}</Alert>
          ) : ''
        }

        <Form className="formulario">

          <FormGroup>
            <Label for="nome"> Nome: </Label>
            <Input type="text" id="nome" onChange={e => this.nome = e.target.value} placeholder="Informe o seu nome" />
          </FormGroup>

          <FormGroup>
            <Label for="email"> Email: </Label>
            <Input type="text" id="email" onChange={e => this.email = e.target.value} placeholder="Informe o seu email" />
          </FormGroup>

          <FormGroup>
            <Label for="observations"> Observações: </Label>
            <Input
              type="textarea" id="observations" onChange={e => this.observacoes = e.target.value} placeholder="Digite alguma observação" />
          </FormGroup>

          <Button color="danger" block onClick={this.signIn}>            
            ENVIAR
          </Button>
        </Form>
      </div>
    );
  }
}
