// src/components/LandingPage.jsx
import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<div className="landing">
			{/* Header */}
			<header className="header">
				<div className="logo">Chatbot.</div>

				<Link to="/chatbot">
					<button className="cta-button">
						Get Started
					</button>
				</Link>
			</header>

			{/* Hero Section */}
			<section className="hero" id="home">
				<h1>Welcome to Our Amazing Platform</h1>
				<p>
					Your solution for all your needs, all in one
					place.
				</p>
				<Link to="/chatbot">
					<button className="cta-button">
						Get Started
					</button>
				</Link>
			</section>

			{/* Services Section */}
			<section className="services" id="services">
				<h2>Our Chatbot Services</h2>
				<div className="service-cards">
					<div className="service-card">
						<h3>AI Conversations</h3>
						<p>
							Our advanced chatbot provides natural,
							AI-powered conversations just like
							ChatGPT, helping users get answers,
							solve problems, and have engaging
							interactions.
						</p>
					</div>
					<div className="service-card">
						<h3>24/7 Customer Support</h3>
						<p>
							With our chatbot, you can offer
							round-the-clock support, responding to
							customer queries anytime, just like
							ChatGPT's continuous availability.
						</p>
					</div>
					<div className="service-card">
						<h3>Advanced Language Understanding</h3>
						<p>
							Leveraging AI language models similar
							to ChatGPT, our chatbot understands
							complex queries and provides accurate,
							context-aware responses.
						</p>
					</div>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className="cta-section">
				<h2>Ready to take your business to the next level?</h2>
				<button className="cta-button">Contact Us</button>
			</section>

			{/* Footer */}
			<footer className="footer">
				<p>&copy; 2024 YourCompany. All rights reserved.</p>
			</footer>
		</div>
	);
};

export default LandingPage;
