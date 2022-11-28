//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
//import Login from './components/login/login';
import Menu from './components/navbar/navbar';
import AppRouter from './components/router/router';


function App() {
  return (
    <div className="App">
        <Menu />
      <Container>
       <AppRouter />
      </Container>
    </div>
  );
}

export default App;