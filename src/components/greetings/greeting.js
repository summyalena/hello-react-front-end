import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchData } from '../redux/greetings/greeting'

function Greeting() {
    const dispatch = useDispatch()
    const greetings = useSelector((state)=> state.greetings.greeting)

    useEffect(() => {
       dispatch(fetchData)
       console.log('hello');
    }, [])
    
  return (
    <div>
      {greetings.message}  
    </div>
  )
}

export default Greeting