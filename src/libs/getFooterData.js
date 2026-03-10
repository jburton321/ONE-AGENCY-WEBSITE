import footerData from "../../public/fakedata/footer-data.json";

const getFooterData = () => {
	return footerData ?? {};
};

export default getFooterData;
