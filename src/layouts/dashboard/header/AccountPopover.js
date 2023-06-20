import React ,{useEffect,useState} from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton, Popover } from '@mui/material';
// mocks_
import account from '../../../aaaa/account';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: 'eva:home-fill',
  },
  {
    label: 'Profile',
    icon: 'eva:person-fill',
  },
  {
    label: 'Settings',
    icon: 'eva:settings-2-fill',
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };


 // new
 
 const [email, setEmail] = useState('');
  
 useEffect (()=>{
   const token = localStorage.getItem('token')
   fetch('http://localhost:3333/authen', {
     method: 'POST', // or 'PUT'
     headers: {
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${token}`

     }
   })
   .then(response => response.json())
   .then(data => {
   if (data.status === 'ok'){
     setEmail(data.decoded.email); // อัพเดตค่า email ดึงจาก decoded
     // alert('authen sccess')
   }else {
     alert('authen failed')
     localStorage.removeItem('token');
     window.location ='/login'
   }

   })
   .catch((error) => {
     console.error('Error:', error);
   });
 }, [])


 const handlelogout = (event) => {
   event.preventDefault();
   localStorage.removeItem('token');
   window.location = '/login'
 }


  return (
    <>
     <IconButton onClick={handleOpen}  className="account_logo account_animated account_tada">
      <IconButton
     
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/zeqox72z0pb-70%3A2241?alt=media&token=c289f432-80f1-4099-99e5-aca57745d683" alt="photoURL" />
      </IconButton>

      
      <p className="User-account">{email}</p>
      
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
          {email}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} onClick={handleClose}>
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={handlelogout}  sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </Popover>
      
    </>
  );
}
