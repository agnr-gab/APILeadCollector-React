import React from "react";
import { Route, Redirect } from "react-router-dom";

//verifica se o usuário está autenticado (de maneira simplificada)
const isAuth = () => {
    if (localStorage.getItem("token") !== null) {
        return true
    }
    return false;
}

//redireciona o usuário, caso ele esteja autenticado ou não 
const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest} //Spread syntax (...) renderização condicional
            render={props => //a props assume o valor de rest 
                /*operador ternário (tipo "if/else") exemplos:
                condition ? val1 : val2 
                var status = (age >= 18) ? 'adult' : 'minor'; */
                isAuth() ? (
                    <Component {...props} /> //deixar dinamico
                ) : (
                    <Redirect to={{ //redirecionado quando não cumpre os requisitos de validação
                        pathname: "/",
                        state: { message: "Usuário não autorizado." }
                    }}
                    />
                )

            }

        />
    );

}

export default PrivateRoute;
