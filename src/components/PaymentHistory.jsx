import React from 'react';
import { Card, Typography, List, ListItem, ListItemText, Box, CardContent, Divider, styled } from '@mui/material';
// import { LuFilter } from "react-icons/lu";
import { FaFilter } from "react-icons/fa";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from '@mui/material/Link'

const MainCard = styled(Card)({
    width: '312px',
    padding: '2px',
    borderRadius: '20px',
    margin: '2px 0px 6px 14px',
    "@media (max-width:900px)": {
        width: '270px',
        margin: '0px',
        borderRadius: '18px',
        padding: '0px 0px',
        height: 'auto',
        marginLeft: "-6px"
    },
    "@media (max-width:1240px)": {
        width: '290px',
        // marginTop: "-10px"
    }
})
const PaymentText = styled(Typography)({
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: 600,
    "@media (max-width:900px)": {
        fontSize: '14px',
        fontWeight: 500,
    }
})
const FilterText = styled(Typography)({
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '16px',
    float: 'right',
    cursor: 'pointer',
    "@media (max-width:900px)": {
        fontSize: '11px',
        fontWeight: 450,
        lineHeight: '15px',
    }
})
const SortByDateBox = styled(Box)({
    display: 'flex',
    marginTop: '20px'
})
const SortByText = styled(Typography)({
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '16px',
})
const FilterIcon = styled(FaFilter)({
    height: '16px',
    float: 'right',
    marginTop: '0px',
    fontSize: '12px',
    marginRight: '4px',
    cursor: 'pointer',
    "@media (max-width:900px)": {
        height: '14px',
    }
})
const DividerLine = styled(Divider)({
    width: '100%',
    height: '5px',
    marginTop: '4px',
    "@media (max-width:900px)": {
        height: '4px',
        marginTop: '2px',
    }
})
const DateText = styled(Typography)({
    fontSize: '16px',
    marginBottom: '0px',
    "@media (max-width:900px)": {
        fontSize: '14px',
    }
})
const TypoText = styled(Typography)({
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '13.92px',
    textAlign: 'center',
    "@media (max-width:900px)": {
        fontSize: '11px',
        fontWeight: 350,
        lineHeight: '12.92px',

    }
})
const LinkButton = styled(Link)({
    float: 'inline-end',
    padding: '0px 0px 0px 40px',
    width: '500px',
    textDecoration: 'none',
    fontSize: '14px',
    cursor: 'pointer',
    "@media (max-width:900px)": {
        width: '450px',
        padding: '0px 0px 0px 0px',
        fontSize: '13px',
    },
    "@media (max-width:1250px)": {
        padding: '0px 10px 0px 0px',
    }
})
const PaymentHistory = () => {
    return (
        <MainCard >
            <CardContent>
                <Box>
                    <PaymentText>Payment History List</PaymentText>
                </Box>
                <SortByDateBox>
                    <SortByText >Sort By : Dates</SortByText>
                    <KeyboardArrowDownIcon style={{ width: '16px', height: '16px', cursor: 'pointer' }} />
                </SortByDateBox>
                <Box>
                    <FilterText>Filter</FilterText>
                    <FilterIcon />
                </Box>
            </CardContent>
            <DividerLine color='#E5E7EB' />
            <CardContent style={{ float: 'left', margin: '0px', padding: '0px' }}>
                <List>
                    <ListItem>
                        <ListItemText
                            // primary="2024-06-24"
                            secondary={
                                <>
                                    <DateText >2024-06-24</DateText>
                                    <TypoText component="span" variant="body2" color="text.primary">
                                        Amount: $50.00
                                    </TypoText>
                                    <br />
                                    <TypoText component="span" variant="body2" color="text.primary">
                                        Payment Method: Credit Card
                                    </TypoText>
                                    <br />
                                    <TypoText component="span" variant="body2" color="text.primary">
                                        Transaction ID: TX123456
                                    </TypoText>
                                    <br />
                                    <TypoText component="span" variant="body2" color="green">
                                        Status: Successful
                                    </TypoText>
                                </>
                            }
                        />
                    </ListItem>
                </List>
            </CardContent>
            <DividerLine color='#E5E7EB' />
            <CardContent style={{ float: 'left', margin: '0px', padding: '0px' }}>
                <List>
                    <ListItem>
                        <ListItemText
                            secondary={
                                <>
                                    <DateText >2024-06-24</DateText>
                                    <TypoText component="span" variant="body2" color="text.primary">
                                        Amount: $50.00
                                    </TypoText>
                                    <br />
                                    <TypoText component="span" variant="body2" color="text.primary">
                                        Payment Method: Credit Card
                                    </TypoText>
                                    <br />
                                    <TypoText component="span" variant="body2" color="text.primary">
                                        Transaction ID: TX123456
                                    </TypoText>
                                    <br />
                                    <TypoText component="span" variant="body2" color="green">
                                        Status: Successful
                                    </TypoText>
                                </>
                            }
                        />
                    </ListItem>
                </List>
                <LinkButton
                    component="button"
                    variant="body2"
                >
                    View List
                </LinkButton>
            </CardContent>
        </MainCard >
    );
};

export default PaymentHistory;
