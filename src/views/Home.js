import React, {Component } from 'react';
import {connect} from 'react-redux';
import ArticleCard from "../components/ArticleCard";
import fetchArticles from "../actions/fetchArticles";
import {getArticles, getArticlesPending, getArticlesError } from "../store/reducers";
import {bindActionCreators} from "redux";
import {Link} from "react-router-dom";
import qs from 'query-string';
import Loader from "../components/Loader";
import Sidebar from "../sidebar/Sidebar"
import moment from 'moment';

class Home extends Component {

    state = {
        // page: qs.parse(this.props.location.search).page || 1,
        today: []
    }

    componentDidMount() {
        this.getArticles();
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

   todaysDate(){
        return moment(this.state.today.date).format('MMMM DD, YYYY')
     }

    render() {
        console.log("wtf")
    return (<div className='home'>
            <h5 className='text-center text-uppercase mt-4'>Todays Date: {this.todaysDate()} </h5>
            <Sidebar />
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
                        {console.log(this.props.articles)}
                        {this.props.articles.items.map((article) => (
                            <div className='col-lg-4 p-4' key={article.id}>
                                <ArticleCard article={article}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='blog-pagination'>
                    <div className='row'>
                        <div className='col-md-3 mx-auto'>
                            {/* {
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
                            } */}
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )}
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