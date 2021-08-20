import styles from './ExpensesList.module.css';
import ExpenseItem from './ExpenseItem';
import Card from '../../UI/Card';

const ExpenseList = (props) => {
  console.log('running ExpenseList', props);

  const itemArr = [...props.items];

  return (
    <div className={styles['list-container']}>
      <ul>
        <h2>Expense List</h2>
        <div className={styles['items-list']}>
          {itemArr.map((item) => (
            <ExpenseItem
              date={item.date}
              item={item.item}
              amount={item.amount}
              category={item.category}
            />
          ))}
        </div>
      </ul>
    </div>
  );
};

export default ExpenseList;
