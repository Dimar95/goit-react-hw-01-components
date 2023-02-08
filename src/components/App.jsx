import { Container } from "./Container/Container";
import user from './Profile/user.json'
import data from './Statistics/data.json'
import friends from './FriendList/friends.json'
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";

export const App = () => {
  return (
    <div>
    <Container user={user}/>
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends}/>

    </div>
  );
};
