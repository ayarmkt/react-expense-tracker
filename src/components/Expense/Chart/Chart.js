import styles from './Chart.module.css';
import Card from '../../UI/Card';
import Chart from 'react-google-charts';

const ChartSection = () => {
  console.log('running Chart');
  return (
    <div className={styles['chart-container']}>
      <h2>Expense Chart</h2>
      <Chart
        width={'500px'}
        height={'300px'}
        chartType='PieChart'
        loader={<div>Loading Chart</div>}
        data={[
          ['Task', 'Hours per Day'],
          ['Work', 11],
          ['Eat', 2],
          ['Commute', 2],
          ['Watch TV', 2],
          ['Sleep', 7],
        ]}
      />
    </div>
  );
};

export default ChartSection;
