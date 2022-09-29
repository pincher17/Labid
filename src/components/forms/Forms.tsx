import { FormikProps, useFormik } from 'formik';
import React, { useState } from 'react';
import SignUpInfo from '../signUpInfo/SignUpInfo';
import * as yup from 'yup';
import PersonalInfo from '../personalInfo/PersonalInfo';
import data from '../../JSONSchema/schema.json'
import { useAppDispatch } from '../../hook';
import { setSignUpInfo } from '../../store/signUpInfoSlice';
import { setPersonalInfo } from '../../store/personalInfoSlice';



const {firstName, lastName, mobilePhone, password, email, birthday, hobby, ocean} = data;

const hobbyData = hobby.anyOf
const oceanData = ocean.oneOf

const regExpEmail = new RegExp(email.regExp)
const regExpPhone = new RegExp(mobilePhone.regExp)

function calculateAge(birthday: any) {
  var ageDifMs = Date.now() - birthday;
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const validationSchemaSignUp = yup.object({
    phone: yup.string().transform((values)=> values.replace(/[.?^$[\]\\(){}|-]/gm, '')).required('Phone required').matches(regExpPhone, 'wrong phone'),
    email: yup.string().required('Required').matches(regExpEmail, 'wrong phone'),
    password: yup.string().required('Required').min(Number(password.minLength)).max(Number(password.maxLength)),
    repeatPassword: yup.string().required('Repeat password')
  })
const validationSchemaPersonalInfo = yup.object({
  firstName: yup.string().required('Required').min(Number(firstName.minLength)).max(Number(firstName.maxLength)),
  lastName: yup.string().required('Required').min(Number(lastName.minLength)).max(Number(lastName.maxLength)),
  date: yup.date().required(`Please enter your child's birthday/due date`)
        .test("birthday", "Only above 18", function(val: any) {
    return calculateAge(new Date(val)) > Number(birthday.minAge);
    }).test("birthday", "Only less than 90", function(val: any) {
      return calculateAge(new Date(val)) < Number(birthday.maxAge);
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
    hobby: Array<string>
  }
  
const Forms: React.FC = () =>{

  const [openPopUp, setOpenPopUp] = React.useState(false);

  const handleClickOpenPopUp = () => {
    setOpenPopUp(true);
  };
  const handleClosepopUp = () => {
    setOpenPopUp(false);
  };

  const dispatch = useAppDispatch()
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
          dispatch(setSignUpInfo(values))
        },
        validationSchema: validationSchemaSignUp
      });

  const formikPersonalInfo: FormikProps<MyValuesPersonalInfoForm> = useFormik<MyValuesPersonalInfoForm>({
        initialValues:{
          firstName: '',
          lastName: '',
          date: '',
          gender: '',
          ocean: '',
          hobby: []
        },
        onSubmit: (values) =>{
          console.log(JSON.stringify(values))
          dispatch(setPersonalInfo(values))
          handleClickOpenPopUp()
        },
        validationSchema: validationSchemaPersonalInfo
      });

      

    return (
    <>
        {signUp 
          ? <SignUpInfo formik={formikSignUp} />
          : <PersonalInfo formik={formikPersonalInfo} setSignUp={setSignUp} 
                          hobbyData={hobbyData} oceanData={oceanData}
                          openPopUp={openPopUp} handleClosepopUp={handleClosepopUp} />
        }
    </>
    )
}

export default Forms;