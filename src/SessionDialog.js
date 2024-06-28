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
} from '@mui/material';
const config = require('./config')
const img = require('./assets/Vector 10.png')
const SessionDialog = ({ open, onClose }) => {
    const [rating, setRating] = useState(2);
    const [comments, setComments] = useState('');

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
        width: '100%',
        borderTop: '1px dotted #000',
        margin: '10px 0'
    }));

    const SubmitButtonBox = styled(Button)({
        backgroundColor: 'black',
        marginTop: '14px',
        color: 'white',
        borderRadius: '8px',
        '&:hover': {
            backgroundColor: 'darkgray',
            color: 'black'
        }
    })
    const ImageBox = styled(Box)({
        width: 100,
        height: 100,
        borderRadius: '50%',
        margin: '10px 0'

    })

    const TextFieldBox = styled(TextField)(({ theme }) => ({
        // marginTop: theme.spacing(2),
        '& .MuiInput-underline:after': {
            borderBottomColor: 'gray',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: 'lightgray',
        },
    }));

    const TrainerName = styled(Typography)({
        fontFamily: 'Poppins',
        fontSize: '24px',
        fontWeight: 600,
        lineHeight: '48px',
    })
    const DialogTitleBox = styled(DialogTitle)({
        fontFamily: 'Poppins',
        fontSize: '40px',
        fontWeight: 500,
        lineHeight: '48px'
    })
    const DivBox = styled(Box)({
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        display: "flex",
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'

    })
    const DiologBox = styled(Dialog)({
        '&. MuiDialog-paper': {
            borderRadius: '20px'

        }
    })

    return (
        <DiologBox open={open} onClose={onClose} fullWidth maxWidth="sm" >
            <DialogTitleBox align="center" variant="h4" backgroundColor='#EBDFD7' fontWeight="bold">{config.Past_sessions}</DialogTitleBox>
            <Divider fontWeight="bold" style={{
                color: "black",
                background: "black",
                width: "100%"
            }} />
            <DialogContent color="dark" style={{ padding: '0px' }}>
                <Box display="flex" flexDirection="column" alignItems="center">

                    <DivBox>
                        <TrainerName variant="h6">{config.Trainer_name}</TrainerName>
                        <ImageBox
                            component="img"
                            src={config.Img_Src}
                            alt="Trainer"
                        />
                        <Typography fontWeight="bold" variant="body1">Alex meian</Typography>
                        <Rating value={4} readOnly style={{ paddingBottom: '20px' }} />
                    </DivBox>

                    <Typography variant="subtitle1" mt={2} mb={1}><strong>Session Name:-</strong> {config.Sessions_Name}</Typography>
                    <Typography variant="subtitle1" mb={1}><strong>Date:</strong> {config.Date}</Typography>
                    <Typography variant="subtitle1" textAlign={'center'} width={'100%'}>
                        <strong>Details:</strong> {config.Details}
                    </Typography>
                    <DottedBox />


                    <Box mt={2} textAlign="center">
                        <Typography variant="subtitle1" fontSize={14}><strong>Rate this session</strong></Typography>
                        <Rating value={rating} onChange={handleRatingChange} style={{ fontFamily: "Poppins", fontSize: '20px', fontWeight: 600, lineHeight: '28px' }} />
                        <Box display='flex' alignItems={'center'} justifyItems={'center'} width='100%'
                            style={{
                                width: '498px',
                                height: '24px',
                                top: '685px',
                                left: '84px',
                                gap: '23px',
                                opacity: '0px'
                            }}
                        >
                            <Typography variant='lebel' mt={2} mr={1}>Comments:</Typography>
                            <TextFieldBox
                                id="standard-basic"
                                fullWidth
                                variant="standard"

                                value={comments}
                                onChange={handleCommentsChange}
                            // sx={{ marginTop: 2 }}

                            />
                        </Box>
                    </Box>
                </Box>
            </DialogContent>

            <DialogActions>
                <Box display="flex" justifyContent="center" width="100%">
                    <SubmitButtonBox onClick={handleSubmit}  >
                        {config.Submit_button_name}
                    </SubmitButtonBox>

                </Box>
            </DialogActions>
        </DiologBox >
    );

}





export default SessionDialog;
