import { useState } from "react"
import Background from "./Component/background/background";
import NavBar from "./Component/NavBar/NavBar";
import Hero from "./Component/Hero/Hero";
 const App = () => {
  let heroData = [
    {text1: "Dive into", text2: "what you love"},
    {text1: "Indulge", text2: "your passions"},
    {text1: "Give iin to", text2: "your passions"},
  ]

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div>
      <Background playStatus= {playStatus} heroCount={heroCount}/>
    <NavBar/>
     <Hero
     setPlayStatus={setPlayStatus}
     heroData={heroData[heroCount]}
     heroCount={heroCount}
     setHeroCount={setHeroCount}
     playStatus={playStatus  }
     />
    </div>
  )
} 
 
export default App