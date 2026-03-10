import BlogCard6 from "@/components/shared/cards/BlogCard6";
import getBlogs from "@/libs/getBlogs";

const Blogs6 = () => {
	const blogs = getBlogs().slice(1, 3);
	return (
		<section className="h6-blog-section section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-2 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.2s">
								// Latest news
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
					{blogs?.length
						? blogs?.map((blog, idx) => (
								<div key={idx} className="col-xl-6 col-md-12">
									<BlogCard6 blog={blog} idx={idx} />
								</div>
						  ))
						: ""}
				</div>
			</div>
			<div className="h6-blog-shape move-anim">
				<img src="/images/shapes/h4-hero-shape-1.svg" alt="img" />
			</div>
		</section>
	);
};

export default Blogs6;
