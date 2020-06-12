import React from 'react';

import UsersList from '../components/users-list';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Frnk',
      image: 'https://ewscripps.brightspotcdn.com/dims4/default/bf1fd34/2147483647/strip/true/crop/640x360+0+33/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.thedenverchannel.com%2Fphoto%2F2012%2F10%2F09%2FRMNP-Dream-Lake-At-Sunrise-28963628_280930_ver1.0_640_480.jpg',
      places: 3
    }
  ]
  return(
    <UsersList items={USERS} />
  );
}

export default Users;