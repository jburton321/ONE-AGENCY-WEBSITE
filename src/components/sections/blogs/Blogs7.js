import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import BlogCard7 from "@/components/shared/cards/BlogCard7";
import getBlogs from "@/libs/getBlogs";

const Blogs7 = () => {
	const blogs = getBlogs().slice(0, 4);
	return (
		<section className="tj-blog-section h7-blog">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading h7-section-heading style-4">
							<div className="sec-text">
								<span
									className="sub-title wow fadeInDown"
									data-wow-delay="0.1s"
								>
									Latest news
								</span>
								<h2 className="sec-title text-anim">
									Tip and tricks for success
								</h2>
							</div>
							<div
								className="blog-button d-none d-lg-inline-flex wow fadeInDown"
								data-wow-delay="0.3s"
							>
								<ButtonPrimary text={"Explore more"} url={`/blogs`} />
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="blog-wrapper h7-blog-wrapper">
							{blogs?.length
								? blogs?.map((blog, idx) => (
										<BlogCard7 key={idx} blog={blog} idx={idx} />
								  ))
								: ""}
						</div>
						<div
							className="blog-button d-lg-none text-center wow fadeInUp"
							data-wow-delay="0.9s"
						>
							<ButtonPrimary text={"Explore more"} url={`/blogs`} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blogs7;
