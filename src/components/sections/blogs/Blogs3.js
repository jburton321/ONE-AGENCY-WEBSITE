import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import BlogCard3 from "@/components/shared/cards/BlogCard3";
import getBlogs from "@/libs/getBlogs";

const Blogs3 = () => {
	const blogs = getBlogs().slice(0, 3);
	return (
		<section className="tj-blog-section-three section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-2">
							<div className="sec-text">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
									Latest news
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
				<div className="row rg-30  rightSwipeWrap">
					{blogs?.length
						? blogs?.map((blog, idx) => (
								<div key={idx} className="col-xl-4 col-md-6">
									<BlogCard3 blog={blog} idx={idx} />
								</div>
						  ))
						: ""}
				</div>
			</div>
		</section>
	);
};

export default Blogs3;
