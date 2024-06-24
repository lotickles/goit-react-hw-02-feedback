import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.container}>
      <p className={css.label}>
        Good: <span className={css.value}> {good}</span>
      </p>
      <p className={css.label}>
        Neutral: <span className={css.value}> {neutral}</span>
      </p>
      <p className={css.label}>
        Bad: <span className={css.value}> {bad}</span>
      </p>
      <p className={css.label}>
        Total: <span className={css.value}>{total}</span>
      </p>
      <p className={css.label}>
        Positive feedback:{' '}
        <span className={css.value}>{positivePercentage}%</span>
      </p>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
