import user from './Profile/user.json'
import data from './Statistics/data.json'
import transactions from './TransactionHistory/transactions.json';
import friends from './FriendList/friends.json'
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import { Profile } from "./Profile/Profile";

export const App = () => {
  return (
    <div>
    <Profile user={user}/>
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends}/>
    <TransactionHistory items={transactions} />
    </div>
  );
};
