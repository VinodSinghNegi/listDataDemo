import "./App.css";
import { callQuestionsArrayApi } from "./store/api/getQuestionsArray_api";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import QuestionList from "./components/questionsList";
function App() {
  const dispatch = useDispatch();
  const pageNumber = useSelector(
    (state) => state.QuestionsArrayReducer.pageNumber
  );

  useEffect(() => {
    callQuestionsArrayApi(dispatch, pageNumber);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <QuestionList />
    </div>
  );
}

export default App;
