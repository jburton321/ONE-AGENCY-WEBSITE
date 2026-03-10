import HeroInner from "@/components/sections/heros/HeroInner";
import ServicesDetailsPrimary from "@/components/sections/services/ServicesDetailsPrimary";
import getALlServices from "@/libs/getALlServices";

const ServiceDetailsMain = ({ currentItemId }) => {
	const items = getALlServices();
	const currentId = currentItemId;
	const currentItem = items?.find(({ id }) => currentId === id);
	const { title } = currentItem || {};
	return (
		<div>
			<HeroInner
				title={title ? title : "Service details"}
				text={title ? title : "Service details"}
				breadcrums={[{ name: "Services", path: "/services" }]}
				noNeedTitleAnim={true}
			/>
			<ServicesDetailsPrimary option={{ currentItem, items, currentId }} />
		</div>
	);
};

export default ServiceDetailsMain;
