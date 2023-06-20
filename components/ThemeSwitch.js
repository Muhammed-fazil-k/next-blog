import { useState } from "react";
import DarkTheme from "./DarkTheme";

function loadDarkMode(){
  if(typeof localStorage=== 'undefined'){
    return false;
  }
  const darkMode = localStorage.getItem('darkMode')
  return (darkMode===null)?false:JSON.parse(darkMode)
}
export default function ThemeSwitch() {
  const [isdarkMode, setIsDarkMode] = useState(loadDarkMode);

  const text = isdarkMode ? "Light mode" : "Dark mode";
  return (
    <>
      <button suppressHydrationWarning
        onClick={() => {
          setIsDarkMode(!isdarkMode);
          localStorage.setItem("darkMode",JSON.stringify(!isdarkMode))
        }}
      >
        {text}
      </button>
      <style jsx>
        {`
          button {
            background: none;
            border: none;
            color: inherit;
          }
        `}
      </style>
      {isdarkMode && <DarkTheme/>}
      
    </>
  );
}
