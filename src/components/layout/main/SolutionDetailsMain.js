import HeroInner from "@/components/sections/heros/HeroInner";
import ServicesDetailsPrimary from "@/components/sections/services/ServicesDetailsPrimary";
import getSolutions from "@/libs/getSolutions";

const SolutionDetailsMain = ({ slug }) => {
	const items = getSolutions();
	const currentItem = items?.find((s) => s.slug === slug);
	const { title } = currentItem || {};
	return (
		<div>
			<HeroInner
				title={title ? title : "Solution details"}
				text={title ? title : "Solution details"}
				breadcrums={[{ name: "Solutions", path: "/solutions" }]}
				noNeedTitleAnim={true}
			/>
			<ServicesDetailsPrimary
				option={{
					currentItem,
					items,
					currentId: currentItem?.id,
					variant: "solution",
				}}
			/>
		</div>
	);
};

export default SolutionDetailsMain;
