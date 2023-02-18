import {  TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import CommonButton from '../common/commonButton/CommonButton';

const AddUserForm = ({ handleClose, setUsers}) => {

    const [userId, setUserId] = useState('')
    const [userIdError, setUserIdError] = useState(false)
    const validateUserId = () => {
        if (userId.length < 6) {
            if (userId.length === 0) {
                setUserIdError('This Field Is Required')
                return false
            } else {
                setUserIdError('User ID Must Be At Least 6 charachters Long')
                return false
            }
        }
        return true

    }

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const validateEmail = () => {
        if (email.length === 0) {
            setEmailError('This Field Is Required')
            return false
        }
        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            setEmailError('Please Enter A Valid Email Address')
            return false
        }
        return true
    }

    const [phone, setPhone] = useState('')
    const [phoneError, setPhoneError] = useState(false)
    const validatePhone = () => {
        if (phone.length === 0) {
            setPhoneError('This Field Is Required')
            return false
        }
        if (!phone.match(/^\d{10}$/)) {
            setPhoneError('Please Enter A Valid Phone Number')
            return false
        }
        return true
    }

    const handleUserIdChange = ({ target }) => {
        setUserId(target.value)
        setUserIdError(false)
    }
    const handleEmailChange = ({ target }) => {
        setEmail(target.value)
        setEmailError(false)
    }
    const handlePhoneChange = ({ target }) => {
        setPhone(target.value)
        setPhoneError(false)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userIdValidation = validateUserId();
        const phoneValidation = validatePhone();
        const emailValidation = validateEmail();

        if (userIdValidation && phoneValidation && emailValidation) {
            setUsers((users) => {
                return [...users, { id: userId, email: email, phone: phone }]
            })
            
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={5}>
                <Stack spacing={4}>
                    <TextField id="outlined-basic" error={userIdError? true : false} helperText={userIdError} value={userId} onChange={handleUserIdChange} label="User Id" type={'tel'} variant="outlined" />
                    <TextField id="outlined-basic" error={emailError? true : false} helperText={emailError} value={email} onChange={handleEmailChange} label="Email" type={'text'} variant="outlined" />
                    <TextField id="outlined-basic" error={phoneError? true : false} helperText={phoneError} value={phone} onChange={handlePhoneChange} label="Phone" type={'tel'} variant="outlined" />
                </Stack>
                <Stack direction={'row'} justifyContent={'flex-end'}>
                    <CommonButton type={'submit'} color={'primary'} children={'Submit'} variant={'contained'} />
                    <CommonButton variant={'text'} children={'Cancel'} onClick={handleClose} />
                </Stack>
            </Stack>
        </form>
    )
}

export default AddUserForm