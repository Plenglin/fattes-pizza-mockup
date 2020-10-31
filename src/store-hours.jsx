import { Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import React from 'react';
import { useStyles } from './util';


const hours = [
  ['Sunday', '11am-11pm'],
  ['Monday', '11am-11pm'],
  ['Tuesday', '11am-11pm'],
  ['Wednesday', '11am-11pm'],
  ['Thursday', '11am-11pm'],
  ['Friday', '11am-Midnight'],
  ['Saturday', '11am-Midnight'],
]

export function StoreHoursTable() {
  const classes = useStyles()
  return (
    <TableContainer>
      <Table className={classes.table} size="small">
        <TableBody>
          {
            hours.map(([day, hours]) => (
              <TableRow>
                <TableCell>{day}</TableCell>
                <TableCell>{hours}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}