import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServicesDetails from './pages/ServicesDetails/ServicesDetails';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/home'>
          <Home></Home>
        </Route>
        <Route exact path='/service'>
          <Services></Services>
        </Route>
        <PrivateRoute exact path='/service/:id'>
          <ServicesDetails></ServicesDetails>
        </PrivateRoute>
        <PrivateRoute exact path='/about'>
          <About></About>
        </PrivateRoute>
        <Route exact path='/about'>
          <Contact></Contact>
        </Route>
        <Route exact path='/login'>
          <Login></Login>
        </Route>
        <Route exact path='/register'>
          <Register></Register>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </AuthProvider>
  );
}

export default App;
