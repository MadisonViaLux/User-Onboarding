import React from 'react'
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios'





const FormCom = () => {

    return(
        <div>
            <Form>
                <Field 
                type='text'
                name='name'
                placeholder='name'
                />

                <Field 
                type='text'
                name='email'
                placeholder='email'
                />

                <Field 
                type='text'
                name='password'
                placeholder='password'
                />

                <Field
                type='checkbox'
                name='checkbox'
                />

                <button>Submit!</button>
            </Form>

        </div>
    )
}


const FormikFormCom = withFormik({

    mapPropsToValues({name, email, password}){
        return{
            name: '',
            email: '',
            password: '',
            checkbox: false
        };
    },

    validationSchema: Yup.object().shape({

        name: Yup.string().min(5, 'Must be Five or more figures').required('Name must be entered'),
        email: Yup.string().email('Please add real email').required('Yo put this in bro..'),
        password: Yup.string().min(8, 'Password must be 8 figures or more').max(125, 'stop..').required('Password must be entered'),
        checkbox: Yup.boolean().oneOf([true], 'Please Check').required()
    })
})(FormCom)


export default FormikFormCom;











// validationSchema: Yup.object().shape({
//     firstName: Yup.string()
//       .min(
//         3,
//         "First Name should be at least 5 characters long"
//       )
//       .max(10)
//       .required("First Name is required"),
//     lastName: Yup.string()
//       .min(3)
//       .max(10)
//       .required()
//   })