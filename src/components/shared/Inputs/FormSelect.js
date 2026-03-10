"use client";
import { useEffect } from "react";

const FormSelect = ({ id, name, className, defaultValue, items }) => {
	useEffect(() => {
		let instance;

		import("../../../libs/nice-select2").then(({ default: NiceSelect }) => {
			const el = document.getElementById(id || "niceselect");

			// 🧹 Clean up any previously injected markup before initializing
			if (el && el.nextElementSibling?.classList.contains("nice-select")) {
				el.nextElementSibling.remove();
				el.classList.remove("nice-select", "open"); // reset classes
			}

			if (el) {
				instance = new NiceSelect(el, {
					placeholder: defaultValue || "Select One",
				});
			}
		});

		// ✅ Cleanup on unmount
		return () => {
			const el = document.getElementById(id || "niceselect");
			if (instance && typeof instance.destroy === "function") {
				instance.destroy();
			}
			// Remove leftover markup if any
			if (el && el.nextElementSibling?.classList.contains("nice-select")) {
				el.nextElementSibling.remove();
				el.classList.remove("nice-select", "open");
			}
		};
	}, [id, defaultValue, items]); // re-run if items change

	return (
		<select
			name={name || "niceselect"}
			id={id || "niceselect"}
			className={className || "nice-select"}
			defaultValue={defaultValue || ""}
			style={{ display: "none" }}
		>
			{items?.map((item, idx) => (
				<option key={idx} value={item?.value}>
					{item?.name}
				</option>
			))}
		</select>
	);
};

export default FormSelect;
