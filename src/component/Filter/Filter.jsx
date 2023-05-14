import React, { useState } from 'react'
import './Filter.css'
import { useFormik } from 'formik'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import filter_fun from '../../redux/helperfunctions/function1'

import { filterusers, contentOnPage } from '../../redux/UserReducer'



const Filter = () => {

  const [filter_state, set_filter_state] = useState(false)


  const dispatch = useDispatch()
  const users = useSelector(state => state.UserReducer.userList)



  const initial_value = {
    gender: '',
    onlyavail: false,
    job: '',
  }

  const { handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initial_value,
    onSubmit: (value) => {

      console.log(filter_fun(value, users))
      dispatch(filterusers(filter_fun(value, users)))
      dispatch(contentOnPage(0))
    },
  })


  return (
    <>
      <div className='filter' onClick={() => set_filter_state(!filter_state)}>Filter <i class="bi bi-arrow-down-up"></i></div>
      <form className='option' onSubmit={handleSubmit} style={filter_state ? { display: 'flex', flexDirection: 'column' } : { display: 'none' }}>
        <div className="option_gender">
          <input type="radio" name="gender" value='All' onChange={handleChange} onBlur={handleBlur} />All

          <input type="radio" name="gender" value='Male' onChange={handleChange} onBlur={handleBlur} />Male
          <input type="radio" name="gender" value='Female' onChange={handleChange} onBlur={handleBlur} />Female
        </div>
        <br />
        <hr />
        <br />

        <div className="option_domane">
          <input type="checkbox" name="job" value="IT" onChange={handleChange} onBlur={handleBlur} />IT
          <input type="checkbox" name="job" value='Finance' onChange={handleChange} onBlur={handleBlur} />Finance
          <input type="checkbox" name="job" value='Management' onChange={handleChange} onBlur={handleBlur} />Management
          <div >
            <br />
            <input type="checkbox" name="job" value="Sales" onChange={handleChange} onBlur={handleBlur} />Sales
            <input type="checkbox" name="job" value="Finance" onChange={handleChange} onBlur={handleBlur} />Finance
            <input type="checkbox" name="job" value="Marketing" onChange={handleChange} onBlur={handleBlur} />Marketing

          </div>
          <div>
            <br />
            <input type="checkbox" name="job" value="UI Designing" onChange={handleChange} onBlur={handleBlur} />UI Designing
          </div>

        </div>
        <br />

        <hr />
        <br />



        <div className="option_avail">
          <input type="checkbox" name="onlyavail" id="" onChange={handleChange} onBlur={handleBlur} />Only Avalable
        </div>
        <br />

        <hr />
        <br />

        <button type='submit' className='btn' onClick={() => set_filter_state(!filter_state)}>Apply</button>

      </form>
    </>
  )
}

export default Filter