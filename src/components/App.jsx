import { Container } from "./Container/Container";
import user from './Profile/user.json'
import data from './Statistics/data.json'
import { Statistics } from "./Statistics/Statistics";

export const App = () => {
  return (
    <div>
    <Container user={user}/>
    <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
