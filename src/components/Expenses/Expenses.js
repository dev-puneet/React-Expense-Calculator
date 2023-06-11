import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [year, setYear] = useState("2023");
  const yearHandler = (expenseYear) => {
    setYear(expenseYear);
  };

  const filteredYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} getYearValue={yearHandler} />
        <ExpensesChart expenses={filteredYear} />
        <ExpensesList items={filteredYear} />
      </Card>
    </div>
  );
};

export default Expenses;
