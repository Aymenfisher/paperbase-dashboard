import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow,Paper } from '@mui/material';
import React from 'react'

const UsersTable = ({users}) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ width:'100%' }} aria-label="users table">
                <TableHead>
                    <TableRow>
                        <TableCell>User ID</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Phone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow
                            key={user.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {user.id}
                            </TableCell>
                            <TableCell align="center">{user.email}</TableCell>
                            <TableCell align="center">{user.phone}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UsersTable