import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PartOne from './Components/Home/Part-one/PartOne';
import Services from './Components/Services/Services';
import OneService from './Components/Services/OneServices/OneService';
import NotFound from './Components/NotFound/NotFound';
import AddService from './Components/AddService/AddService';
import Trip from './Components/Ttip/Trip';
import About from './Components/About/About';
import SingleService from './Components/singleService/SingleService';
import PrivateRouter from './Components/PriateRouter/PrivateRouter';
import AuthProvider from './Contexts/Authprovider';
import ManageServices from './Components/ManageServices/ManageServices';


function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>

            </Route>
            <Route path='/home'>
              <Home></Home>

            </Route>
            <Route path='/aboutus'>
              <About></About>

            </Route>
            <Route path='/login'>
              <Login></Login>

            </Route>

            <Route path="/tripdetails">
              <Trip></Trip>

            </Route>
            <Route path="/manageservices">
              <ManageServices></ManageServices>

            </Route>
            <Route path="/services">
              <Services></Services>

            </Route>
            <Route path="/services/:id">
              <OneService></OneService>

            </Route>
            <PrivateRouter path="/service/:serviceId">
              <SingleService></SingleService>
            </PrivateRouter>
            <Route path="/addservice">
              <AddService></AddService>

            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>



        </Router>
      </AuthProvider>




    </div>
  );
}

export default App;
