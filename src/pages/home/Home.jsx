import React from 'react'
import './Home.css'
import Users from '../../component/Users/Users'
import Search from '../../component/Search/Search'
import Filter from '../../component/Filter/Filter'
import { Pagenation } from '../../component/pagination/Pagenation'
const Home = () => {
    return (
        <div className='home'>
            <br />
            <br />
            <br />
            <br />

            <div className="search_box">
                <Search />
                <Filter />
            </div>
            <div className='home__container'>


                <center className='home_head'><h1>Create Your Team</h1></center>
                <Users />
                <br />
                <br />
                <Pagenation />

            </div>
        </div>
    )
}

export default Home