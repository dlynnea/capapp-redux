import React from 'react';
import { Link } from 'react-router-dom'


const ArticleCard = ({article}) => (
    <div className='article-card'>
        {console.log(article)}
        <Link to={`${article.id}/${article.slug}`}>
            <div className='card-image'>
                {/* <img alt='' className='img-fluid' src={article.featured_image}/> */}
            </div>
            <div className='card-content text-center pt-3'>
                <h5 className='title'> {article.title} </h5>
                <p className='text-center excerpt'>{article.summary}</p>
            </div>
        </Link>
    </div>

)

export default ArticleCard