import { Route, Switch } from 'react-router';
import Mw_public from './pages/Mw_public'
import './styles/style.scss'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Mw_public} />
    </Switch>
  );
}

export default App;
