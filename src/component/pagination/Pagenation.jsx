import React from 'react'
import './Pagenation.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { contentOnPage } from '../../redux/UserReducer'


export const Pagenation = () => {

    const users = useSelector(state => state.UserReducer.user)
    const pageno = useSelector(state => state.UserReducer.pageNo)
    const dispatch = useDispatch()

    let pages = Math.round((Object.keys(users).length) / 20)

    const content = []

    for (let i = 0; i < pages; i++) {
        content.push({ limit: users.slice(20 * i, 20 * (i + 1)) })
    }

    console.log(content)
    console.log(Object.keys(content))



    const changepage = (val) => {
        dispatch(contentOnPage(Number(val)))
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }






    return (
        <div className='pagination'>
            <p
                className='other_btn'
                onClick={() => {
                    dispatch(contentOnPage(pageno - 1))
                    window.scroll({
                        top: 0,
                        behavior: 'smooth'
                    });
                }}
                style={pageno === 0 ? { display: 'none' } : { display: 'flex' }}
            >
                Prev
            </p>
            {
                Object
                    .keys(content)
                    .slice(pageno, pageno + 5)
                    .map((val) => <p
                        className='main_btn'
                        onClick={() => { changepage(val) }}
                        style={(pageno) === Number(val) ? { backgroundColor: "yellow", color: 'black' } : { backgroundColor: "#efefef", color: 'black' }}
                    >
                        {Number(val) + 1}
                    </p>)
            }
            <p
                className='other_btn'
                onClick={() => {
                    dispatch(contentOnPage(pageno + 1))
                    window.scroll({
                        top: 0,
                        behavior: 'smooth'
                    });

                }}
                style={pageno === pages - 1 || pages === 0 ? { display: 'none' } : { display: 'flex' }}

            >
                Next
            </p>
        </div>
    )
}
