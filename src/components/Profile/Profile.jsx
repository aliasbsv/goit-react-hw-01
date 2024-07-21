import css from './Profile.module.css';

const Profile = ({ username, tag, location,
    avatar = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
    followers, views, likes}) => { 
    return (
      <div className={css.profile}>
    <div className={css.profileInfo}>
    <img className={css.profileImage}
    src={avatar} alt="User avatar"
    />
    <p className={css.profileName}>{username}</p>
    <p className={css.profileTag}>@{tag}</p>
    <p className={css.profileLocation}>{location}</p>
  </div>

  <ul className={css.profileStatistic}>
    <li className={css.profileListItem}>
      <span className={css.profileStatisticTitle}>Followers</span>
      <span className={css.profileStatisticValue}>{followers }</span>
    </li>
    <li className={css.profileListItem}>
      <span className={css.profileStatisticTitle}>Views</span>
      <span className={css.profileStatisticValue}>{views}</span>
    </li>
    <li className={css.profileListItem}>
      <span className={css.profileStatisticTitle}>Likes</span>
      <span className={css.profileStatisticValue}>{likes}</span>
    </li>
  </ul>
</div>
    );
};

export default Profile;