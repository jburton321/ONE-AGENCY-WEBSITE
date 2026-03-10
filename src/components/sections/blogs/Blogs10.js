import BlogCard10 from "@/components/shared/cards/BlogCard10";
import getBlogs from "@/libs/getBlogs";

const Blogs10 = () => {
	const blogs = getBlogs().slice(0, 5);

	return (
		<section className="h10-blog-section section-space">
			{/* jdflkjalkfj */}
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="sec-heading style-2 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								[ TRANSFORMATIVE SOLUTION ]
							</span>
							<h2 className="sec-title text-anim">
								Tip and tricks for success
							</h2>
						</div>

						<div className="h10-blog_wrap">
							{blogs?.length
								? blogs?.map((blog, idx) => (
										<BlogCard10 key={idx} blog={blog} idx={idx} />
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blogs10;
