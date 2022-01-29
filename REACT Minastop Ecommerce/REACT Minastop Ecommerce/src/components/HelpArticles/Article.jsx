import React from 'react'
import {IoMdArrowBack} from 'react-icons/io'
import c from './Article.module.css';
import IconButton from '../ui/IconButton'

const Article = (props) => {
  console.log(props)
  const a = props.article
  return (
    <article className={c.article}>
      <IconButton className={c.backBtn}><IoMdArrowBack/>Back</IconButton>
      <h3>{a.title}</h3>
    </article>
  )
}

export default Article
