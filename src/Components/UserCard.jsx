import {

FaEnvelope,
FaPhone,
FaLocationDot

} from "react-icons/fa6";


import {motion} from "framer-motion";



function UserCard({user}){


const copyEmail=()=>{

navigator.clipboard.writeText(
user.email
);

alert("Email Copied");

}



return(


<motion.div

initial={{
opacity:0,
y:50
}}

animate={{
opacity:1,
y:0
}}

className="
bg-white/20
backdrop-blur-xl
border
border-white/30
rounded-3xl
p-6
text-white
shadow-xl
hover:-translate-y-2
transition
"


>


<img

src={user.picture.large}

className="
w-32
h-32
rounded-full
mx-auto
border-4
border-white
object-cover
"

/>



<h2 className="
text-2xl
font-bold
text-center
mt-5
">


{user.name.first}

{" "}

{user.name.last}


</h2>



<p className="
text-center
mt-2
">

Age:
{user.dob.age}

</p>



<div className="
mt-5
space-y-3
text-sm
">


<p className="
flex
items-center
gap-3
">

<FaEnvelope/>

{user.email}

</p>



<p className="
flex
items-center
gap-3
">

<FaPhone/>

{user.phone}

</p>



<p className="
flex
items-center
gap-3
">


<FaLocationDot/>

{user.location.city},
{user.location.country}


</p>


</div>




<button

onClick={copyEmail}

className="
mt-6
w-full
bg-white
text-purple-600
py-2
rounded-full
font-semibold
hover:bg-gray-100
transition
"

>

Copy Email

</button>



</motion.div>


)


}


export default UserCard;