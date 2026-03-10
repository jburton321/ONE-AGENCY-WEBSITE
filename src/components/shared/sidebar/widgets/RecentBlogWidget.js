import getBlogs from "@/libs/getBlogs";
import sliceText from "@/libs/sliceText";
import Image from "next/image";
import Link from "next/link";

const RecentBlogWidget = () => {
	const recentBlogs = getBlogs()
		?.filter(({ isBlogQuote }) => !isBlogQuote)
		?.slice(0, 3);

	return (
		<div className="tj-sidebar-widget wow fadeInUp" data-wow-delay="0.3s">
			<h5 className="tj-sidebar-widget-title">Recent Post</h5>
			<div className="sidebar-recent-post">
				{recentBlogs?.length
					? recentBlogs?.map(
							({ id, detailsImg, title, blogTopList, comments, date }, idx) => (
								<div
									key={idx}
									className="single-post d-flex align-items-center"
								>
									<div className="post-image">
										<Link href={`/blogs/${id}`}>
											<Image
												src={
													detailsImg
														? detailsImg
														: "/images/blog/tj-blog-1.webp"
												}
												alt="blog-image"
												width={870}
												height={498}
											/>
										</Link>
									</div>
									<div className="post-header">
										<h6 className="title-link">
											<Link href={`/blogs/${id}`}>
												{sliceText(title, 32, true)}
											</Link>
										</h6>
										<span className="date">{date}</span>
									</div>
								</div>
							)
					  )
					: ""}
			</div>
		</div>
	);
};

export default RecentBlogWidget;
