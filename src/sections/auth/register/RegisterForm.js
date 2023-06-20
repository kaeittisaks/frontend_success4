import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function Register() {
  // const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // Check if any of the fields are empty
    if (
      !data.get('email') ||
      !data.get('password') ||
      !data.get('firstname') ||
      !data.get('lastname')
    ) {
      alert('Please fill in all the fields');
      return;
    }

    const jsonData = {
      email: data.get('email'),
      password: data.get('password'),
      fname: data.get('firstname'),
      lname: data.get('lastname'),
    };

    fetch('https://fragile-boa-kilt.cyclic.app/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'ok') {
          alert('Registration successful');
          window.location = '/login';
        } else {
          alert('Registration failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
                name="firstname"
                label="FirstName"
                type="text"
                id="firstname"
                autoComplete="firstName"
        />

<TextField  
       margin="normal"
       required
       fullWidth
       name="lastname"
       label="LastName"
       type="text"
       id="lastname"
       autoComplete="lastName"
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
        Sign Up
      </LoadingButton>

      </Stack>
    </>
  );
}

         
         