import React from 'react';
import s from './PersonalInfo.module.css';
import InputsPersonalInfo from './inputs/InputsPersonalInfo';


const PersonalInfo: React.FC<any> = ({formik, validationSchema, setSignUp, handleRadioButtons, setFieldValue}) => {

      return ( 
      <div className={s.wrapper}>
        <div className={s.bread_crumbs}>Home / Sign up / Personal info</div>
        <div className={s.head}>Personal info</div>
        <InputsPersonalInfo formik={formik} validationSchema={validationSchema} setSignUp={setSignUp} 
                  handleRadioButtons={handleRadioButtons}
                  setFieldValue={setFieldValue} />
      </div>
      );
    }
    
export default PersonalInfo;