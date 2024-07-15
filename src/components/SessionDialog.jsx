import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
    TextField,
    Button,
    Box,
    Rating,
    Divider,
    useMediaQuery,
    useTheme
} from '@mui/material';
const config = require('./config');
const img = require('./assets/Vector 10.png');

const SessionDialog = ({ open, onClose }) => {
    const [rating, setRating] = useState(2);
    const [comments, setComments] = useState('');

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleRatingChange = (event, newValue) => {
        setRating(newValue);
    };

    const handleCommentsChange = (event) => {
        setComments(event.target.value);
    };

    const handleSubmit = () => {
        console.log({ rating, comments });
        onClose();
    };

    const DottedBox = styled(Box)(({ theme }) => ({
        width: '94%',
        borderTop: '1px dotted #000',
        margin: '10px 0',
        left: '28px'
    }));

    const SubmitButtonBox = styled(Button)({
        backgroundColor: 'black',
        marginTop: '14px',
        color: 'white',
        borderRadius: '8px',
        '&:hover': {
            backgroundColor: 'darkgray',
            color: 'black',
        },
    });

    const ImageBox = styled(Box)({
        width: isSmallScreen ? 60 : 100,
        height: isSmallScreen ? 60 : 100,
        borderRadius: '50%',
        margin: '4px 0',
    });

    const TextFieldBox = styled(TextField)(({ theme }) => ({
        '& .MuiInput-underline:after': {
            borderBottomColor: 'gray',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: 'lightgray',
        },
    }));

    const TrainerName = styled(Typography)({
        fontFamily: 'Poppins',
        fontSize: isSmallScreen ? '18px' : '22px',
        fontWeight: 600,
        lineHeight: '48px',
    });
    const DiologContentBox = styled(DialogContent)({
        '&.MuiDialogContent-root': {
            overflowY: 'unset'
        }
    })

    const DialogTitleBox = styled(DialogTitle)({
        fontFamily: 'Poppins',
        fontSize: isSmallScreen ? '28px' : '32px',
        fontWeight: 500,
        lineHeight: '48px',
        padding: '10px'
    });

    const DivBox = styled(Box)({
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
       
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        display: "flex",
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    });

    const DiologBox = styled(Dialog)({
        color: "#FFFFFF",
        borderRadius: '20px',
        '&.MuiDialog-paper': {
            borderRadius: '20px',
        }
    });

    return (
        <DiologBox open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitleBox align="center" variant="h4" backgroundColor='#EBDFD7' fontWeight="bold">{config.Past_sessions}</DialogTitleBox>
            <Divider style={{ color: "black", background: "black", width: "100%" }} />
            <DiologContentBox color="dark" style={{ padding: '0px' }}>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <DivBox>
                        <TrainerName variant="h6">{config.Trainer_name}</TrainerName>
                        <ImageBox
                            component="img"
                            src={config.Img_Src}
                            alt="Trainer"
                        />
                        <Typography fontWeight="bold" variant="body1">Alex Meian</Typography>
                        <Rating value={4} readOnly style={{ paddingBottom: '20px' }} />
                    </DivBox>
                    <Box style={{ textAlign: "center", justifyContent: "center", alignItems: "center", gap: "20px", left: '96px', maxWidth: '501px', height: '136px' }}>
                        <Typography variant="subtitle1" mt={2} mb={1}><strong>Session Name:</strong> {config.Sessions_Name}</Typography>
                        <Typography variant="subtitle1" mb={1}><strong>Date:</strong> {config.Date}</Typography>
                        <Typography variant="subtitle1" textAlign={'center'} width={'100%'}>
                            <strong>Details:</strong> {config.Details}
                        </Typography>
                    </Box>
                    <DottedBox />
                    <Box mt={2} textAlign="center" style={{ marginTop: '0px' }}>
                        <Typography variant="subtitle1" fontSize={16} fontWeight={600} style={{ fontFamily: "Poppins" }}>Rate this session</Typography>
                        <Rating value={rating} onChange={handleRatingChange} style={{ fontFamily: "Poppins", fontSize: '20px', fontWeight: 600, gap: '6px', lineHeight: '28px' }} />
                        <Box display='flex' style={{ gap: '10px', width: isSmallScreen ? '100%' : '500px', justifyItems: 'center', alignItems: 'center' }}>
                            <Typography variant='label' mt={2} mr={1}>Comments:</Typography>
                            <TextFieldBox
                                id="standard-basic"
                                fullWidth
                                variant="standard"
                                value={comments}
                                onChange={handleCommentsChange}
                            />
                        </Box>
                    </Box>
                </Box>
            </DiologContentBox>
            <DialogActions>
                <Box display="flex" justifyContent="center" width="100%">
                    <SubmitButtonBox onClick={handleSubmit}>
                        {config.Submit_button_name}
                    </SubmitButtonBox>
                </Box>
            </DialogActions>
        </DiologBox>
    );
}

export default SessionDialog;



