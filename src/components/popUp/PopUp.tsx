import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useAppSelector } from '../../hook';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

interface PopUpPropsType {
  openPopUp: any;
  handleClosepopUp: any;
}

const PopUp: React.FC<PopUpPropsType> = ({openPopUp, handleClosepopUp}) => {

  const {email, mobilePhone} = useAppSelector(state => state.signUpInfoSlice)
  const {firstName, lastName, gender, hobby, ocean} = useAppSelector(state => state.personalInfo)

  return (
    <div>
      
      <BootstrapDialog
        onClose={handleClosepopUp}
        aria-labelledby="customized-dialog-title"
        open={openPopUp}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClosepopUp}>
          Modal title
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <div>Email: {email}</div>
            <div>Mobile phone: {mobilePhone}</div>
            <div>First Name: {firstName}</div>
            <div>Last Name: {lastName}</div>
            <div>Sex: {gender}</div>
            <div>Ocean: {ocean}</div>
            <div>Hobby: {hobby.map((i)=> i)}</div>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClosepopUp}>
            Ok
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export default PopUp;