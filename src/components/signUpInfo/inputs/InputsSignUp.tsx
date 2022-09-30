import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { IMaskInput } from 'react-imask';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { FormHelperText } from '@mui/material';
import s from './InputsSignUp.module.css';



interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
  function TextMaskCustom(props, ref: any) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="+375(00)000-00-00"
        inputRef={ref}
        onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  },
);


const Inputs: React.FC<any> = ({formik}) =>{
  
  

  return (
  <form onSubmit={formik.handleSubmit}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1.5, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl variant="standard">
        <InputLabel htmlFor="formatted-text-mask-input">Mobile phone</InputLabel>
        <Input
        type='tel'
          error={Boolean(formik.errors.phone) && Boolean(formik.touched.phone)}
          required={true}
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="phone"
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom as any}
        />
        {formik.touched.phone&&Boolean(formik.errors.phone)&&<FormHelperText id="component-error-text" 
            sx={{
                 color: 'rgb(211,47,47)',
                }}>
            {formik.errors.phone}
        </FormHelperText>}
      </FormControl>

      <TextField
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={Boolean(formik.errors.email) && Boolean(formik.touched.email)} 
          helperText={formik.errors.email}
          id="outlined-basic" 
          label="Email" 
          variant="standard"  
          aria-describedby="component-error-text" />
      <TextField 
        name='password'
        type='password'
        value={formik.values.password}
        onChange={formik.handleChange}
        error={Boolean(formik.errors.password) && Boolean(formik.touched.password)} 
        id="outlined-basic" 
        label="Password" 
        variant="standard" 
        helperText={formik.errors.password} />
      <TextField 
        name='repeatPassword'
        type='password'
        value={formik.values.repeatPassword}
        onChange={formik.handleChange}
        error={Boolean(formik.touched.repeatPassword) && Boolean(formik.errors.repeatPassword) }
        id="outlined-basic" 
        label="Repeat Password" 
        variant="standard" />
    </Box>
    <button className={s.btn}>Next</button>
    </form>
  );
}

export default Inputs;