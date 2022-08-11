import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import Friends from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from './Data/user.json';
import stats from './Data/data.json';
import friendsData from './Data/friends.json';
import transactions from './Data/transactions.json';

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
