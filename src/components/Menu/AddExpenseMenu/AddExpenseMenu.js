import styles from './AddExpenseMenu.module.css';
import { useState } from 'react';
import Card from '../../UI/Card';

const AddExpenseMenu = (props) => {
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredItem, setEnteredItem] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredCategory, setEnteredCategory] = useState('Food');

  const [isValid, setIsValid] = useState(true);

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const itemChangeHandler = (e) => {
    setEnteredItem(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const categoryChangeHandler = (e) => {
    setEnteredCategory(e.target.value);
  };

  // const checkValidHandler = ()=>{
  //   if(enteredDate+ enteredItem+ enteredAmount)
  // }

  console.log('running AddExpenseMenu', props);

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      date: new Date(enteredDate),
      item: enteredItem,
      amount: +enteredAmount,
      category: enteredCategory,
    };

    props.onSaveExpenseData(expenseData);
    console.log('running submitHandler');
    setEnteredDate('');
    setEnteredItem('');
    setEnteredAmount('');
    setEnteredCategory('');
  };

  return (
    <Card className={styles['add-expense__form']}>
      <form onSubmit={submitHandler}>
        <div className={styles['add-expense__controls']}>
          <div className={styles['add-expense__control']}>
            <label>Date</label>
            <input
              onChange={dateChangeHandler}
              type='date'
              min='2019/01/01'
              max='2022-12-31'
              value={enteredDate}
            />
          </div>
          <div className={styles['add-expense__control']}>
            <label>Item</label>
            <input
              onChange={itemChangeHandler}
              type='text'
              placeholder='Restaurant'
              value={enteredItem}
            />
          </div>
          <div className={styles['add-expense__control']}>
            <label>Amount</label>
            <input
              onChange={amountChangeHandler}
              type='number'
              min='0.01'
              step='0.01'
              placeholder='100'
              value={enteredAmount}
            />
          </div>
          <div className={styles['add-expense__control']}>
            <label>Category</label>
            <select onChange={categoryChangeHandler} value={enteredCategory}>
              <option value='food'>Food</option>
              <option value='clothes'>Clothes</option>
              <option value='necessities'>Necessities</option>
              <option value='others'>Others</option>
            </select>
          </div>
        </div>
        <div className={styles['add-expense__actions']}>
          <div className={styles.buttons}>
            <button className={styles['cancel-btn']} onClick={props.onCancel}>
              Cancel
            </button>
            <button className={styles['add-expense-btn']}>Add Expense</button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default AddExpenseMenu;
