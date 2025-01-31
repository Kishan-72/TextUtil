import { useRef, useState } from "react"
import PropTypes from 'prop-types'



function Textform({ darkMode }) {

    const handleUpper = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleLower = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleCapitalized = () => {
        let newtext = text.split(' ') // Split the string by spaces
            .map(word =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitalize first letter and make the rest lowercase
            )
            .join(' ');
        setText(newtext);
    }

    const textref = useRef(null)


    const handleCopyText = () => {
        textref.current?.select()
        window.navigator.clipboard.writeText(text)
    }

    const handleClear = () => {
        setText("")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
        console.log("on change")
    }
    // useEffect (()=>{
    //     console.log("Hello Narayan",darkMode)
    // })

    const [text, setText] = useState("");
    return (
        <>
            <div className=" px-52" style={{ color: darkMode ? 'white' : 'black' }}>

                <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl sm:truncate sm:tracking-tight">
                    Enter the text to analyze
                </h3>

                <div className="mt-2">
                    <textarea
                        value={text}
                        ref={textref}
                        rows={8}
                        cols={100}
                        className="w-full rounded-md bg-slate-200 px-4 py-2 text-base
               text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600
               sm:text-sm md:text-base lg:text-lg sm:py-2 md:py-3"
                        placeholder="Type or paste your text here to change text case"
                        onChange={handleOnChange}
                    />
                </div>
                <p className="mt-3 text-xs text-sky-600 sm:text-sm md:text-base lg:text-lg">Simply enter your text and choose the case you want to convert it to.</p>
                <button className="outline-none bg-blue-600 text-white px-4 py-1 sm:px-5 sm:py-1.5 
             md:px-6 md:py-2 lg:px-7 lg:py-2.5 text-sm sm:text-base 
             md:text-lg font-semibold rounded-full transition-all duration-200 hover:bg-blue-700 active:scale-95" onClick={handleUpper}>UPPER CASE</button>&nbsp;
                <button className="outline-none bg-blue-600 text-white px-4 py-1 sm:px-5 sm:py-1.5 
             md:px-6 md:py-2 lg:px-7 lg:py-2.5 text-sm sm:text-base 
             md:text-lg font-semibold rounded-full transition-all duration-200 hover:bg-blue-700 active:scale-95" onClick={handleLower}>lower case</button>&nbsp;
                <button className="outline-none bg-blue-600 text-white px-4 py-1 sm:px-5 sm:py-1.5 
             md:px-6 md:py-2 lg:px-7 lg:py-2.5 text-sm sm:text-base 
             md:text-lg font-semibold rounded-full transition-all duration-200 hover:bg-blue-700 active:scale-95" onClick={handleCapitalized}>Capitalized Case</button>&nbsp;
                <button className="outline-none bg-blue-600 text-white px-4 py-1 sm:px-5 sm:py-1.5 
             md:px-6 md:py-2 lg:px-7 lg:py-2.5 text-sm sm:text-base 
             md:text-lg font-semibold rounded-full transition-all duration-200 hover:bg-blue-700 active:scale-95" onClick={handleCopyText}>Copy</button>&nbsp;
                <button className="outline-none bg-blue-600 text-white px-4 py-1 sm:px-5 sm:py-1.5 
             md:px-6 md:py-2 lg:px-7 lg:py-2.5 text-sm sm:text-base 
             md:text-lg font-semibold rounded-full transition-all duration-200 hover:bg-blue-700 active:scale-95" onClick={handleClear}>Clear</button>
                <p className="[text-shadow:_0_4px_8px_rgba(14_165_223_/_0.5)]
                            text-sky-400 text-xl md:text-2xl leading-snug 
                            font-manrope font-extrabold">Character count: {text.length} ---------Word count: {text.trim().length === 0 ? 0 : text.trim().split(" ")
                            .filter(word => word !== "").length}</p>
            </div>


        </>
    )
}

Textform.propTypes = {

    darkMode: PropTypes.bool
};

export default Textform
