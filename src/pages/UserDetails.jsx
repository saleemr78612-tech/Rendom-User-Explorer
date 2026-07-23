import { useParams, useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

function UserDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("users"));

    setUser(data[id]);
  }, [id]);

  if (!user) return <h1>Loading...</h1>;

  return (
    <div
      className="
min-h-screen
flex
justify-center
items-center
bg-gradient-to-br
from-purple-500
to-pink-500
p-8
"
    >
      <div
        className="
bg-white/20
backdrop-blur-xl
rounded-3xl
p-8
text-white
text-center
max-w-md
w-full
"
      >
        <img
          src={user.picture.large}
          className="
w-40
h-40
rounded-full
mx-auto
border-4
border-white
"
        />

        <h1
          className="
text-3xl
font-bold
mt-5
"
        >
          {user.name.first} {user.name.last}
        </h1>

        <p className="mt-3">📧 {user.email}</p>

        <p>📞 {user.phone}</p>

        <p>📍 {user.location.city}</p>

        <button
          onClick={() => navigate(-1)}
          className="
mt-8
bg-white
text-purple-600
px-8
py-3
rounded-full
font-bold
"
        >
          ← Back
        </button>
      </div>
    </div>
  );
}

export default UserDetails;
