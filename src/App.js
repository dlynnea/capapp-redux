import React, {Component } from 'react';
import { BrowserRouter as Route } from "react-router-dom";
import './App.scss';
import Article from "./views/Article";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import {Header} from "./components/Header";
import PrivateRoute from './views/PrivateRoute';

class App extends Component {

  state = {
    logged_in: false,
    username: '',
    displayed_form: '',
  }

//   componentDidMount() {
//     this.getArticles()
// }

//   getArticles = () => {
//     const { fetchArticles } = this.props
//     fetchArticles(1)
// }

  // toggleNav = () => {
  //   this.setState({
  //     navShow: !this.state.navShow
  //   })
  // }

  // hideNav = () => {
  //   this.setState({ navShow: false })
  // }

  // toggleLogin = () => {
  //   this.setState({ logged_in: true })
  // }

  displayForm = form => {
    this.setState({ displayed_form: form })
  }

  handleLogin = (event, data) => {
    event.preventDefault();
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then((result) => {
      localStorage.setItem('token', result.token);
      this.setState({
        logged_in: true,
        displayed_form: '',
        username: result.username
      })
      this.getArticles()
    })
  }

  handleSignup = (event, data) => {
    event.preventDefault();
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => {
      localStorage.setItem('token', json.token);
      this.setState({
        logged_in: true,
        displayed_form: '',
        username: json.username
      })
      this.getArticles()
    })
  }

  handleLogout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false })
  }

  render() {
    let form;
    switch (this.state.displayed_form) {
    case 'login':
        form = <LoginForm handleLogin={this.handleLogin} />
        break;
    case 'signup':
        form = <SignupForm handleSignup={this.handleSignup} />
        break;
    default:
        form = null;
    }

    return (
      <div className="App">
        <Header 
          handleLogout={this.handleLogout}
          handleSignup={this.handleSignup}
          handleLogin={this.handleLogin}
          displayForm={this.displayForm}
          logged_in={this.state.logged_in} 
        />
          <Route exact path="/login"
            render={(props)=>
              <LoginForm {...props} 
                onClick={this.hideNav} 
                // toggleLogin={this.toggleLogin} 
                signUp={this.handleSignup} 
                logIn={this.handleLogn}
              />
            }
          />
        <div className=''>
          <PrivateRoute exact path='/'
            logged_in={this.logged_in}
            displayed_form={this.displayed_form}
            username={this.username}
          />
            {/* <Route exact path='/' component={Home}/> */}
            <Route path='/:id/:slug' component={Article}/>
          </div>
        <Footer/>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return{
//     error: getArticlesError(state),
//     pending: getArticlesPending(state),
//     articles: getArticles(state)
//   }
// }

// const mapDispatchToProps = dispatch => bindActionCreators({
//   fetchArticles
// },dispatch);

// const LandingView = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
