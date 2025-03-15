import React, { useState } from 'react';

function UserDetails({ user }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold">{user.name.firstname} {user.name.lastname}</h2>
      <p><span className="font-semibold">Адрес:</span> {user.address.street}, {user.address.number}, {user.address.city}, {user.address.zipcode}</p>
      <p><span className="font-semibold">Телефон:</span> {user.phone}</p>
      <p><span className="font-semibold">Геолокация:</span> {user.address.geolocation.lat}, {user.address.geolocation.long}</p>
      <p><span className="font-semibold">Имя пользователя:</span> {user.username}</p>
      <p>
        <span className="font-semibold">Пароль:</span> {showPassword ? user.password : '********'}
        <button onClick={() => setShowPassword(!showPassword)} className="ml-2 text-blue-500 hover:underline">
          {showPassword ? 'Скрыть' : 'Показать'}
        </button>
      </p>
    </div>
  );
}

export default UserDetails;