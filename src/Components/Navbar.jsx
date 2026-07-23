import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";


function Navbar(){

const {dark,setDark}=useContext(ThemeContext);


return(

<nav className="
sticky
top-0
z-50
px-8
py-4
flex
justify-between
items-center
bg-white/80
dark:bg-gray-950/80
backdrop-blur-xl
border-b
border-gray-200
dark:border-gray-800
">


<h1 className="
text-2xl
font-extrabold
bg-gradient-to-r
from-indigo-500
via-purple-500
to-pink-500
text-transparent
bg-clip-text
">

Random Explorer 🚀

</h1>



<button

onClick={()=>setDark(!dark)}

className="
w-12
h-12
rounded-full
flex
items-center
justify-center
bg-gradient-to-r
from-indigo-500
to-purple-600
text-white
shadow-lg
hover:scale-110
transition
"

>

{
dark ? "☀️" : "🌙"
}

</button>


</nav>

)

}


export default Navbar;