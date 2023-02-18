import { Card, CardActions, CardContent,IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import React, {  useState } from 'react';
import CommonButton from '../common/commonButton/CommonButton';
import AddUserModal from '../addNewUser/AddUserModal';
import NoUsers from './NoUsers';
import UsersTable from './UsersTable';

const CardComponent = ({users,setUsers}) => {
    const [openModal, setOpenModal] = React.useState(false);
    const handleClose = () => setOpenModal(false);
    const handleOpen = () => {setOpenModal(true);};

    const [searchTerm,setSearchTerm] = useState('')
    const handleChange = ({target}) =>{
        setSearchTerm(target.value)
    }


    const filteredUsers = users.filter((user) => {return Object.values(user).toString().includes(searchTerm)})
    

    return (
        <>
            <Card>
                <CardActions>
                    <SearchIcon />
                    <InputBase
                        sx={{ ml: 1, mr: 1, flex: 1 }}
                        placeholder="Search by email address, phone number, or user UID"
                        inputProps={{ 'aria-label': 'search user' }}
                        value={searchTerm}
                        onChange={handleChange}
                    />
                    <CommonButton children={'Add User'} color={'primary'} variant={'contained'} onClick={handleOpen}/>
                    <IconButton aria-label="refresh">
                        <RefreshIcon />
                    </IconButton>
                </CardActions>
                <CardContent>
                    {users.length ? <UsersTable users={filteredUsers}/>:<NoUsers/>}
                </CardContent>
                <AddUserModal open={openModal} handleClose={handleClose} setUsers={setUsers}/>
            </Card>
        </>


    )
}

export default CardComponent