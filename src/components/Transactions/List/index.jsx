import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import * as yup from 'yup';

const Table = styled.table`
  width: 80%;
  text-align: left;
  padding: 64px;
`;

const HeadCell = styled.td`
  padding: 16px 0;
  width: 20%;
`;

const TableCell = styled.td`
  padding: 8px 0;
  width: 20%;
`;

const Amount = styled.p`
  color: ${({ type }) => (type === "expense" ? "red" : "green")};
`;

const TransactionList = () => {
    const data = require('./data').data
    console.log('the data: ', data)

    const [transactions, setTransactions] = useState(data)

    useEffect(() => {
        setTransactions(data);
        
      }, []);
    
      const handleDelete = (id) => {
        const _transactions = [...transactions].filter(
          (transaction) => transaction.id !== id
        )
        setTransactions(_transactions);
        console.log("deleting row", id)
      }



     
    return (
        <div>
            <Table>
          <thead>
            <tr>
              <HeadCell>Date</HeadCell>
              <HeadCell>Name</HeadCell>
              <HeadCell>Category</HeadCell>
              <HeadCell>Amount</HeadCell>
              <HeadCell></HeadCell>
            </tr>
          </thead>
          <tbody>
            {transactions.map(({id, date, name,category,type,amount}) => {
              return (
              <tr key={id}>
                <TableCell>{date}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{category}</TableCell>
                <TableCell>
                  <Amount type={type}>{amount}</Amount>
                </TableCell>
                <TableCell>

                  <EditIcon style={{marginRight: "16px"}}/>
                  <DeleteForeverIcon
                  style={{color: "#FF7661"}}
                  onClick={() => {
                     handleDelete(id)
            
                   }}
                  >

                  </DeleteForeverIcon>
                </TableCell>
              </tr>
              );
            })}
          </tbody>
        </Table>
        </div>
    )
}

export default TransactionList
