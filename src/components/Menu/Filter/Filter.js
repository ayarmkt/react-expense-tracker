import styles from './Filter.module.css';
import Card from '../../UI/Card';

const Filter = () => {
  return (
    <div className={styles.filter}>
      <h2>FILTER</h2>
      <div className={styles['add-expense__control']}>
        <label>Date</label>
        <input
          // onChange={dateChangeHandler}
          type='date'
          min='2019/01/01'
          max='2022-12-31'
          // value={enteredDate}
        />
      </div>
      <div className={styles['add-expense__control']}>
        <label>Category</label>
        <select /*onChange={categoryChangeHandler} value={enteredCategory}*/>
          <option value='food'>Food</option>
          <option value='clothes'>Clothes</option>
          <option value='necessities'>Necessities</option>
          <option value='others'>Others</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
