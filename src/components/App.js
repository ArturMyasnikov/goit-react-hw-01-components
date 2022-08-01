import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import Friends from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from '../user.json';
import stats from '../data.json';
import friendsData from '../friends.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={stats} />
      <Friends friends={friendsData} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
