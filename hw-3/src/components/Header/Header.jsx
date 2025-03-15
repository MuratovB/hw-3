import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <img className="ml-4 w-20" src="https://media-hosting.imagekit.io//5cd5068b3fc249a8/569605b0271849cfa849a6df3a4522c9-free.png?Expires=1836645647&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=a6n6jZ7lD0Eost0mVoH41juyIPUz4ZkDKScKJQrwjIlkjVayw6EAS5Aab5IXUk3S3Z5BmdGq1mgYx9Dl1Az-mQCzyzS8y~EQdghKLIwVF~6q5z1uJ76TZx2198GjGXuEYHq6bvl0mOVlOVyiaPDQZMakBVolwM~KRFNEsIjx0vdpCHNJfszTgTXVnhFLMU~kZGLq1PscIEKz1SOF3HPQZ16xPZAWR09RqWJPLSRa7GTDTTZa~14U48Us~n8GMqPSS1lVjttrEDcMLikBZey2Ee7fanJM0dQxl4ATqbFcuZVDQQxvmt0Z3-zFMQJSzwFd0KFtwDRAjrmKpt5NGbEpqg__"></img>
        <div>
          <Link to="/users" className="mr-4 hover:text-gray-300">Список пользователей</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;