import React from "react";
import book_details from "../../../book_details.json";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const rows = Object.values(book_details);

const BookList = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Title </StyledTableCell>
              <StyledTableCell align="right">thumbnailUrl</StyledTableCell>
              <StyledTableCell align="right">rate</StyledTableCell>
              <StyledTableCell align="right">numOfReviews</StyledTableCell>
              <StyledTableCell align="right">recommendedAge</StyledTableCell>
              <StyledTableCell align="right">language</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.title}>
                <StyledTableCell component="th" scope="row">
                  {row.title}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {" "}
                  <div >
                    <img src={row.thumbnailUrl} width="100" height="auto"/>
                  </div>

                </StyledTableCell>
                <StyledTableCell align="right">{row.rate}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.numOfReviews}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.recommendedAge}
                </StyledTableCell>
                <StyledTableCell align="right">{row.language}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default BookList;
