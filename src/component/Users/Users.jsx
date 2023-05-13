import React from 'react'
import './Users.css'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


import { maketeam, removefromteam } from '../../redux/UserReducer'

const Users = () => {

    

    const users = useSelector(state => state.UserReducer.user)
    const team = useSelector(state => state.UserReducer.team)
    const pageno = useSelector(state => state.UserReducer.pageNo)

    const dispatch = useDispatch()

    // use for pagination

    console.log(pageno)



    // tema add function 
    const addMember = (data) => {
        if (team.find(val => { return (val.id === data.id) })) {
            dispatch(removefromteam(data.id))
        }
        else {
            dispatch(maketeam(data))

        }
        console.log(team)
    }

    return (
        <div className='users'>

            {
                users.slice(20 * pageno, 20 * (pageno + 1)).map((data) => {
                    return (
                        <div className="container">
                            <div className="img">
                                <img src={data.avatar} alt="User Image" />
                                <button className='btn' onClick={() => addMember(data)} style={team.find(val => { return (val.id === data.id) }) ? { backgroundColor: 'red' } : { backgroundColor: " #1bc405" }}>{team.find(val => { return (val.id === data.id) }) ? 'Remove' : 'Add'}</button>

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
    )
}
{/* <button onClick={() => addMember(data)} style={team.find(val => { return (val.id === data.id) }) ? { backgroundColor: 'green' } : { backgroundColor: "#efefef" }}>{team.find(val => { return (val.id === data.id) }) ? 'Remove From Team' : 'Add In Team'}</button> */ }

export default Users