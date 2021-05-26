import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { callQuestionsArrayApi } from "../store/api/getQuestionsArray_api";
import PopupBox from "./popupBox";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  header: {
    fontSize: "30px",
    background: "#7e7efd",
    color: "white",
  },
  row: {
    "&:hover": {
      transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      backgroundColor: "#aed9ff",
    },
    cursor: "pointer",
  },
});

export default function QuestionList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { questionsArray, pageSize } = useSelector(
    (state) => state.QuestionsArrayReducer
  );
  const [open, setOpen] = React.useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const handleClickOpen = (index) => {
    setCurrentQuestion(questionsArray[index]);
    setOpen(true);
  };

  return (
    <div>
      <PopupBox
        currentQuestion={currentQuestion}
        setOpen={setOpen}
        open={open}
      />

      <InfiniteScroll
        dataLength={questionsArray.length}
        next={() => callQuestionsArrayApi(dispatch, pageSize)}
        hasMore={true}
        loader={
          questionsArray.length < 100 ? (
            <h4>Loading...</h4>
          ) : (
            <h4>No more data to load .</h4>
          )
        }
      >
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.header}>Author</TableCell>
                <TableCell className={classes.header} align="left">
                  Title
                </TableCell>
                <TableCell className={classes.header} align="left">
                  Creation date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {questionsArray.map((row, index) => (
                <TableRow
                  className={classes.row}
                  key={row.question_id}
                  onClick={() => handleClickOpen(index)}
                >
                  <TableCell component="th" scope="row">
                    {row.owner.display_name}
                  </TableCell>
                  <TableCell align="left">{row.title}</TableCell>
                  <TableCell align="left">
                    {new Date(row.creation_date).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </InfiniteScroll>
    </div>
  );
}
