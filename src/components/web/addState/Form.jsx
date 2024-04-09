import React from 'react'
import style from '../addState/AddState.module.css'

export default function Form() {
  return (
    <div className={`container ${style.container}`}>
      <form>
        <div className="row">
        
            <div className={`col-md-6 ${style.left}`}>
            <div className="fName">
           <label className='w-25'>First Name</label>
            <input type='text' />
           </div>

            <div className="lName mt-5">
            <label className='w-25 '>Last Name</label>
            <input type='text' className='m-auto'/>
            </div>

            <div className="company mt-5">
            <label className=' w-25'>Company Information</label>
            <input type='text' className=''/>
            </div>

            <div className="address mt-5 d-flex ">
            <p className=' w-25 '>Address</p>
            <textarea type='text' className=''/>
            </div>

            <div className="city mt-5">
            <label className=' w-25'>City</label>
            <input type='text' className=''/>
            </div>

            <div className="state mt-5">
            <label className=' w-25'>State</label>
                <select className=' w-25'> 
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                </select>
            </div>

            </div>

            <div className={`col-md-6 ${style.right}`}>
            <div className="fName">
           <label className='w-25'>First Name</label>
            <input type='text' />
           </div>

           <div className="fName">
           <label className='w-25'>First Name</label>
            <input type='text' />
           </div>
            </div>

        </div>
        </form>
        
    </div>
  )
}
