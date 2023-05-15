import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../NewExpense/ExpensesFilter";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");
  const yearHandler = (expenseYear) => {
    setYear(expenseYear);
  };

  const filteredYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  let expenseContent = <p>No expenses found.</p>;

  if (filteredYear.length > 0) {
    expenseContent = filteredYear.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} getYearValue={yearHandler} />
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
