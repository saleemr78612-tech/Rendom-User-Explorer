import {
Link
}
from "react-router-dom";


import {
FaHeart
}
from "react-icons/fa";



function UserCard({
user,
index,
addFavorite
}){


return(

<div className="
bg-white/70
dark:bg-gray-900/70
backdrop-blur-xl
border
border-gray-200
dark:border-gray-700
rounded-3xl
p-6
shadow-xl
hover:shadow-2xl
hover:-translate-y-3
transition-all
duration-300
text-center
">


<img

src={user.picture.large}

className="
w-32
h-32
rounded-full
mx-auto
border-4
border-purple-500
"

/>


<h2 className="
text-xl
font-bold
mt-4
dark:text-white
">

{user.name.first}

{" "}

{user.name.last}

</h2>


<p className="
text-sm
dark:text-gray-300
">

{user.email}

</p>



<div className="
flex
justify-center
gap-3
mt-5
">


<Link

to={`/user/${index}`}

className="
bg-purple-600
text-white
px-5
py-2
rounded-full
"

>

View

</Link>



<button

onClick={()=>addFavorite(user)}

className="
bg-red-500
text-white
px-4
rounded-full
"

>

<FaHeart/>

</button>


</div>


</div>

)

}


export default UserCard;