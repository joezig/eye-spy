import React from 'react';

import { useParams } from 'react-router-dom';

import PlaceList from '../components/place-list';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    descritpion: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://www.esbnyc.com/sites/default/files/styles/timely_content_image_large__885x590_/public/default_images/brs_0330.jpg?itok=m3gzF1YH',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878531
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Emp. State Building',
    descritpion: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://www.esbnyc.com/sites/default/files/styles/timely_content_image_large__885x590_/public/default_images/brs_0330.jpg?itok=m3gzF1YH',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878531
    },
    creator: 'u2'
  }
];

const UserPlaces = props => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
