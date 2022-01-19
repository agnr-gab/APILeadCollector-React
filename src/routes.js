import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PrivateRoute from "./auth";
import Login from "./Componentes/Pages/Login"
import Dashboard from "./Componentes/Pages//Dashboard";
import Landing from "./Componentes/Pages/Landing/index.js"

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard}/>
            <Route exact path="/landing" component={Landing}/>
        </Switch>
    </Router>
);

export default Routes;