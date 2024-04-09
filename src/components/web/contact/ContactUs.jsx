// import React from "react";
// import style from './Contact.module.css';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { useFormik } from 'formik';

// function ContactUs() {
//     const initdata=
//     { 
//         name : '',
//         email :'',
//         message  :''
//     }

//     const onSubmit=async contactuss=>{
//         const {data}=await axios.post("https://estatetest.onrender.com/api/sendContact",contactuss);
//         console.log(data);
//         if(data.message==='success')
//         {
//             toast.success("Contact Us Send Success");
//             formik.resetForm();
//         }
//     }

//     const formik=useFormik({
//         initialValues:initdata,
//         onSubmit,
//     });
    
//     return (
//         <div className="container">
//             <div className={`${style.bg1} row`}>
//             <h3 className="mb-3 d-flex flex-column align-items-center mt-3 text-primary">Contact Us</h3>
//                 <div className="col-md-5">
//                     <div className={`d-flex flex-column align-items-center justify-content-center ${style.p6t} pr-0`}>
//                         <p><i className="fa fa-map text-primary pb-3"></i> Jenen , Palestain</p>
//                         <p><i className="fa fa-phone text-primary"></i> +91-1234567890</p>
//                         <p><i className="fa fa-envelope text-primary"></i> aqestate@gmail.com </p>
//                     </div>
//                 </div>
//                 <div className={`w-70 rounded p-3 d-flex flex-column align-items-center col-md-7`}>
//                         <form className="w-100" onSubmit={formik.handleSubmit}>
//                             <label htmlFor="name" className="form-label"><span className="p-2">Name:</span></label>
//                             <input 
//                                 type="text" 
//                                 name="name"
//                                 className="form-control" 
//                                 value={formik.values.name} 
//                                 onChange={formik.handleChange}
                                
//                                 onBlur={formik.handleBlur}
//                                 required 
//                             /><br /><br />

//                             <label htmlFor="email" className="form-label"><span className="p-2">Email:</span></label>
//                             <input 
//                                 type="email" 
//                                 name="email"
//                                 className="form-control" 
//                                 value={formik.values.email}
//                                 onChange={formik.handleChange}
                                
//                                 onBlur={formik.handleBlur}
//                                 required 
//                             /><br /><br />

//                             <label htmlFor="message" className="form-label"><span className="p-2">Message:</span></label><br />
//                             <textarea 
//                                 className="form-control" 
//                                 name="message"
//                                 rows="4" 
//                                 value={formik.values.message} 
//                                 onChange={formik.handleChange}
//                                 onBlur={formik.handleBlur}
//                                 required
//                             ></textarea><br /><br />

//                             <button type="submit" className="btn btn-primary form-control"disabled={!formik.isValid} >Send</button>
//                         </form>
//                 </div>
//             </div>
//         </div>

//     );
// }

// export default ContactUs;
