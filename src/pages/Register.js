import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
import Iconify from '../components/iconify';
// sections
import { RegisterForm } from '../sections/auth/register';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 780,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Register() {
  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <Helmet>
        <title> Login | Super hr </title>
      </Helmet>

      <StyledRoot>
        {/* <Logo
          sx={{
            position: 'fixed',
            top: { xs: 16, sm: 24, md: 40 },
            left: { xs: 16, sm: 24, md: 40 },
          }}
        /> */}

        {mdUp && (
          <StyledSection>
           {/* <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome Back
            </Typography> */} 
            
            <Stack
        className="background_sign"
          item
          xs={false}
          sm={4}
          md={7}
        >
           <div className="create-account-1 clip-contents">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/zzyymgxiw8-934%3A442?alt=media&token=d239c01c-2cac-4c73-a4de-cf7de1c4166d"
        alt="Not Found"
        className="logo_sign_login"
      />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/zzyymgxiw8-934%3A443?alt=media&token=9cd563a4-89ff-4f57-b86b-ec65d26e2f3e"
        alt="Not Found"
        className="vector-4"
      />
      <p className="welcome-to welcome_to_logo welcome_to_animated welcome_to_tada">Welcome to SUPERHR</p>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/zzyymgxiw8-934%3A445?alt=media&token=52ec71bb-d035-4a70-90a6-21ebacb32a86"
        alt="Not Found"
        className="vector-1"
      />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/zzyymgxiw8-934%3A446?alt=media&token=1e682414-293f-4b31-952a-a7fc561c08b5"
        alt="Not Found"
        className="vector-2"
      />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/zzyymgxiw8-934%3A494?alt=media&token=e3fbe841-5023-4467-8ba4-867e198c6827"
        alt="Not Found"
        className="group-5"
      />
    </div>

    {/* <img
      src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/0dl78bcba3ho-934%3A240?alt=media&token=8f234fea-860c-4afa-b11d-f7f505886d5f"
      alt="Not Found"
      className="business-man"
          /> */}
          </Stack>
          </StyledSection>
        )}

        <Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h4" gutterBottom>
            Create your new account
to start
            </Typography>

            <Typography variant="body2" sx={{ mb: 5 }}>
              Don’t have an account? {''}
              <Link variant="subtitle2">Get started</Link>
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
              </Button>

              <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="eva:facebook-fill" color="#1877F2" width={22} height={22} />
              </Button>
            </Stack>

            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                OR
              </Typography>
            </Divider>

         <RegisterForm /> 
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
