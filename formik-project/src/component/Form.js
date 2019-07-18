import React from 'react'
import { withFormik, Form, Field } from "formik";
// import { Checkbox } from 'semantic-ui-react'
import styled from 'styled-components';



import * as Yup from "yup";
import axios from 'axios'

import './form.css'


const CheckBox = styled.span`
/* opacity: 0; */
font-size: 2rem;
`


const FormCom = ({touched, errors, values, isSubmitting}) => {

    return(
        <div>
            <Form className="login-form">

                <div className="form-group">
                    <label htmlFor="username">First Name</label>
                    <Field 
                    type='text'
                    name='name'
                    placeholder='name'
                    className={errors.name ? "invalid" : ""}
                    />
                    <p className="error-text">{touched.name && errors.name}</p>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Last Name</label>
                    <Field 
                    type='text'
                    name='email'
                    placeholder='email'
                    className={errors.email ? "invalid" : ""}
                    />

                    <p className="error-text">{touched.email && errors.email}</p>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Last Name</label>
                    <Field 
                    type='password'
                    name='password'
                    placeholder='password'
                    className={errors.password ? "invalid" : ""}
                    />
                    <p className="error-text">{touched.password && errors.password}</p>
                </div>

                <div> 
                    <div onClick='' class="checkbox-custom circular">
                        <CheckBox>
                            <Field
                            type='checkbox'
                            name='checkbox'
                            checked={values.checkbox}
                            />
                        </CheckBox>
                    </div>
                    
                    <p className="error-text">{touched.checkbox && errors.checkbox}</p>
                </div>

                {/* <button>Submit!</button> */}


                {isSubmitting && <p>Loading...</p>}
                <button className="submit-button" disabled={isSubmitting}>
                    Submit &rarr;
                </button>

            </Form>

        </div>
    )
}


const FormikFormCom = withFormik({

    mapPropsToValues(){
        return{
            name: '',
            email: '',
            password: '',
            checkbox: false
        };
    },


    handleSubmit(values, formikBag){
        
        console.log(values)
        
        axios
        .post("https://reqres.in/api/users", values)
        .then(res => {
            console.log(res)
            formikBag.resetForm()
            window.alert(
                `Congrats ${res.data.name}, you've filled out 
                a basic form that will send your information
                to the nearest black maket. No really, 
                congrats ${res.data.email}...` 
              );
        })
        
    },


    validationSchema: Yup.object().shape({

        name: Yup.string().min(5, 'Must be Five or more figures').required('Name must be entered'),
        email: Yup.string().email('Please add real email').required('Yo, put this in bro..'),
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