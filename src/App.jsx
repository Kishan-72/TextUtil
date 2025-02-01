import { useState } from 'react';
import Navbar from './component/Navbar'
import Textform2 from './component/Textform2'


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

        <Textform2
          darkMode={darkMode} />


      </div>
      <footer className="w-full bg-gray-400 text-white py-4 text-center mt-10">
        <p className="text-sm">
          © {new Date().getFullYear()} Sudarshana Pvt Ltd. All rights reserved.
        </p>
      </footer>

    </>
  )
}
