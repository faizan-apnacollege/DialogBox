import React from 'react';
import { Box, Button, TextField, Typography, IconButton, InputAdornment, InputLabel, Link } from '@mui/material';
import { Google as GoogleIcon, Facebook as FacebookIcon, Visibility, VisibilityOff } from '@mui/icons-material';
// import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { styled } from '@mui/system';
const logo = require('../assets/dv9y2021106372021-01-304868875Royal Meditation.jpg')

const Container = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    fontFamily: 'Poppins',
});

const Header = styled(Box)({
    backgroundColor: '#00008B',
    padding: '7px',
    color: '#fff',
    textAlign: 'center',
});

const LogoImg = styled('img')({
    height: '50px',
    width: '50px',
    mixBlendMode: "multiply",
    color: 'white',
    backgroundColor: 'transparent',
    filter: 'drop-shadow(0 0 0.75rem white)'
});
const MainHeading = styled(Typography)({
    paddingTop: "10px",
    "@media (max-width:1000px)": {
        fontSize: '22px'
    }

})
const Footer = styled(Box)({
    backgroundColor: '#00008B',
    padding: '1rem',
    color: '#fff',
    textAlign: 'center',
    marginTop: 'auto',
});

const LinkBox = styled(Box)({
    fontSize: '14px',
    marginTop: '16px',
    display: 'flex',
    justifyContent: 'space-evenly',
    gap: '1rem',
    flexWrap: 'wrap',
    "@media (max-width:1000px)": {
        marginTop: '13px',
        fontSize: '13px',
        gap: '10px',
    }
})

const ButtonBox = styled(Box)({
    display: 'flex',
    justifyContent: 'space-evenly',
    gap: '1rem',
    flexWrap: 'wrap',
    paddingTop: '10px',
    "@media (max-width:1000px)": {
        paddingTop: '8px',
        gap: '10px',
    }
})
const FormWrapper = styled(Box)({
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
});

const FormContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '2rem',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '570px',
    height: '100%',
});

const ImageContainer = styled(Box)({
    flex: 1,
    backgroundImage: 'url(https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '0px 28px 28px 0px',
    height: '100%',
});

const SocialButton = styled(IconButton)({
    margin: '0.5rem 0',
});

const FormBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: '0px auto',
});

const LinkContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-evenly',
    gap: '1rem',
    flexWrap: 'wrap',
});
const IconBox = styled(Box)({
    display: 'flex',
    fontSize: '50px',
    justifyContent: 'space-evenly',
    gap: '1rem',
    flexWrap: 'wrap',
})

const SignUpForm = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <Container>
            <Header display={'flex'} justifyContent={'space-between'}>
                <Box display={'flex'}>
                    <LogoImg src='https://static.vecteezy.com/system/resources/previews/023/367/981/original/mindfulness-logo-design-embodies-the-spirit-of-calm-and-awareness-this-elegant-illustration-is-perfect-for-wellness-and-meditation-brands-vector.jpg' />
                    <MainHeading variant='h5'>Royal Mindfulness</MainHeading>
                </Box>
                <LinkBox  >
                    <Link href="/" color="inherit" underline="none">Home </Link>
                    <Link href="/" color="inherit" underline="none">Pricing_Plans </Link>
                    <Link href="/" color="inherit" underline="none">Purpuse </Link>
                    <Link href="/" color="inherit" underline="none">Founders </Link>
                    <Link href="/" color="inherit" underline="none">Session </Link>
                    <Link href="/" color="inherit" underline="none">Overview </Link>
                </LinkBox>
                <ButtonBox pt={1}>
                    <Button variant="contained" sx={{ borderRadius: '8px', backgroundColor: '#fff', color: 'black', fontSize: '12px' }}>
                        Login
                    </Button>
                    <Button variant="contained" sx={{ borderRadius: '8px', backgroundColor: '#fff', color: 'black', fontSize: '12px' }}>
                        Register
                    </Button>
                </ButtonBox>
            </Header>
            <FormWrapper>
                <ImageContainer />
                <FormContainer>
                    <Typography variant="h4" mb={1} fontSize={22} fontWeight={'bold'} align="center">
                        Login to Royal Mindfulness
                    </Typography>
                    <Typography variant="body1" mb={1} mt={2} fontSize={14} align="center">
                        Welcome to Royal Mindfulness!
                    </Typography>
                    <Box display="flex" justifyContent="center" mb={1}>
                        <SocialButton color="primary">
                            <GoogleIcon />
                        </SocialButton>
                        <SocialButton color="primary">
                            <FacebookIcon />
                        </SocialButton>
                    </Box>
                    <FormBox align="center">
                        <InputLabel align="left">Email</InputLabel>
                        <TextField variant="outlined" margin="normal" placeholder='Your Email' fullWidth mb={2} />
                        <InputLabel align="left">Password</InputLabel>
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
            </FormWrapper>
            <Footer fontSize={13} display={'flex'} justifyContent={'space-between'}>
                <LinkContainer >
                    <Link href="/" color="inherit" underline="none">About us</Link>
                    <Link href="/" color="inherit" underline="none">Contact us</Link>
                    <Link href="/" color="inherit" underline="none">FaQ's</Link>
                    <Link href="/" color="inherit" underline="none">Privacy Policy</Link>
                    <Link href="/" color="inherit" underline="none">Term & conditions</Link>
                </LinkContainer>
                <IconBox>
                    <InstagramIcon />
                    <FacebookIcon />
                    <LinkedInIcon />
                    <EmailIcon />
                </IconBox>
            </Footer>
        </Container>
    );
};

export default SignUpForm;
