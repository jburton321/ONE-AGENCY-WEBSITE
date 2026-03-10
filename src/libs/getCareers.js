import careers from "../../public/fakedata/careers";

const getCareers = () => {
	return Array.isArray(careers) ? careers : [];
};

export default getCareers;
