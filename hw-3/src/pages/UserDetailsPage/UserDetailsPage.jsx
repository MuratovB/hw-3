import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import UserDetails from '../../components/UserDetails/UserDetails.jsx';

function UserDetailsPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) {
    return <div className="container mx-auto p-4 text-center">Загрузка...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <UserDetails user={user} />
      <Link to="/users" className="mt-4 text-blue-500 hover:underline">Назад к списку пользователей</Link>
    </div>
  );
}

export default UserDetailsPage;