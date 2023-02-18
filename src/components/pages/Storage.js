import { useEffect, useState } from 'react';
import BasicDataGrid from '../common/datagrid/BasicDataGrid';
import CustomizedSnackbar from '../common/snackBar/CustomizedSnackbar';
import GridWrapper from '../gridWrapper/GridWrapper';

export const Storage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [comments, setComments] = useState([])


    const columns = [
    { field: 'id', headerName: 'ID', editable: false,minWidth:200 },
    { field: 'postId', headerName: 'POST ID', editable: true,minWidth:200 },
    { field: 'name', headerName: 'Name', editable: true,minWidth:200 },
    { field: 'email', headerName: 'E-MAIL', editable: true,minWidth:200 },
    { field: 'body', headerName: 'BODY', editable: true,minWidth:200 }
    ]



    useEffect(() => {
        const fetchComments = async () => {
            try {
                const comments = await fetch('https://jsonplaceholder.typicode.com/comments');
                if (comments.ok) {
                    const jsonComments = await comments.json()
                    setComments(jsonComments)
                    setError(false)
                    setIsLoading(false)
                    return
                }
                setError(true)
            } catch (err) {
                setError(true)
            }
        }
        fetchComments()

    }, [])

    return (
        <GridWrapper>
            <BasicDataGrid sx={{ backgroundColor: 'white !important' }} loading={isLoading} columns={columns} rows={comments}/>
            <CustomizedSnackbar severity={'error'} message={'There was and Error while loading Users!'} open={error} setOpen={setError} />
        </GridWrapper>
    )
}