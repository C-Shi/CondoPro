import users from '@/db/users';
import activities from '@/db/activities';

function _formatPhone (phone) {
  let formatted = '';
  const phoneArr = phone.split('');
  phoneArr.forEach(function(num, index) {
    formatted += num;
    if (index == 2 || index == 5) {
      formatted += '-';
    }
  })
  return formatted;
}

function _formatUsers (users) {
  return users.map(u => {
    return _formatUser(u)
  })
}

function _formatUser (user) {
  return {
    ...user,
    name: `${user.firstName} ${user.lastName}`,
    phone: _formatPhone(user.phone)
  }
}
export default {
  getUsers: () => {
    let formattedUsers = _formatUsers(users);
    return Promise.resolve(formattedUsers);
  },

  getUserActivities: () => {
    let userActivities = activities.filter(function(a) {
      return a.morph_type == 'User';
    })
    userActivities = userActivities.map(function(a) {
      const user = _formatUser(users.find(el => el.id === a.morph_id));
      return {...a, user}
    })
    return Promise.resolve(userActivities);
  }

  
}