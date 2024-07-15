import React from 'react';
import { Grid, Box, styled } from '@mui/material';
import Sidebar from './Sidebar';
import CalendarComponent from '../components/Calendar';
import Profile from './Profile';
import PaymentHistory from './PaymentHistory';
import TopPerformers from './TopPerformers';
import UserBatchPerformance from './UserBatchPerformance';
import Header from './Header';
import { Padding } from '@mui/icons-material';


const CalenderMain = styled(Box)({
    "@media (max-width:1199px)": {
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        // marginLeft: '120px'
    }
})

const GridContainer = styled(Grid)({
    "@media (max-width:1050px)": {
        paddingLeft: '1px',
        paddingTop: '0px',

    }
})
const Profile_Payment_Grid = styled(Grid)({
    "@media (max-width:1270px)": {
        // marginLeft: '-10px'
        marginRLeft: 'auto',
        // justifyContent: 'center',

    },
    "@media (max-width:1199px)": {
        display: 'flex',
        justifyContent: 'center'
    }
})
const BoxGrid = styled(Grid)({
    "@media (max-widt:1199px)": {
        PaddingBottom: '0px'
    },
    "@media (max-widt:899px)": {
        marginLeft: '4px'
    }

})

const Dashboard = () => {
    return (
        // <Container sx={{}}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={2}>
                <Sidebar />
            </Grid>
            <GridContainer item xs={12} md={10} sm={12} >
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <Header />
                </Box>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={12} sm={12} lg={8}>
                        <CalenderMain > {/* Adjust height as needed */}
                            <CalendarComponent />
                        </CalenderMain>
                    </Grid>
                    <Profile_Payment_Grid item xs={12} md={12} lg={4} sm={12} style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        <Profile />
                        <Box mt={2} ml={1} style={{ marginTop: '0px' }}>
                            <PaymentHistory />
                        </Box>
                    </Profile_Payment_Grid>
                </Grid>

                <BoxGrid container spacing={2} mt={2} md={12} sm={12} lg={12} sx={{ backgroundColor: '#ebdfd7' }} >
                    <Grid item xs={12} md={12} lg={6}>
                        <TopPerformers />
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                        <UserBatchPerformance />
                    </Grid>
                </BoxGrid>
            </GridContainer>
        </Grid>
        // </Container>
    );
};

export default Dashboard;








