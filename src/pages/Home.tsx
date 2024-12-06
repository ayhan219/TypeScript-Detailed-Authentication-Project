import { useState } from "react"
import Login from "../components/Login"
import Signup from "../components/Signup"


const Home = () => {

  const [isLogin,setIsLogin] = useState<boolean>(false);
  return (
    <div className="w-full h-screen bg-[#242A55] flex items-center justify-center">
      {
        !isLogin ? <Login /> : <Signup />
      }
    </div>
  )
}

export default Home
