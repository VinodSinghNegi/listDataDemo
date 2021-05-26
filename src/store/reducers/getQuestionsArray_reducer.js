const initialState = {
  questionsArray: [],
  pageSize: 20,
};

export const QuestionsArrayReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_QUESTIONS_ARRAY":
      return {
        ...state,
        questionsArray: action.payload,
        pageSize: state.pageSize + 10,
      };
    default:
      return state;
  }
};
