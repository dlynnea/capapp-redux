import React, {Component } from 'react';
import {connect} from 'react-redux';
import ArticleCard from "../components/ArticleCard";
import fetchArticles from "../actions/fetchArticles";
import {getArticles, getArticlesPending, getArticlesError } from "../store/reducers";
import {bindActionCreators} from "redux";
import {Link} from "react-router-dom";
// import qs from 'query-string';
import Loader from "../components/Loader";
// import Nav from "../components/Nav";
// import LoginForm from "../components/LoginForm";
// import SignupForm from "../components/SignupForm";
import Sidebar from "../sidebar/Sidebar"

class Home extends Component {

    state = {
        // logged_in: localStorage.getItem('token') ? true : false,
        // username: '',
        // displayed_form: '',
        // page: qs.parse(this.props.location.search).page || 1,
    }

    componentWillMount() {
        this.getArticles()
    }

    // componentDidUpdate (prevProps) {
    //     let prevPage =  qs.parse(prevProps.location.search).page;
    //     let newPage = qs.parse(this.props.location.search).page;
    //     if(prevPage !== newPage){
    //         this.setState(() => (
    //             {page: newPage }
    //         ),()=> {
    //             this.getArticles();
    //         })
    //     }
    // }

    getArticles = () => {
        const { fetchArticles } = this.props
        fetchArticles(this.state.page)
    }

    // displayForm = form => {
    //     this.setState({displayed_form: form})
    //   }

    // handleLogin = (event, data) => {
    //     event.preventDefault();
    //     fetch('http://localhost:3000/login', {
    //         method: 'POST',
    //         headers: {
    //         'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     .then(response => response.json())
    //     .then((result) => {
    //         localStorage.setItem('token', result.token);
    //         console.log("json", result)
    //         this.setState({
    //         logged_in: true,
    //         displayed_form: '',
    //         username: result.username
    //         })
    //     })
    // }

    // handleSignup = (event, data) => {
    //     event.preventDefault();
    //     fetch('http://localhost:3000/users', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(data)
    //     })
    //     .then(response => response.json())
    //     .then(json => {
    //       localStorage.setItem('token', json.token);
    //       this.setState({
    //         logged_in: true,
    //         displayed_form: '',
    //         username: json.username
    //       })
    //     })
    //   }

    //   handleLogout = () => {
    //     localStorage.removeItem('token');
    //     this.setState({ logged_in: false, username: '' })
    //   }

    render() {
        // let form;
        // switch (this.state.displayed_form) {
        // case 'login':
        //     form = <LoginForm handleLogin={this.handleLogin} />
        //     break;
        // case 'signup':
        //     form = <SignupForm handleSignup={this.handleSignup} />
        //     break;
        // default:
        //     form = null;
        // }

    return <div className='home'>
            {/* <div className='blog-header'>
                <h1 className='text-center'>
                    <Nav 
                    // logged_in={this.state.logged_in}
                    // displayForm={this.displayForm}
                    handleLogout={this.handleLogout}
                    />
                </h1>
            </div> */}
            <Sidebar />
            {/* {form} */}
            {this.props.pending && <div className='row'>
                <div className='col-md-2 mx-auto my-5 p-5'>
                    <div className='text-center'>
                        <Loader/>
                        <p className="please-wait">Please wait..</p>
                    </div>
                </div>
            </div> }
            {!this.props.pending && <div className='blog-body'>
                <div className='container'>
                    <div className='row no-gutters'>
                        {this.props.articles && this.props.articles.items.map((article) => (
                            <div className='col-lg-4 p-4' key={article.id}>
                                <ArticleCard article={article}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='blog-pagination'>
                    <div className='row'>
                        <div className='col-md-3 mx-auto'>
                            {
                                this.props.articles
                                && <div className='d-flex'>
                                    {
                                        this.state.page > 1 &&
                                        <Link to={`/?page=${this.state.page - 1}`} className='btn mr-5'>Previous</Link>}
                                    {
                                        parseInt(this.props.articles.pagination.total_pages) > parseInt(this.state.page) &&
                                        <Link to={`/?page=${parseInt(this.state.page) + 1}`}
                                            className='btn ml-5'>Next</Link>}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    }
}  

    const mapStateToProps = (state) => {
        return{
            error: getArticlesError(state),
            pending: getArticlesPending(state),
            articles: getArticles(state)
        }
    }

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchArticles
},dispatch);

const HomeView = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeView