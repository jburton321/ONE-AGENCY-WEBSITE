import teamMembers from "../../public/fakedata/team-members";

const getTeamMembers = () => {
	return Array.isArray(teamMembers) ? teamMembers : [];
};

export default getTeamMembers;
