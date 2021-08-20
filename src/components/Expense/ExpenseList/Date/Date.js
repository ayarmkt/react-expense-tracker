import styles from './Date.module.css';

const Date = (props) => {
  const monthArr = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const date = props.date;
  const year = date.getFullYear();
  const month = monthArr[date.getMonth()];
  const day = date.getDate();

  return <div>{`${year} ${month} ${day}`}</div>;
};

export default Date;
