import { createSlice } from "@reduxjs/toolkit";

export const inviteSlice = createSlice({
  name: "invite",
  initialState: {
    value: 0,
  },
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },

    sendToGoing: (state, action) => {
      state.value += action.payload;
    },

    sendToNotGoing: (state, action) => {
      state.value += action.payload;
    },

    //   asyncNotGoing: (state, action) => {
    //     state.value += action.payload;
    //   },

    //   chooseNotGoing: (state, action) => {
    //     state.value += action.payload;
    //   },

    //   asyncGoing: (state, action) => {
    //     state.value += action.payload;
    //   },

    //   chooseGoing: (state, action) => {
    //     state.value += action.payload;
    //   },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  sendToGoing,
  sendToNotGoing,
  chooseNotGoing,
  asyncNotGoing,
  chooseGoing,
  asyncGoing,
} = inviteSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.invite.value)`
export const selectCount = (state) => state.invite.value;
export const selectGoing = (state) => state.goings.going;
export const selectNotGoing = (state) => state.notgoings.notgoing;
export default inviteSlice.reducer;
