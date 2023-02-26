import PropTypes from "prop-types"
import { ItemTd, TransactionHistoryTable, HeadTh } from './TransactionHistory.styled'

export const TransactionHistory = ({items}) =>{
return <TransactionHistoryTable>
<thead>
  <tr>
      <HeadTh>Type</HeadTh>
      <HeadTh>Amount</HeadTh>
      <HeadTh>Currency</HeadTh>
    </tr>
</thead>
<tbody>
{items.map(item =>  
    <tr key={item.id}>
    <ItemTd>{item.type}</ItemTd>
    <ItemTd>{item.amount}</ItemTd>
    <ItemTd>{item.currency}</ItemTd>
  </tr>)}
</tbody>
</TransactionHistoryTable>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
        })
    )
}