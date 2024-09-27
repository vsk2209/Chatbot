import { createContext, useState } from "react";
import run from '../config/gemini';

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [cachedResponses, setCachedResponses] = useState({}); // Cache responses
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nextWord, totalLength) => {
        setTimeout(() => {
            setResultData(prev => prev + nextWord);
            if (index === totalLength - 1) { // Stop loading after the last word
                setLoading(false);
            }
        }, 75 * index);
    };

    const newChat = () => {
        setLoading(false);
        setShowResult(false);
        setResultData(""); // Clear previous result when starting a new chat
    };

    const displayResponse = (response) => {
        let responseArray = response.split(" ");
        for (let i = 0; i < responseArray.length; i++) {
            const nextWord = responseArray[i];
            delayPara(i, nextWord + " ", responseArray.length);
        }
    };

    const onSent = async (prompt) => {
        setResultData(""); // Clear previous data
        setLoading(true);
        setShowResult(true);

        // Check if prompt is already cached
        if (cachedResponses[prompt]) {
            console.log("Using cached response");
            const response = cachedResponses[prompt];
            displayResponse(response);
        } else {
            let response;
            if (prompt) {
                setPrevPrompts(prev => [...prev, prompt]); // Save the prompt to history
                response = await run(prompt);
                setRecentPrompt(prompt);
            } else {
                setPrevPrompts(prev => [...prev, input]); // Save the input as prompt
                setRecentPrompt(input);
                response = await run(input);
            }

            // Cache the response
            setCachedResponses(prev => ({ ...prev, [prompt]: response }));

            displayResponse(response);
        }
    };

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        setShowResult,
        loading,
        setLoading,
        resultData,
        setResultData,
        input,
        newChat,
        setInput
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
