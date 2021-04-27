import logo from "./logo.svg";
import "./App.css";
import styled, { css } from "styled-components";

import { NavBar } from "./components/NavBar";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
const Table = styled.table`
  width: 80%;
  text-align: left;
  padding: 64px;
`;

const HeadCell = styled.HeadCell`
  padding: 16px 0;
`;

const TableCell = styled.tr`
  padding: 8px 0;
  width: 20%;
`;

const Amount = styled.p`
  color: ${({ type }) => (type === "expense" ? "red" : "green")};
`;

function App() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    setTransactions(data);
    return () => {
      cleanup;
    };
  }, []);

  const handleDelete = (id) => {
    const _transactions = [...transactions].filter(
      (transaction) => transaction.id !== id
    )
    setTransactions(_transactions);
    console.log("deleting row", id)
  }

  return (
    <div className="App">
      <div className="layout">
        <NavBar />
        <table>
          <thead>
            <tr>
              <HeadCell>Data</HeadCell>
              <HeadCell>Name</HeadCell>
              <HeadCell>Category</HeadCell>
              <HeadCell>Amount</HeadCell>
              <HeadCell></HeadCell>
            </tr>
          </thead>
          <tbody>
            {data.map((transaction) => {
              <tr key={transaction.id}>
                <TableCell>{transaction.data}</TableCell>
                <TableCell>{transaction.name}</TableCell>
                <TableCell>{transaction.category}</TableCell>
                <TableCell>
                  <Amount type={transaction.type}>{transaction.amount}</Amount>
                </TableCell>
                <TableCell>

                  <EditIcon style={{marginRight: "16px"}}></EditIcon>
                  <DeleteForeverIcon
                  style={{color: "#FF7661"}}
                  onClick={() => {
                    () => handleDelete(transaction.id)
            }
                   }
                  >

                  </DeleteForeverIcon>
                </TableCell>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
