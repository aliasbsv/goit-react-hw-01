import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.table}>
            <thead className={css.tableHead}>
                <tr className={css.tableRow}>
                    <th className={css.tableTitle}>Type</th>
                    <th className={css.tableTitle}>Amount</th>
                    <th className={css.tableTitle}>Currency</th>
                </tr>
            </thead>
             <tbody className={css.tableBody}>
        {items.map(transaction => {
          return (
            <tr className={css.tableRow} key={transaction.id}>
              <td className={css.tableValue}>{transaction.type}</td>
              <td className={css.tableValue}>{transaction.amount}</td>
              <td className={css.tableValue}>{transaction.currency}</td>
            </tr>
          );
        })}
            </tbody>

        </table>
    );
};

export default TransactionHistory;