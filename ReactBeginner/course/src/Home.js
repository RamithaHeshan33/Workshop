import React from 'react'

function Home() {
  return (
    <div>
        <h1>Home</h1>
        <Para name="Ramitha Heshan" age="22" job="Backend Dev" />

    </div>
  )
}

const Para = (props) => {
    return (
        <div className='card'>
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Job: {props.job}</p>
        </div>
    )
}

export default Home