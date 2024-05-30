import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../redux/movieSlice';
import VideoBackground from './VideoBackground';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';

const MovieDialog = () => {
    const { open, id } = useSelector(store => store.movie);
    console.log(id);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(setOpen(false));
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullScreen
        >
            <DialogContent className="p-0 m-0" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <DialogContentText id="alert-dialog-description" component="div" className="p-0 m-0" style={{ width: '100%', height: '100%' }}>
                    <VideoBackground movieId={id} bool={true} />
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default MovieDialog;
