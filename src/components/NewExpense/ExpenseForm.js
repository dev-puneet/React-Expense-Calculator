// import "./ExpenseForm.css";
// import React, { useState } from "react";

// const ExpenseForm = (props) => {
//   const [InputTitleHandler, setInputTitleHandler] = useState("");
//   const titleChangeHandler = (event) => {
//     setInputTitleHandler(event.target.value);
//   };

//   const [InputAmountHandler, setInputAmountHandler] = useState("");
//   const amountChangeHandler = (event) => {
//     setInputAmountHandler(event.target.value);
//   };
//   const [InputDateHandler, setInputDateHandler] = useState("");
//   const dateChangeHandler = (event) => {
//     setInputDateHandler(event.target.value);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     const expenses = {
//       title: InputTitleHandler,
//       amount: InputAmountHandler,
//       date: new Date(InputDateHandler),
//     };
//     props.onSaveExpenseData(expenses);

//     setInputTitleHandler("");
//     setInputAmountHandler("");
//     setInputDateHandler("");
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label>Title</label>
//           <input
//             type="text"
//             onChange={titleChangeHandler}
//             value={InputTitleHandler}
//           />
//         </div>
//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input
//             type="number"
//             min="0.01"
//             step="0.01"
//             onChange={amountChangeHandler}
//             value={InputAmountHandler}
//           />
//         </div>
//         <div className="new-expense__control">
//           <label>Date</label>
//           <input
//             type="date"
//             min="2019-01-01"
//             max="2023-12-31"
//             onChange={dateChangeHandler}
//             value={InputDateHandler}
//           />
//         </div>
//       </div>
//       <div className="new-expense__actions">
//         <button type="submit">Add Expense</button>
//       </div>
//     </form>
//   );
// };

// export default ExpenseForm;

import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [addExpenseButton, setAddExpenseButton] = useState(true);
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    setShowForm(false);
    setAddExpenseButton(true);
  };

  const showFormHandler = () => {
    setShowForm(true);
    setAddExpenseButton(false);
  };

  const cancelFormSubmission = () => {
    setShowForm(false);
    setAddExpenseButton(true);
  };
  return (
    <form onSubmit={submitHandler}>
      {showForm ? (
        <div>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={enteredAmount}
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2018-01-01"
                max="2024-12-31"
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button onClick={cancelFormSubmission}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </div>
      ) : (
        ""
      )}
      {addExpenseButton ? (
        <div className="new-expense__actions__center">
          <button onClick={showFormHandler}>Add New Expense</button>
        </div>
      ) : (
        ""
      )}
    </form>
  );
};

export default ExpenseForm;
