"use client";

import AnimatedCIQLogo from "@/components/shared/AnimatedCIQLogo";

export default function CIQAgents() {
	return (
		<section className="ciq-agents-section">
			<div className="ciq-agents-inner">
				<div className="sec-heading sec-heading-centered text-center mb-10 sm:mb-14">
					<span className="sub-title">CONVERSIONIQ</span>
					<h2 className="sec-title text-anim">
						<span className="block">Six AI Agents.</span>
						<span className="block">One Unstoppable Revenue System.</span>
					</h2>
				</div>
				<div className="canvas">
				<div className="logo-box">
					<AnimatedCIQLogo active={true} className="ciq-logo-svg" />
				</div>

				<div className="card">
					<div className="content-wrapper">
						<div className="label">Central Command</div>
						<h2>Maestri</h2>
						<p>Orchestrates the entire revenue system, coordinating all agents and ensuring seamless handoffs between lead capture and conversion.</p>
					</div>
				</div>

				<div className="card top-mid">
					<div className="content-wrapper">
						<div className="label">The Datafinding</div>
						<h2>Dotti</h2>
						<p>Surfaces the right data at the right time, connecting first-party and third-party signals to power intelligent decision-making.</p>
					</div>
				</div>

				<div className="card">
					<div className="content-wrapper">
						<div className="label">Creative Asset Generator</div>
						<h2>Matti</h2>
						<p>Produces high-converting creative assets on demand — ads, landing pages, and messaging tailored to each prospect.</p>
					</div>
				</div>

				<div className="card">
					<div className="content-wrapper">
						<div className="label">Conversation Engine</div>
						<h2>Chatti</h2>
						<p>Engages leads in real-time conversations, qualifying and nurturing them through personalized dialogue until they convert.</p>
					</div>
				</div>

				<div className="card bot-mid">
					<div className="content-wrapper">
						<div className="label">Omnichannel Orchestrator</div>
						<h2>Omni</h2>
						<p>Manages touchpoints across email, SMS, chat, and more — ensuring consistent, timely engagement at every stage.</p>
					</div>
				</div>

				<div className="card">
					<div className="content-wrapper">
						<div className="label">Audit & Optimization</div>
						<h2>Auditti</h2>
						<p>Continuously analyzes performance, identifies bottlenecks, and recommends optimizations to maximize conversion rates.</p>
					</div>
				</div>
				</div>
			</div>
		</section>
	);
}
