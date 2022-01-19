import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button, Alert, Table } from 'reactstrap';

class ListLead extends Component {
    render() {
        return (
            <Table className="table-bordered text-center">
                <thead className="thead-dark">
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Observações</th>
                        <th>Ações</th>
                    </tr>
                </thead>

            </Table>
        );
    }
}

class FormLead extends Component {
    render() {
        return (
            <Form>

                <FormGroup>
                    <div className="form-row">
                        <Label for="nome">Nome:</Label>
                        <Input id="nome" type="text" placeholder="Digite seu nome"></Input>

                    </div>
                </FormGroup>

                <FormGroup>
                    <div className="form-row">
                        <Label for="email">Email:</Label>
                        <Input id="email" type="text" placeholder="Digite seu email"></Input>
                    </div>
                </FormGroup>

                <FormGroup>
                    <div className="form-row">
                        <Label for="email">Observações:</Label>
                        <Input id="observacoes" type="text" placeholder="Digite as observações"></Input>
                    </div>
                </FormGroup>

                <Button color="primary" block>Atualizar</Button>

            </Form >
        );
    }
}
class Dashboard extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6 my-3">
                        <h2 className="font-weight-bold text-center">ATUALIZAR LEAD</h2>
                        <FormLead />
                    </div>
                    <div className="col-md-6 my-3">
                    <h2 className="font-weight-bold text-center">LISTA DE LEADS</h2>
                        <ListLead />
                    </div>
                </div>
            </div>
        );
    }

}
export default Dashboard;