import React from 'react'
import { useSelector } from 'react-redux'

export default function NewsLetters() {

  const constantInfo = useSelector(state=>state.constant.data)

  return (
    <section className='newsletters'>
        <form action="" method="get">
            <h3>{constantInfo.newsLetters.title}</h3>
            <span className='newsletters_paragraph'>{constantInfo.newsLetters.description}</span>
            <span className='newsletters_inputs'>
                <input type="email" name="email" placeholder={constantInfo.newsLetters.placeHolder} />
                <button type='submit'>{constantInfo.newsLetters.buttonValue}</button>
            </span>
        </form>
    </section>
  )
}
