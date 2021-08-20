import styles from './ExpensesSummary.module.css';

import ExpensesList from './ExpenseList/ExpensesList';
import ChartSection from './Chart/Chart';

const ExpensesSummary = (props) => {
  return (
    <div className={styles['expenses-summary']}>
      <ChartSection />
      <ExpensesList items={props.items} />
    </div>
  );
};

export default ExpensesSummary;
