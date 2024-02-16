import { useFormik } from 'formik'
import React from 'react'
import { loginSchema } from '../../../validation/Validation'
import Input from '../../shared/Input'
import style from '../login/Login.module.css'
import { Link } from 'react-router-dom'

export default function Login() {
    const initialValues=
    {
        email:'',
        password:'',
        // checkbox:'',
    }
    const onSubmit=()=>{}

    const formik=useFormik({
        initialValues,
        onSubmit,
        validationSchema:loginSchema
    })
    const inputs=[
        {
        id:'email',
        name:'email',
        title:'Email address',
        type:'email',
        className:'form-control',
        value:formik.values.email
    },
    {
        id:'password',
        name:'password',
        title:'Password',
        type:'password',
        className:'form-control',
        value:formik.values.password
    },
    // {
    //     id:'checkbox',
    //     name:'checkbox',
    //     title:'checkbox',
    //     type:'checkbox',
    //     className:'form-check-input',
    //     value:formik.values.checkbox,
    // }
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
                <img src={"../../../../img/login.png"} alt='login' className={`${style.logimg}`}/>
            </div>
            {/* <div className="col-md-1"/> */}
            <div className="col-md-5 ">

                <div className="imgLogo">
                    <img src={"../../../../img/logoLogin.png"} alt="logoLogin" className={`${style.logoLogin}`}/>
                </div>

                <div className={`${style.content}`}>
                    <h1>Login</h1>
                    <p>If you are already a member you can login with your email address and password.</p>
                </div>

                <form className="mt-3 " onSubmit={formik.handleSubmit}>
                {renderInputs}
                <button type="submit" className={`${style.btnLogin}`} disabled={!formik.isValid}>Login</button>
                </form>

                <div className={`${style.dontAcount}`}>
                    <p>Dont have an account ?<Link to={"/register"}> <span> Register here</span> </Link></p>
                </div>
            </div>
        </div>

    </div>
)
}
