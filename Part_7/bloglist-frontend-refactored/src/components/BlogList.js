import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const blogStyle = {
  paddingTop: 10,
  paddingLeft: 2,
  border: 'solid',
  borderWidth: 1,
  marginBottom: 5
}

const BlogList = ({ blog, currentUser, handleLike, handleDelete }) => {
  const [visible, setVisible] = useState(false)
  const displayBlog = () => {
    return (
      <div>
        <p>URL:
          <a href={blog.url}>{blog.url}</a>
        </p>
        <p>
          Likes: {blog.likes}
          <button id='like-button' onClick={handleLike}>like</button>
        </p>
        {currentUser.username === blog.user.username
          ? <button id='delete-button' onClick={handleDelete}>delete</button>
          : ''}
      </div>
    )
  }

  return (
    <div id='blog' style={blogStyle} className='blog'>
      <h2><Link to={`/blogs/${blog.id}`}>{blog.title}</Link></h2>
      <p>Author: {blog.author}</p>
      {visible && displayBlog()}
      <button id='view-button' onClick={() => setVisible(!visible)}>
        {visible ? 'hide' : 'view'}
      </button>
    </div >
  )
}

export default BlogList