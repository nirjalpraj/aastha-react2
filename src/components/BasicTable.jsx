
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { Button } from '@mui/material';


export default function BasicTable({arr}) {
  console.log(arr);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Download</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {arr.map((row) => (
            <TableRow
              key={row.headline}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.headline}
              </TableCell>
              <TableCell align="right">{row.uploadDate}</TableCell>
              <TableCell align="right"> <Button> <DownloadForOfflineIcon/> </Button> </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
