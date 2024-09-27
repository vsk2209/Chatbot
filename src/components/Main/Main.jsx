import React, { useContext, useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = ({ username }) => {
	const {
		onSent,
		recentPrompt,
		showResult,
		loading,
		resultData,
		setInput,
		input,
	} = useContext(Context);
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
		setInput(e.target.value); // Update the context input
	};

	const handleSend = () => {
		if (inputValue) {
			onSent(inputValue); // Call the context's onSent function
			setInputValue(""); // Clear input field
		}
	};

	const handleCardClick = (text) => {
		onSent(text); // Automatically send the text
	};

	return (
		<div className="main">
			<div className="nav">
				<p>Chatbot.</p>
				<img src={assets.user_icon} alt="User Icon" />
			</div>

			<div className="main-container">
				{!showResult ? (
					<>
						<div className="greet">
							<p>
								<span>Hello</span>
							</p>
							<p>How can I help you today?</p>
						</div>
						<div className="cards">
							<div
								className="card"
								onClick={() =>
									handleCardClick(
										"Suggest beautiful places to see on an upcoming road trip"
									)
								}
							>
								<p>
									Suggest beautiful places
									to see on an upcoming road
									trip
								</p>
								<img
									src={assets.compass_icon}
									alt="Compass Icon"
								/>
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick(
										"Briefly summarize this concept: urban planning"
									)
								}
							>
								<p>
									Briefly summarize this
									concept: urban planning
								</p>
								<img
									src={assets.bulb_icon}
									alt="Bulb Icon"
								/>
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick(
										"Brainstorm team bonding activities for our work retreat"
									)
								}
							>
								<p>
									Brainstorm team bonding
									activities for our work
									retreat
								</p>
								<img
									src={assets.message_icon}
									alt="Message Icon"
								/>
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick(
										"Tell me about React JS and React Native"
									)
								}
							>
								<p>
									Tell me about React JS and
									React Native
								</p>
								<img
									src={assets.code_icon}
									alt="Code Icon"
								/>
							</div>
						</div>
					</>
				) : (
					<div className="result">
						<div className="result-title">
							<img
								src={assets.user_icon}
								alt="User Icon"
							/>
							<p>{recentPrompt}</p>
						</div>
						<div className="result-data">
							<img
								src={assets.gemini_icon}
								alt="Gemini Icon"
							/>
							{loading ? (
								<div className="loader">
									<hr />
									<hr />
									<hr />
								</div>
							) : (
								<p
									dangerouslySetInnerHTML={{
										__html: resultData,
									}}
								></p>
							)}
						</div>
					</div>
				)}

				<div className="main-bottom">
					<div className="search-box">
						<input
							type="text"
							placeholder="Enter a Prompt here"
							value={inputValue}
							onChange={handleInputChange}
						/>
						<div>
							<img
								src={assets.gallery_icon}
								alt="Gallery Icon"
							/>
							<img
								src={assets.mic_icon}
								alt="Mic Icon"
							/>
							{inputValue && (
								<img
									onClick={handleSend}
									src={assets.send_icon}
									alt="Send Icon"
								/>
							)}
						</div>
					</div>
					<p className="bottom-info">
						Please note: Responses provided by Gemini
						may sometimes be inaccurate or incomplete.
						Ensure that you double-check information,
						especially regarding people. Your privacy is
						important to us and is protected while using
						Gemini Apps.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Main;
