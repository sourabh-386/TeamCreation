import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'




const Nav = () => {

  const team = useSelector(state => state.UserReducer.team)

  return (

    <div className='nav'>
      <Link to='/' className='links links1' >Home</Link>
      
        <Link to='/team' className='links' >Team</Link>
        {Object.keys(team).length!==0 ?
          <p className='my_team_no'>{Object.keys(team).length}</p>
          :
          ''
        }
      


    </div>
  )
}

export default Nav