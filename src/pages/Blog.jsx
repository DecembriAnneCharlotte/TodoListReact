import React from 'react'
import Navbar from '../components/NavBar/NavBar'
import ArticleList from '../components/Article/ArticleList'

const Blog = () => {
  return (
    <>
        <Navbar/>
        <h1>Blog</h1>
        <ArticleList/>
    </>
  )
}

export default Blog