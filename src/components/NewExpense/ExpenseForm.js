import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [InputTitleHandler, setInputTitleHandler] = useState("");
  const titleChangeHandler = (event) => {
    setInputTitleHandler(event.target.value);
  };

  const [InputAmountHandler, setInputAmountHandler] = useState("");
  const amountChangeHandler = (event) => {
    setInputAmountHandler(event.target.value);
  };
  const [InputDateHandler, setInputDateHandler] = useState("");
  const dateChangeHandler = (event) => {
    setInputDateHandler(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenses = {
      title: InputTitleHandler,
      amount: InputAmountHandler,
      date: new Date(InputDateHandler),
    };
    props.onSaveExpenseData(expenses);

    setInputTitleHandler("");
    setInputAmountHandler("");
    setInputDateHandler("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={InputTitleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={InputAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={InputDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
