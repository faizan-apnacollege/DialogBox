import React from 'react';
import { Box, TextField, Typography, styled, img, Avatar } from '@mui/material';
import { FaRegBell } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
const image = require('../assets/img.png')

const HeadingText = styled(Typography)({
  fontWeight: "bold", fontSize: '32px',
  "@media (max-width:600px)": {
    display: 'none'
  },
  "@media (max-width:900px)": {
    fontWeight: "bold",
    fontSize: '26px',
    marginRight: 'auto'
  },
  "@media (max-width:1000px)": {
    fontSize: '26px',
  }
})
const TexxtFieldStyles = styled(TextField)({
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'unset',
    borderWidth: 'unset',
    borderColor: 'unset',
    borderStyle: 'unset',
  },
  "@media (max-width:899px)": {
    height: '40px',
  },
  "@media (max-width:600px)": {
    width: '200px',
    margin: 'auto',
    height: '40px',
  },
  "@media (max-width:500px)": {
    width: '150px',
  }
})
const TopBox = styled(Box)({
  display: "flex",
  alignItems: 'center',
  width: "100%",
  justifyContent: 'space-between',
  padding: '10px',
  "@media (max-width:600px)": {
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingRight: '1px'
  },
  "@media (max-width:899px)": {
    alignItems: 'center',
    padding: '0px',
    justifyContent: 'end',
  }, "@media (max-width:1250px)": {
    paddingRight: '20px'
  }

})
const FirstBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 3,
  "@media (max-width:899px)": {
    alignItems: "flex"
  }
})
const SecondBox = styled(Box)({
  cursor: 'pointer',
  backgroundColor: 'white',
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '25px',
  "@media (max-width:899px)": {
    width: '35px',
    height: '35px',
  }
})
const NotificationBell = styled(FaRegBell)({
  width: '20px',
  height: '20px',
  "@media (max-width:899px)": {
    width: '15px',
    height: '15px',
  }
})
const ThirdBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor: 'white',
  alignContent: 'center',
  alignItems: 'center',
  paddingTop: '7px',
  borderRadius: '24px',
  width: '208px',
  height: '53px',
  "@media (max-width:899px)": {
    width: '178px',
    height: '35px',
    paddingTop: '5px'
  }
})
const IMG = styled(Avatar)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50px',
  height: '50px',
  borderRadius: '40px',
  marginBottom: '6px',
  "@media (max-width:899px)": {
    width: '35px',
    height: '35px',
    marginBottom: '4px',
  }
})
const Name = styled(Typography)({
  fontSize: '14px',
  fontWeight: '400',
  "@media (max-width:900px)": {
    fontSize: '12px',
    fontWeight: '400',
  }
})
const SubHeading = styled(Typography)({
  fontSize: '12px',
  opacity: '50%',
  "@media (max-width:900px)": {
    fontSize: '10px',
    opacity: '40%',
  }
})
function Header() {
  return (
    <TopBox >
      <HeadingText variant='h4'>
        Dashboard
      </HeadingText>
      <FirstBox>
        <Box>
          <TexxtFieldStyles
            placeholder='Search for anything......'
            variant='outlined'
            sx={{
              backgroundColor: 'white',
              borderRadius: '20px',
              height: '50px',
              backgroundColor: 'white',
            }}
          /></Box>
        <SecondBox ><NotificationBell /></SecondBox>
        <ThirdBox >
          <IMG className='header-profile' src={image} alt='img' />
          <Box>
            <Name>Alex Meian</Name>
            <SubHeading sx={{

            }}>Product Manager</SubHeading>
          </Box>
          <FaAngleDown style={{
            cursor: 'pointer',
            opacity: '50%',
            paddingRight: '10px'
          }} />
        </ThirdBox>
      </FirstBox>
    </TopBox>
  );
}

export default Header;
