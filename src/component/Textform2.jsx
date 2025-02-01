import PropTypes from "prop-types";
import { useRef, useState } from "react";

function Textform2({ darkMode }) {
  const buttonclass = `outline-none bg-blue-600 text-white px-4 py-1 sm:px-5 sm:py-1.5 
                        md:px-6 md:py-2 lg:px-7 lg:py-2.5 text-sm sm:text-base 
                        md:text-lg font-semibold rounded-full transition-all
                        duration-200 hover:bg-blue-700 active:scale-95 ${
                          darkMode
                            ? "bg-gray-600 hover:bg-gray-700 "
                            : "bg-blue-600 hover:bg-blue-700"
                        }`;

  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log("on change");
  };
  const handleUpper = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleLower = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleCapitalized = () => {
    let newtext = text
      .split(" ") // Split the string by spaces
      .map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitalize first letter and make the rest lowercase
      )
      .join(" ");
    setText(newtext);
  };
  const removeExtraSpaces = (text) => {
    return text
      .split(" ") // Split by spaces
      .filter((word) => word !== "") // Remove empty elements
      .join(" ") // Join back with a single space
      .trim(); // Trim leading & trailing spaces
  };
  const handleSpaceRemoval = () => {
    const cleanedText = removeExtraSpaces(text);
    setText(cleanedText);
  };
  const textref = useRef(null);

  const handleCopyText = () => {
    textref.current?.select();
    window.navigator.clipboard.writeText(text);
  };
  const handleClear = () => {
    setText("");
  };

  return (
    <>
      <div style={{ color: darkMode ? "white" : "black" }}>
        <h1 className="px-2 py-3 font-bold">
          Accidentally left the caps lock on and typed something, but cant be
          bothered to start again and retype it all?
        </h1>
        <h2 className="px-2 py-2 font-semibold">
          Simply enter your text and choose the case you want to convert it to.
        </h2>
        <textarea
          rows={8}
          value={text}
          ref={textref}
          //cols={100}
          className="w-full rounded-md bg-slate-200 px-4 py-2 text-base text-gray-900
                     placeholder:text-gray-400 focus:outline-indigo-600 
                     sm:text-sm md:text-base lg:text-lg sm:py-2 md:py-3"
          placeholder="Type or paste your text here to change text case"
          onChange={handleOnChange}
        />
        <div className="flex flex-wrap gap-2 sm:justify-start">
          <button className={buttonclass} onClick={handleUpper}>
            UPPER CASE
          </button>

          <button className={buttonclass} onClick={handleLower}>
            lower case
          </button>

          <button className={buttonclass} onClick={handleCapitalized}>
            Capitalized Case
          </button>
          <button className={buttonclass} onClick={handleSpaceRemoval}>
            RemoveExtraSpaces
          </button>

          <button className={buttonclass} onClick={handleCopyText}>
            Copy
          </button>

          <button className={buttonclass} onClick={handleClear}>
            Clear
          </button>
        </div>
        <p
          className="[text-shadow:_0_4px_8px_rgba(14_165_223_/_0.5)]
                            text-gray-400 text-xs md:text-xl my-2 leading-snug 
                            font-manrope font-extrabold"
        >
          Character count: {text.length}|Word count:
          {text.trim().length === 0
            ? 0
            : text
                .trim()
                .split(" ")
                .filter((word) => word !== "").length}
        </p>
      </div>
    </>
  );
}
Textform2.propTypes = {
  darkMode: PropTypes.bool,
};

export default Textform2;
