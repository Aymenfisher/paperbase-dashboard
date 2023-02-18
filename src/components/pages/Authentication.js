import { Grid } from '@mui/material';
import {  useEffect, useState } from 'react';
import CardComponent from '../cardComponent/CardComponent';
import CustomizedSnackbar from '../common/snackBar/CustomizedSnackbar';
import GridWrapper from '../gridWrapper/GridWrapper';

export const Authentication = () => {
    const [users, setUsers] = useState([{
        id: 1111111,
        email: 'ggggasdq@hhhh.asdas',
        phone: 9999994999
    },
    {
        id: 1112111,
        email: '49649gg@hhhh.asdas',
        phone: 9999969999
    },
    {
        id: 1114111,
        email: 'gggg@hhhh.asdssas',
        phone: 9999979999
    },
    {
        id: 1111611,
        email: 'gggtyjg@hhhh.asdas',
        phone: 9999990999
    }])

    const [successAdd,setSuccessAdd] = useState(users.length)
    const [userAdded,setUserAdded] = useState(false)

    useEffect(()=>{
        if(users.length === successAdd){
            return
        }else{
            setUserAdded(true)
            setSuccessAdd((old) =>old+1)
        }
    },[users])
    const AuthenticationContent = () => {
        return (
            <Grid width={'100%'} maxWidth='1000px' sx={{overflow:'hidden !important'}} item>
                <CardComponent users={users} setUsers={setUsers} />
                <CustomizedSnackbar severity={'success'} message={'User Added !'} open={userAdded} setOpen={setUserAdded} />
            </Grid>
        )
    }
    return (
        <GridWrapper>
            <AuthenticationContent />
        </GridWrapper>
    )
}