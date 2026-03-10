import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import BlogCard1 from "@/components/shared/cards/BlogCard1";
import getBlogs from "@/libs/getBlogs";

const Blogs1 = () => {
	const blogs = getBlogs().slice(0, 4);
	return (
		<section className="tj-blog-section with-shape">
			<div className="tj-blog-section-wrap">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="sec-heading">
								<div className="sec-text">
									<span
										className="sub-title wow fadeInDown"
										data-wow-delay="0.1s"
									>
										Latest posts
									</span>
									<h2 className="sec-title text-anim">
										Insights and updates from ONE Agency
									</h2>
								</div>
								<div
									className="blog-button d-none d-lg-inline-flex wow fadeInDown"
									data-wow-delay="0.3s"
								>
									<ButtonPrimary text={"Read the blog"} url={"/blogs"} />
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="blog-wrapper">
								{blogs?.length
									? blogs?.map((blog, idx) => (
											<BlogCard1 key={idx} blog={blog} idx={idx} />
									  ))
									: ""}
							</div>
							<div
								className="blog-button d-lg-none text-center wow fadeInUp"
								data-wow-delay="0.5s"
							>
								<ButtonPrimary text={"Read the blog"} url={"/blogs"} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blogs1;
