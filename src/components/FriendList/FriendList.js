import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function Friends({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(friend => {
        return (
          <li className={s.item} key={friend.id}>
            <span className={friend.isOnline ? s.isOnline : s.isOffline}></span>
            <img
              className={s.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
}

Friends.propTypes = {
  avatar: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default Friends;
