import React from 'react';
import { Card, CardContent, Typography, Box, styled, Avatar } from '@mui/material';
import { FaRegEdit } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";

const img = require('../assets/img.png');

const MainCard = styled(Card)({
    margin: '2px 0px 6px 20px',
    borderRadius: '20px',
    width: '318px',
    "@media (max-width:900px)": {
        width: '270px',
        margin: '1px 0px 4px 0px',
        borderRadius: '18px',
    },
    "@media (max-width:1240px)": {
        width: '290px',
    }
})

const IMGBox = styled(Avatar)({
    width: '84px',
    height: '84px',
    borderRadius: '50px',
    "@media (max-width:900px)": {
        width: '70px',
        height: '70px',
        borderRadius: '40px',
    },

})
const FirstBox = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between'
})
const ProfileName = styled(Typography)({
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontWeight: 700,
    marginTop: '20px',
    "@media (max-width:1000px)": {
        fontSize: '13px',
        fontWeight: 600,
        marginTop: '18px',
    },
    "@media (max-width:1100px)": {
        marginTop: '10px',
    },
    "@media (max-width:1250px)": {
        marginTop: '10px',
    }

})
const SubHeading = styled(Typography)({
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '18px',
    "@media (max-width:1000px)": {
        fontSize: '11px',
        fontWeight: 300,
        lineHeight: '14px',
    }
})
const EmailInfoBox = styled(Box)({
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
})
const InfoContent = styled(Typography)({
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '16px',
    "@media (max-width:900px)": {
        fontSize: '11px',
        fontWeight: 350,
        lineHeight: '12px',
    }
})
const PhoneBox = styled(Box)({
    gap: '8px',
    marginTop: '10px',
    display: 'flex'
})
const AddressBox = styled(Box)({
    marginTop: '10px',
    display: 'flex',
    gap: '8px'
})
const Profile = () => {
    return (
        <MainCard>
            <CardContent>
                <FirstBox>
                    <IMGBox src={img} alt="Profile" />
                    <Box>
                        <ProfileName variant="h6"><b>Alex Meian</b></ProfileName>
                        <SubHeading>Product Manager</SubHeading>
                    </Box>
                    <Box>
                        <FaRegEdit cursor='pointer' size={22} />
                    </Box>
                </FirstBox>
                <EmailInfoBox>
                    <IoMailOutline style={{ width: '16px', height: '16px' }} />
                    <InfoContent>Email: john.doe@example.com</InfoContent>
                </EmailInfoBox>
                <PhoneBox>
                    <MdPhone style={{ width: '16px', height: '16px' }} />
                    <InfoContent>Phone: (123) 456-7890</InfoContent>
                </PhoneBox>
                <AddressBox>
                    <AiOutlineHome style={{ width: '16px', height: '16px' }} />
                    <InfoContent
                    >Address: 123 Main Street, Apt 4B, Springfield, IL 62701</InfoContent>
                </AddressBox>
            </CardContent>
        </MainCard >
    );
};
export default Profile;
