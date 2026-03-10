import navItems from "../../public/fakedata/nav-items";
import getALlServices from "./getALlServices";
import getSolutions from "./getSolutions";

/** Solutions megamenu: 8 outcome-focused items from reference (oneagency.com) */
const getSolutionsSubmenu = () => {
	const solutions = getSolutions() || [];
	return solutions.map((s) => ({
		id: s.id,
		name: s.title,
		icon: s.iconName || "tji-optimization",
		path: s.path || `/solutions/${s.slug}`,
	}));
};

/** Services megamenu: 11 channel/tactic items from reference (oneagency.com) */
const getServicesSubmenu = () => {
	const services = getALlServices() || [];
	return services.map((s) => ({
		id: s.id,
		name: s.title,
		icon: s.iconName || "tji-optimization",
		path: `/services/${s.id}`,
	}));
};

const getNavItems = () => {
	const base = navItems ?? [];

	// Services (index 2): reference Services list (11 items)
	const servicesItem = base[2]
		? { ...base[2], submenu: getServicesSubmenu() }
		: base[2];

	// Solutions: reference Solutions list (8 items) — different from Services
	const solutionsItem = {
		id: "solutions",
		name: "Solutions",
		path: "/solutions",
		submenu: getSolutionsSubmenu(),
	};

	return [
		...(base.slice(0, 2)),
		servicesItem,
		solutionsItem,
		...(base.slice(3)),
	];
};

export default getNavItems;