import blogs from "../../public/fakedata/blogs";

const getBlogs = () => {
	return Array.isArray(blogs) ? blogs : [];
};

export default getBlogs;
