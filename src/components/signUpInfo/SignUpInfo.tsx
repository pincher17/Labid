import React from 'react';
import s from './SignUpInfo.module.css';
import Inputs from './inputs/Inputs';


const SignUpInfo: React.FC<any> = ({formik, validationSchema}) => {

      return ( 
      <div className={s.wrapper}>
        <div className={s.bread_crumbs}>Home / Sign up</div>
        <div className={s.head}>Sign up</div>
        <Inputs formik={formik} validationSchema={validationSchema} />
      </div>
      );
    }
    
export default SignUpInfo;