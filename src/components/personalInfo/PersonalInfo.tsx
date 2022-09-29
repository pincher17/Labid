import React from 'react';
import s from './PersonalInfo.module.css';
import InputsPersonalInfo from './inputs/InputsPersonalInfo';
import PopUp from '../popUp/PopUp';


const PersonalInfo: React.FC<any> = ({formik, setSignUp, oceanData, hobbyData, openPopUp, handleClosepopUp}) => {



      return ( 
      <div className={s.wrapper}>
        <div className={s.bread_crumbs}>Home / Sign up / Personal info</div>
        <div className={s.head}>Personal info</div>
        <InputsPersonalInfo formik={formik} setSignUp={setSignUp}
                  hobbyData={hobbyData}
                  oceanData={oceanData}
                   />
        <PopUp openPopUp={openPopUp} handleClosepopUp={handleClosepopUp} />
      </div>
      );
    }
    
export default PersonalInfo;