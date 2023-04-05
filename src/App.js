import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id:'e1',
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id:'e2',
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id:'e3',
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id:'e4',
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpanseHandler = expense => {
    setExpenses( prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpanseHandler}/>
      <div>
        <Expenses items={expenses}/>
      </div>
    </div>
  );
}

export default App;
