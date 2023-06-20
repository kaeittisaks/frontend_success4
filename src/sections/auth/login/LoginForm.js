import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function LoginForm() {
  // const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonData = {
      email: data.get('email'),
      password: data.get('password'),
    };

    // เช็ค validate ใน TextField
    if (!jsonData.email || !jsonData.password) {
      alert('Please fill out all fields.');
      return; // ออกจากฟังก์ชัน handleSubmit และไม่ทำ fetch request
    }

    fetch('https://fragile-boa-kilt.cyclic.app/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'ok') {
          alert('Sign in successful');
          localStorage.setItem('token', data.token);
          window.location = '/dashboard/Document';
        } else {
          alert('Sign in failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <Stack  component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        
        <TextField  
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        />

        <TextField
           margin="normal"
           required
           fullWidth
           name="password"
           label="Password"
           type={showPassword ? 'text' : 'password'}
           id="password"
           autoComplete="current-password"

          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />


      

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton 
      fullWidth size="large"
      type="submit"
      variant="contained"
      sx={{ mt: 3, mb: 2, bgcolor: 'purple', borderRadius: '30px' }}
      >
        Login
      </LoadingButton>

      </Stack>
    </>
  );
}

         
         