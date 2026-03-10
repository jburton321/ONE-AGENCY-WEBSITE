"use client";
import BlogCard8 from "@/components/shared/cards/BlogCard8";
import getBlogs from "@/libs/getBlogs";
import { useState } from "react";

const Blogs8 = () => {
	const blogs = getBlogs().slice(0, 3);
	const [currentIndex, setCurrentIndex] = useState(0);
	const handleCurrentIndex = idx => {
		setCurrentIndex(idx);
	};
	return (
		<section className="h8-blog-section section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.2s">
								Latest news
							</span>
							<h2 className="sec-title text-anim">
								Tip and tricks for success
							</h2>
						</div>
					</div>
				</div>
				<div
					className="row rg-30 justify-content-center wow fadeInUp"
					data-wow-delay="0.3s"
				>
					<div className="col-12">
						<div className="h8-blog-wrapper">
							{blogs?.length
								? blogs?.map((blog, idx) => (
										<BlogCard8
											key={idx}
											blog={blog}
											idx={idx}
											handleCurrentIndex={handleCurrentIndex}
											currentIndex={currentIndex}
										/>
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blogs8;
