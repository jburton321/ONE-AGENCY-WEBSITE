import portfolio from "../../public/fakedata/portfolio";

const getPortfolio = () => {
	return Array.isArray(portfolio) ? portfolio : [];
};

export default getPortfolio;
