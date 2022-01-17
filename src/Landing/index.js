import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Header from "../Componente/Header/Header";

export default class LandingPage extends Component {

   /* state = {
        model: {
            nome: "",
            email: "",
            observacoes: "",
        }

    }

    setValues = (e, field) => {

        const {model} = this.state;
        model[field] = e.target.value;
        this.setState({model});
    }

    save = (lead) => {

        const url = "http://localhost:8080/leads";
        let data = {
            nome: lead.nome,
            email: lead.email,
            observacoes: lead.observacoes

        }

        const requestInfo = {
            method: "POST",
            body: "",
        }

        fetch(url, requestInfo)
    }
    */

    render() {

        return (

            <div>
                <Header title="Cadastro de Usuário" />
                <hr />
                <Form>

                    <FormGroup>
                        <Label for="name"> Nome: </Label>
                        <Input type="text" id="name" placeholder="Digite seu nome" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="email"> Email: </Label>
                        <Input type="text" id="email" placeholder="Digite seu e-mail" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="observations"> Observações: </Label>
                        <Input type="text" id="observations" placeholder="Digite alguma observação" />
                    </FormGroup>

                    <Button color="primary" block>Enviar</Button>

                </Form>
            </div>

        );
    }
}