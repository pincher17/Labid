import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import s from './InputsPersonalInfo.module.css';
import { Checkbox, FormControl, FormControlLabel, FormLabel, InputLabel, ListItemText, MenuItem, OutlinedInput, Radio, RadioGroup, Select } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



const InputsPersonalInfo: React.FC<any> = ({formik, setSignUp, hobbyData, oceanData}) =>{
 
  const hobbies = hobbyData;
  const oceans = oceanData;

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

      <TextField
          name='firstName'
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={Boolean(formik.errors.firstName) && Boolean(formik.touched.firstName)} 
          helperText={formik.errors.firstName}
          id="outlined-basic" 
          label="first name" 
          variant="standard"  
          aria-describedby="component-error-text" />

      <TextField 
        name='lastName'
        value={formik.values.lastName}
        onChange={formik.handleChange}
        error={Boolean(formik.errors.lastName) && Boolean(formik.touched.lastName)} 
        id="outlined-basic" 
        label="last name" 
        variant="standard" 
        helperText={formik.errors.lastName} />

      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Sex</FormLabel>
      <RadioGroup
        value={formik.values.inCompliance}
        onChange={formik.handleChange}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="gender"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
      </FormControl>
      
      <FormControl>
      <InputLabel id="demo-simple-select-label">Your Favorite Ocean</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formik.values.inCompliance}
          onChange={formik.handleChange}
          label="Your Favorite Ocean"
          name="ocean"
        >
          {oceans.map((ocean: string)=>
            <MenuItem value={ocean}>{ocean}</MenuItem>
          )}
        </Select>
    </FormControl>

    <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Hobby</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          onChange={(hobby) => formik.setFieldValue('hobby', hobby.target.value)
          }
          value={formik.values.hobby}
          input={<OutlinedInput label="Hobby" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
          name="hobby"
        >
          {hobbies.map((hobby: string) => (
            <MenuItem key={hobby} value={hobby}>
              <Checkbox checked={formik.values.hobby.indexOf(hobby) > -1} />
              <ListItemText primary={hobby} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

<LocalizationProvider dateAdapter={AdapterDayjs}>
      
      <DatePicker
          openTo="year"
          views={['year', 'month', 'day']}
          label="Year, month and date"
          value={formik.values.date}
          onChange={(newDate) => {
           formik.setFieldValue("date", newDate)}}
          renderInput={(params) => <TextField {...params} helperText={formik.errors.date} />}
        />
      
    </LocalizationProvider>
    </Box>
    <button type='button' onClick={()=> setSignUp(true)} className={s.btn_change}>Change SignUp</button>
    <button type='submit' className={s.btn}>Complete</button>
    </form>
  );
}

export default InputsPersonalInfo;