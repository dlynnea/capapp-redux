import React, {Component} from 'react';
// import config from "../config";
import moment from "moment";
import Loader from "../components/Loader";

class Article extends Component{

    constructor(props){
        super(props);

        this.state = {
            article: null,
            loading: true
        }
    }

    componentWillMount() {
        const {match : {params:{ id}}} = this.props;

        fetch(`http://localhost:3000/articles/${id}`)
            .then((response) => response.json() )
            .then((response) => {
                this.setState(()=> ({
                    article: response,
                    loading: false
                }))
            })
    }

    articleContent(){
        return {__html:this.state.article.content}
    }

    articleDate(){
       return moment(this.state.article.date).format('MMMM DD, YYYY')
    }

    render() {
        return(
        <div>
            {this.state.loading && <div className='row'>
                    <div className='col-md-2 mx-auto my-5 p-5'>
                        <div className='text-center'>
                            <Loader/>
                            <p>Please wait..</p>
                        </div>
                    </div>
                </div>
            }

            {!this.state.loading && <div className='article'>
                <div className='blog-header'>
                    <h1 className='text-center'>{this.state.article.title}</h1>
                    <h5 className='text-center text-uppercase mt-4'>Published on {this.articleDate()} </h5>
                </div>
                <div className='container'>
                    <div className='article-body'>
                        <div className='article-image'>
                            {/* <img  alt={''} className='img-fluid' src={this.state.article.featured_image} /> */}
                        </div>
                        <div className='article-content' dangerouslySetInnerHTML={this.articleContent()}/>
                    </div>
                </div>
            </div>}
        </div>
        )
    }
}

export default Article