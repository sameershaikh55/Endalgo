import { Route, Switch } from "react-router";
import Mw_public from "./pages/Mw_public";
import "./styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Mw_group from "./pages/Mw_group";

function App() {
	return (
		<Switch>
			<Route exact path="/" component={Mw_public} />
			<Route exact path="/start_group" component={Mw_group} />
		</Switch>
	);
}

export default App;
