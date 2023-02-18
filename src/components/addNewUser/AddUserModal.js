import { Box, Modal, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react'
import AddUserForm from './AddUserForm';

const AddUserModal = ({ handleClose, open, setUsers}) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {'Add New User'}
                </Typography>
                <Stack spacing={2}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Enter user informations then hit submit
                    </Typography>
                    <AddUserForm handleClose={handleClose} setUsers={setUsers}/>
                </Stack>
            
            </Box>
        </Modal>
    )
}

export default AddUserModal