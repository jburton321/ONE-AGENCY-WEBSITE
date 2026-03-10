import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import BlogCard4 from "@/components/shared/cards/BlogCard4";
import getBlogs from "@/libs/getBlogs";

const Blogs4 = () => {
	const blogs = getBlogs().slice(0, 3);
	return (
		<section className="tj-blog-section-four section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-3">
							<div className="sec-text">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
									// Latest news
								</span>
								<h2 className="sec-title text-anim">
									Tip and tricks for success
								</h2>
							</div>
							<div className="blog-button wow fadeInUp" data-wow-delay="0.3s">
								<ButtonPrimary text={"More blog"} url={"/blogs"} />
							</div>
						</div>
					</div>
				</div>
				<div className="row rg-30 leftSwipeWrap">
					{blogs?.length
						? blogs?.map((blog, idx) => (
								<div key={idx} className="col-xl-4 col-md-6">
									<BlogCard4 blog={blog} idx={idx} />
								</div>
						  ))
						: ""}
				</div>
			</div>
		</section>
	);
};

export default Blogs4;
