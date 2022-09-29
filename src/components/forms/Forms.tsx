import { FormikProps, useFormik } from 'formik';
import React, { useState } from 'react';
import SignUpInfo from '../signUpInfo/SignUpInfo';
import * as yup from 'yup';
import PersonalInfo from '../personalInfo/PersonalInfo';

function calculateAge(birthday: any) {
  var ageDifMs = Date.now() - birthday;
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const validationSchemaSignUp = yup.object({
    phone: yup.string().transform((values)=> values.replace(/[.?^$[\]\\(){}|-]/gm, '')).required('Phone required').matches(/^\+375\d{9}$/, 'wrong phone'),
    email: yup.string().required('Required'),
    password: yup.string().required('Required'),
    repeatPassword: yup.string().required('Repeat password')
  })
const validationSchemaPersonalInfo = yup.object({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  date: yup.date().required(`Please enter your child's birthday/due date`)
        .test("birthday", "Only above 18", function(val: any) {
    return calculateAge(new Date(val)) > 18;
    }).test("birthday", "Only less than 90", function(val: any) {
      return calculateAge(new Date(val)) < 90;
      }),
  gender: yup.string().required('Required'),
  ocean: yup.string().required('Required'),
  hobby: yup.array().min(1, 'required')
  })

interface MyValuesSignUpForm {
    phone: string
    email: string
    password: string
    repeatPassword: string
  }

interface MyValuesPersonalInfoForm {
    firstName: string
    lastName: string
    date: string
    gender: string
    ocean: string
    hobby: any
  }
  
const Forms: React.FC = () =>{

  const [signUp, setSignUp] = useState(true);

  const formikSignUp: FormikProps<MyValuesSignUpForm> = useFormik<MyValuesSignUpForm>({
        initialValues:{
          phone: '+375',
          email: '',
          password: '',
          repeatPassword: ''
        },
        onSubmit: (values) =>{
          console.log(JSON.stringify(values))
          setSignUp(false)
        },
        validationSchema: validationSchemaSignUp
      });

  const formikPersonalInfo: FormikProps<MyValuesPersonalInfoForm> = useFormik<MyValuesPersonalInfoForm>({
        initialValues:{
          firstName: '',
          lastName: '',
          date: '',
          gender: 'male',
          ocean: '',
          hobby: []
        },
        onSubmit: (values) =>{
          console.log(JSON.stringify(values))
        },
        validationSchema: validationSchemaPersonalInfo
      });

      

    return (
    <>
        {signUp 
          ? <SignUpInfo formik={formikSignUp} validationSchema={validationSchemaSignUp} />
          : <PersonalInfo formik={formikPersonalInfo} setSignUp={setSignUp} />
        }
    </>
    )
}

export default Forms;