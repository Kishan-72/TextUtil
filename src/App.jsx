import { useState } from 'react';
import Navbar from './component/Navbar'
import Textform from './component/Textform'


export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  //const navClassNames = darkMode ? "bg-gray-900" : "bg-purple-500";
  let navClassNames;
  if (darkMode) {
    navClassNames = "bg-gray-900";
    document.body.style.backgroundColor = "#042743"
  } else {
    navClassNames = "bg-purple-500";
    document.body.style.backgroundColor = "white"
  }


  return (
    <>
      <Navbar title="TextUtils"
        abouttext="About"
        darkMode={darkMode}
        navClassNames={navClassNames}
        setDarkMode={setDarkMode} />


      <div className="container min-w-2">

        <Textform navClassNames={navClassNames}
          darkMode={darkMode} />


      </div>

    </>
  )
}