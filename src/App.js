import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';

import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Places from './Pages/Places/Places';
import PlaceDetails from './Pages/Places/PlaceDetails/PlaceDetails';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register/Register';
import PostPage from './Pages/PostPage/PostPage';
import DashBoard from './Pages/DashBoard/DashBoard';
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>

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

            <Route exact path='/home'>
              <Home></Home>
            </Route>

            <Route exact path='/places'>
              <Places></Places>
            </Route>

            <PrivateRoute exact path='/places/:id'>
              <PlaceDetails></PlaceDetails>
            </PrivateRoute>

            <PrivateRoute exact path='/share'>
              <PostPage></PostPage>
            </PrivateRoute>

            <PrivateRoute exact path='/dashboard'>
              <DashBoard></DashBoard>
            </PrivateRoute>


            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>

            <Route path='*'>

            </Route>


          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
