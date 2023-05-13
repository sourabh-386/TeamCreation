import React, { useRef } from 'react'
import './Search.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { changeuser } from '../../redux/UserReducer'



const Search = () => {



    const input_value = useRef(null)
    const dispatch = useDispatch()
    const users = useSelector(state => state.UserReducer.user)



    const change = (input) => {
        if (input) {
            const name = input.toUpperCase()
            dispatch(changeuser(name.split(' ')[0]))
        }

    }

    return (
        <div className='search'>
            <div className="src">
                <input type="text" ref={input_value} />
                <button className='text_btn' onClick={() => change(input_value.current.value)}>Search</button>
            </div>
        </div>
    )
}

export default Search