import services from "../../public/fakedata/services";

const getALlServices = () => {
	return Array.isArray(services) ? services : [];
};

export default getALlServices;
