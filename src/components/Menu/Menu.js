import styles from './Menu.module.css';
import { useState } from 'react';
import AddExpenseMenu from './AddExpenseMenu/AddExpenseMenu';
import Filter from './Filter/Filter';
import Card from '../UI/Card';

const Menu = (props) => {
  console.log('running Menu', props, props.expenses);

  const [isAddingExpense, setIsAddingExpense] = useState(false);

  const saveExpenseDataHandler = (enteredData) => {
    const expenseData = { ...enteredData, id: new Date().getTime() };

    console.log(expenseData);
    props.onAddExpense(expenseData);
    console.log('running saveExpenseDataHandler');
  };

  const startAddingHandler = (e) => {
    setIsAddingExpense(true);
  };

  const cancelAddingHandler = () => {
    setIsAddingExpense(false);
  };

  return (
    <div className={styles.menu}>
      {!isAddingExpense && (
        <Card className={styles.button}>
          <button onClick={startAddingHandler}>▼ ADD NEW EXPENSE ▼</button>
        </Card>
      )}
      {isAddingExpense && (
        <AddExpenseMenu
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelAddingHandler}
        />
      )}

      <Filter />
    </div>
  );
};

export default Menu;
