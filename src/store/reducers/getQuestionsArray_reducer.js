const initialState = {
  questionsArray: [],
  pageNumber: 1,
};

export const QuestionsArrayReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_QUESTIONS_ARRAY":
      return {
        questionsArray: [...state.questionsArray, ...action.payload],
        pageNumber: state.pageNumber + 1,
      };
    default:
      return state;
  }
};
