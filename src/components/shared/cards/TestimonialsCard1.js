"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";

const TestimonialsCard1 = ({ testimonial }) => {
	const { authorName, authorDesig, desc, img } = testimonial ? testimonial : {};
	const [modalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		const onKey = (e) => {
			if (e.key === "Escape") setModalOpen(false);
		};
		if (modalOpen) {
			document.addEventListener("keydown", onKey);
			document.body.style.overflow = "hidden";
		}
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [modalOpen]);

	const handleOverlayClick = (e) => {
		if (e.target === e.currentTarget) setModalOpen(false);
	};

	return (
		<div className="testimonial-item">
			<div className="testimonial-content">
				<div className="testimonial-quote">
					<i className="tji-right-quote"></i>
				</div>
				<div className="desc">
					<p className="line-clamp-2">{desc}</p>
					<button
						type="button"
						onClick={() => setModalOpen(true)}
						className="mt-2 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline focus:outline-none focus:underline"
					>
						Read more
					</button>
				</div>
			</div>
			<div className="tj-testimonial-author">
				<div className="author-images">
					<Image
						src={img ? img : "/images/testimonial/h1-test-1.webp"}
						alt="Images"
						width={97}
						height={98}
					/>
				</div>
				<div className="author-content">
					<div className="author-rating">
						<div className="star-ratings">
							<div className="fill-ratings" style={{ width: "100%" }}>
								<span>★★★★★</span>
							</div>
							<div className="empty-ratings">
								<span>★★★★★</span>
							</div>
						</div>
					</div>
					<div className="author-text">
						<h4 className="author-name">{authorName}</h4>
						<span className="sub-title">{authorDesig}</span>
					</div>
				</div>
			</div>

			{modalOpen &&
				createPortal(
					<div
						onClick={handleOverlayClick}
						className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
						style={{
							backgroundColor: "rgba(5, 18, 41, 0.7)",
							backdropFilter: "blur(10px)",
						}}
					>
						<div
							className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl"
							onClick={(e) => e.stopPropagation()}
							style={{ backgroundColor: "#fff" }}
						>
							<div className="relative px-6 sm:px-8 py-6 sm:py-8">
								<button
									onClick={() => setModalOpen(false)}
									className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
								>
									<X size={16} className="text-slate-500" />
								</button>
								<div className="pr-10">
									<div className="flex items-center gap-2 mb-4">
										<i className="tji-right-quote text-2xl text-blue-500/60" />
										<span className="text-xs font-bold uppercase tracking-wider text-blue-600">Client review</span>
									</div>
									<p className="text-slate-700 leading-relaxed mb-6">{desc}</p>
									<div className="flex items-center gap-4">
										<Image
											src={img || "/images/testimonial/h1-test-1.webp"}
											alt={authorName || ""}
											width={48}
											height={48}
											className="rounded-full object-cover"
										/>
										<div>
											<h4 className="font-semibold text-slate-900">{authorName}</h4>
											<span className="text-sm text-slate-500">{authorDesig}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>,
					document.body
				)}
		</div>
	);
};

export default TestimonialsCard1;
