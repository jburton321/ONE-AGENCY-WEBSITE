import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import BlogCard5 from "@/components/shared/cards/BlogCard5";
import getBlogs from "@/libs/getBlogs";

const Blogs5 = () => {
	const blogs = getBlogs().slice(0, 3);
	return (
		<section className="h5-blog-section section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-4">
							<div className="sec-text">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.2s">
									Latest news
								</span>
								<h2 className="sec-title text-anim">
									Tip and tricks for success
								</h2>
							</div>
							<div className="desc wow fadeInUp" data-wow-delay="0.4s">
								<p>
									In today's dynamic business environment, the key to success
									strategics..
								</p>
							</div>
							<div className="blog-button wow fadeInUp" data-wow-delay="0.6s">
								<ButtonPrimary text={"More blog"} url={"/blogs"} />
							</div>
						</div>
					</div>
				</div>
				<div className="row rg-30 ">
					{blogs?.length
						? blogs?.map((blog, idx) => (
								<div key={idx} className="col-xl-4 col-md-6">
									<BlogCard5 blog={blog} idx={idx} />
								</div>
						  ))
						: ""}
				</div>
			</div>
		</section>
	);
};

export default Blogs5;
