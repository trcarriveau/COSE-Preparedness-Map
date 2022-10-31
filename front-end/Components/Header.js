import React from 'react'
import Button from './Button'

const Header =() => {
    return(
        <header className='header'>
            <h1>Course List</h1>
            <Button text='Add courses'/>
        </header>
    )
}

export default Header