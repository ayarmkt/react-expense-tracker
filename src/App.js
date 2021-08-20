import { useState } from 'react';
import styles from './App.module.css';

import Menu from './components/Menu/Menu';
import ExpensesSummary from './components/Expense/ExpensesSummary';

const DUMMY_EXPENSES = [
  {
    date: new Date(2020, 7, 14),
    item: 'Toilet Paper',
    amount: 94.12,
    category: 'Food',
  },
  {
    date: new Date(2021, 2, 12),
    item: 'New TV',
    amount: 799.49,
    category: 'Food',
  },
  {
    date: new Date(2021, 2, 28),
    item: 'Car Insurance',
    amount: 294.67,
    category: 'Food',
  },
  {
    date: new Date(2021, 5, 12),
    item: 'New Desk (Wooden)',
    amount: 450,
    category: 'Food',
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  console.log(expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log('running addExpenseHandler');
  };

  return (
    <div className={styles.display}>
      <h2>Daily Expense Tracker</h2>
      <div className={styles.app}>
        <Menu onAddExpense={addExpenseHandler} />
        <ExpensesSummary items={expenses} />
      </div>
    </div>
  );
};

export default App;
