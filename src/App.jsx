import {useState} from "react";
import UserCard from "./components/UserCard";


function App(){


const [users,setUsers]=useState([]);

const [loading,setLoading]=useState(false);



const generateUsers=async()=>{


setLoading(true);


const res=await fetch(
"https://randomuser.me/api/?results=8"
);


const data=await res.json();


setUsers(data.results);


setLoading(false);


}



return (

<div className="
min-h-screen
bg-gradient-to-br
from-indigo-500
via-purple-500
to-pink-500
p-8
">


<h1 className="
text-4xl
md:text-5xl
font-bold
text-white
text-center
mb-10
">

Random User Explorer

</h1>



<div className="text-center">


<button

onClick={generateUsers}

className="
bg-white
text-purple-600
font-semibold
px-8
py-3
rounded-full
shadow-lg
hover:scale-105
transition
"

>

Generate Users

</button>


</div>



{
loading &&

<h2 className="
text-white
text-center
text-2xl
mt-10
">

Loading...

</h2>

}



<div className="
grid
sm:grid-cols-2
lg:grid-cols-4
gap-6
mt-12
">


{

users.map((user,index)=>(

<UserCard

key={index}

user={user}

/>

))

}


</div>


</div>

)


}


export default App;