import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { styled } from '@mui/system';

const CustomTableContainer = styled(TableContainer)({
  '& table': {
    minWidth: 650,
  },
});

const CustomTableCell = styled(TableCell)({
  fontWeight: 'bold', 
});



const DataTable = ({ data }) => {
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (field) => {
    if (field === sortField) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortField] < b[sortField] ? -1 : 1;
    } else {
      return a[sortField] < b[sortField] ? 1 : -1;
    }
  });

  const renderSortIcons = (field) => {
    return (
      <>
        {sortField === field && sortOrder === 'asc' && <ArrowUpwardIcon />}
        {sortField === field && sortOrder === 'desc' && <ArrowDownwardIcon />}
      </>
    );
  };

  const totalClicks = data.reduce((total, table) => total + table.Clicks, 0);
 
  const totalCost = data.reduce((total, item) => {
    const costStr = item.Cost.replace('USD ', '').replace(',', '');
    const cost = parseFloat(costStr);
    return total + cost;
  }, 0);

  const totalConversions = data.reduce((total, table) => total + table.Conversions, 0);
 
  const totalRevenue = data.reduce((total, item) => {
    const revenueStr = item.Revenue.replace('USD ', '').replace(',', '');
    const revenue = parseFloat(revenueStr);
    return total + revenue;
  }, 0);

  return (
    <CustomTableContainer component={Paper} className>
      <Table>
        <TableHead>
          <TableRow>           
            <CustomTableCell>Ads Insights</CustomTableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <CustomTableCell onClick={() => handleSort('Campaigns')}>
              Campaigns {renderSortIcons('Campaigns')}
            </CustomTableCell>
            <CustomTableCell onClick={() => handleSort('Clicks')}>
              Clicks {renderSortIcons('Clicks')}
            </CustomTableCell>
            <CustomTableCell onClick={() => handleSort('Cost')}>
              Cost {renderSortIcons('Cost')}
            </CustomTableCell>
            <CustomTableCell onClick={() => handleSort('Conversions')}>
              Conversions {renderSortIcons('Conversions')}
            </CustomTableCell>
            <CustomTableCell onClick={() => handleSort('Revenue')}>
              Revenue {renderSortIcons('Revenue')}
            </CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((table, index) => (
            <TableRow key={index}>
              <TableCell>{table.Campaigns}</TableCell>
              <TableCell>{table.Clicks}</TableCell>
              <TableCell>{table.Cost}</TableCell>
              <TableCell>{table.Conversions}</TableCell>
              <TableCell>{table.Revenue}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <CustomTableCell>Total:</CustomTableCell>
            <CustomTableCell>{totalClicks}</CustomTableCell>
            <CustomTableCell>USD {totalCost}</CustomTableCell>
            <CustomTableCell>{totalConversions}</CustomTableCell>
            <CustomTableCell>USD {totalRevenue}</CustomTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CustomTableContainer>
  );
};

export default DataTable;
