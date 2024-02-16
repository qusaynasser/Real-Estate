import { useFormik } from 'formik'
import React from 'react'
import { registerSchema } from '../../../validation/Validation'
import Input from '../../shared/Input'
import style from '../login/Login.module.css'
import { Link } from 'react-router-dom'

export default function Register() {
    const initialValues=
    {
        firstName:'',
        lastName:'',
        email:'',
        city:'',
        password:'',
    }
    const onSubmit=()=>{}

    const formik=useFormik({
        initialValues,
        onSubmit,
        validationSchema:registerSchema
    })

    const inputs=[
    {
      id:'firstName',
      name:'firstName',
      title:'First Name',
      className:'form-control',
      type:'text',
      value:formik.values.firstName,
    },
    {
      id:'lastName',
      name:'lastName',
      title:'Last Name',
      className:'form-control',
      type:'text',
      value:formik.values.lastName,
    },
    {
    id:'email',
    name:'email',
    title:'Email address',
    type:'email',
    className:'form-control',
    value:formik.values.email
    },
    {
      id:'city',
      name:'city',
      title:'City',
      className:'form-control',
      type:'text',
      value:formik.values.city,
    },
    {
    id:'password',
    name:'password',
    title:'Password',
    type:'password',
    className:'form-control',
    value:formik.values.password
    },
    
    ]

    const renderInputs=inputs.map((input,index)=>{
        return (
        <Input type={input.type} 
        id={input.id}
        name={input.name}
        title={input.title}
        className={input.className}
        value={input.value}
        onChange={formik.handleChange}
        errors={formik.errors}
        touched={formik.touched}
        onBlur={formik.handleBlur}
        key={index}/>
        )
    })
return (
    <div className='container'>
        <div className="row">
            <div className="col-md-7">
                <img src={"../../../../img/login.png"} alt='register' className={`${style.logimg}`}/>
            </div>
            {/* <div className="col-md-1"/> */}
            <div className="col-md-5 ">

                <div className="imgLogo">
                    <img src={"../../../../img/logoLogin.png"} alt="logoLogin" className={`${style.logoLogin}`}/>
                </div>

                <div className={`${style.content}`}>
                    <h1>Register</h1>
                    <p>Become a member.</p>
                </div>

                <form className="mt-3 " onSubmit={formik.handleSubmit}>
                {renderInputs}
                <button type="submit" className={`${style.btnLogin}`} disabled={!formik.isValid}>Login</button>
                </form>
            </div>
        </div>

    </div>
)
}
