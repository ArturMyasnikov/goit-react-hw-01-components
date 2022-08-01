import PropTypes from 'prop-types';
import e from './Statistics.module.css';

function Statistics({ title = 'Upload stats', stats }) {
  return (
    <section className={e.statistics}>
      {title && <h2 className={e.title}>Upload stats</h2>}
      <ul className={e.stats}>
        {stats.map(stat => {
          return (
            <li className={e.itemStat} key={stat.id}>
              <span>{stat.label}</span>
              <span>{stat.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;
