import PropTypes from 'prop-types';
import {  FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark}) => {
    const {title, cover, author, author_img, reading_time, posted_date, hashtags} = blog;
    return ( 
        <div className='mb-20 mt-6'>
            <img className='w-full mb-8 rounded-lg' src={cover} alt={`Cover Picture of the title ${title}`} />
            <div className='flex justify-between mb-5'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-xl text-purple-500'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl mb-3'>{title}</h2>
            <p>{hashtags}</p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}

export default Blog;