import React from 'react'
import './Team.css'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { removefromteam } from '../../redux/UserReducer'

const Team = () => {
    const team = useSelector(state => state.UserReducer.team)
    const dispatch = useDispatch()

    return (
        <div className='team_main'>
    <br />
    <br />
    <br />
    <br />
    <br />

    


        
        <center><h1>My-Team</h1></center>
        <div className='team_mem'>

            {
                team.map((data) => {
                    return (
                        <div className="container">
                            <div className="img">
                                <img src={data.avatar} alt="User Image" />
                                <button className='btn' onClick={() => dispatch(removefromteam(data.id))} >Remove</button>

                            </div>
                            <div className="user_detail">
                                <div className='user_name'>
                                    <h2>{data.first_name}</h2>
                                    <h2>{data.last_name}</h2>
                                </div>
                                <p>{data.email}</p>
                                <p>Domain: {data.domain}</p>
                                <div className='gender'>
                                    <p>Gender: {data.gender}</p>
                                    <p className='avail' style={data.available ? { color: 'green' } : { color: 'red' }}>{data.available ? 'Available' : 'Not Available'}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }


        </div>
        </div>
    )
}

export default Team