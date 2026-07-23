import { useEffect, useState } from "react";

import UserCard from "../components/UserCard";

function Home() {
  const [users, setUsers] = useState([]);

  const [search, setSearch] = useState("");

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || [],
  );

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((res) => res.json())

      .then((data) => {
        setUsers(data.results);

        localStorage.setItem("users", JSON.stringify(data.results));
      });
  }, []);

  function addFavorite(user) {
    const updated = [...favorites, user];

    setFavorites(updated);

    localStorage.setItem("favorites", JSON.stringify(updated));
  }

  const filteredUsers = users.filter((user) =>
    user.name.first.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div
      className="
min-h-screen
bg-gradient-to-br
from-slate-100
via-purple-50
to-indigo-100
dark:from-gray-950
dark:via-gray-900
dark:to-black
p-8
"
    >
      <h1
        className="
text-4xl
font-bold
text-center
mb-8
text-purple-600
"
      >
        Random User Explorer
      </h1>

      <input
        type="text"
        placeholder="Search User..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
w-full
mb-4
max-w-xl
mx-auto
block
p-4
rounded-2xl
shadow-lg
border
border-gray-200
outline-none
focus:ring-4
focus:ring-purple-300
dark:bg-gray-600
dark:border-gray-700
dark:text-white
"
      />

      <div
        className="
grid
sm:grid-cols-2
lg:grid-cols-4
gap-6
"
      >
        {filteredUsers.map((user, index) => (
          <UserCard
            key={index}
            user={user}
            index={index}
            addFavorite={addFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
