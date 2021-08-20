import styles from './ExpenseItem.module.css';
import Date from './Date/Date';

const ExpenseItem = (props) => {
  console.log('running ExpenseItem', props);

  return (
    <li className={styles['item-list']}>
      <Date date={props.date}></Date>
      <div className={styles['item-description category']}>
        {props.category}
      </div>
      <div className={styles['item-description item']}>{props.item}</div>
      <div className={styles['item-description amount']}>{props.amount}</div>
    </li>
  );
};

export default ExpenseItem;
