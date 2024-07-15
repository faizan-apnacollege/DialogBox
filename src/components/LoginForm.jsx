// LoginPage.js
import React from 'react';
import { Box, Button, TextField, Typography, IconButton, InputAdornment, Divider, InputLabel } from '@mui/material';
import { Google as GoogleIcon, Facebook as FacebookIcon, Visibility, VisibilityOff } from '@mui/icons-material';
import { styled } from '@mui/system';

const Container = styled(Box)({
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#f5f5f5',
    fontFamily: 'Poppins'
});

const FormContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '2rem 2rem 0rem 2rem',
    // backgroundColor: '#fff',
    borderRadius: '8px',
    // boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '570px',
    height: '100%'
});

const ImageContainer = styled(Box)({
    flex: 1,
    backgroundImage: 'url(https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: ' 0px 28px 28px 0px',
    // maxWidth: '570px',
    // marginRight: '2rem',
    height: '100%',
});

const SocialButton = styled(IconButton)({
    margin: '0.5rem 0',
});
const FormBox = styled(Box)({

    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: '0px auto'
})

const TextFieldBoth = styled(TextField)({
    padding: '20px'
})
const LoginPage = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <Container>
            <ImageContainer />
            <FormContainer>
                <Typography variant="h4" mb={2} fontSize={22} fontWeight={'bold'} align="center">
                    Login to Royal Mindfulness
                </Typography>
                <Typography variant="body1" mb={2} mt={2} fontSize={14} align="center">
                    Welcome to Royal Mindfulness!
                </Typography>
                <Box display="flex" justifyContent="center" mb={2}>
                    <SocialButton color="primary">
                        <GoogleIcon />
                    </SocialButton>
                    <SocialButton color="primary">
                        <FacebookIcon />
                    </SocialButton>
                </Box>
                <FormBox align="center">
                    {/* <Divider /> */}
                    <InputLabel align={"left"}>Email </InputLabel>
                    <TextField variant="outlined" margin="normal" placeholder='Your Email' fullWidth mb={2} />
                    <InputLabel align={"left"} >Password </InputLabel>
                    <TextField
                        sx={{ borderRadius: '8px' }}
                        placeholder='Your Password'
                        variant="outlined"
                        margin="normal"
                        type={showPassword ? 'text' : 'password'}
                        fullWidth
                        mb={2}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button variant="contained" sx={{ backgroundColor: '#00008B', borderRadius: '8px', color: '#fff', '&:hover': { backgroundColor: '#00008B' } }} fullWidth>
                        Log in
                    </Button>
                    <Typography variant="body2" mt={1} fontSize={12} align="left">
                        Don’t have an account? <a href="/signup">Sign up</a>
                    </Typography>
                </FormBox>
            </FormContainer>
        </Container>
    );
};

export default LoginPage;
