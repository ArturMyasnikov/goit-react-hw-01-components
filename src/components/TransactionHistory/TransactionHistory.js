import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table class={s.history}>
      <thead>
        <tr>
          <th className={s.typeTitle}>Type</th>
          <th className={s.amount}>Amount</th>
          <th className={s.currency}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <tr>
              <td className={s.type}>{item.type}</td>
              <td className={s.typeAmount}>{item.amount}</td>
              <td className={s.type}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.protoTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistory;
