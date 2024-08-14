"use client";

import Link from "next/link";

interface Dropdown {
	parent: string;
	childrens: Array<{
		label: string;
		href: string;
	}>;
}

export default function SidebarDropdown(props: Dropdown) {
	const handleDropdown = () => {
		const dropdown = document.querySelector("#dropdown-example");
		const ecommerceSvg = document.querySelector('[data-name="ecommerce-svg1"]');

		if (dropdown?.classList.contains("hidden")) {
			dropdown?.classList.remove("hidden");
			ecommerceSvg?.classList.add("rotate-[180deg]");
		} else {
			dropdown?.classList.add("hidden");
			ecommerceSvg?.classList.remove("rotate-[180deg]");
		}
	};

	return (
		<li>
			<button
				type="button"
				className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
				aria-controls="dropdown-example"
				data-collapse-toggle="dropdown-example"
				onClick={() => handleDropdown()}
			>
				<svg
					className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 18 21"
				>
					<path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
				</svg>
				<span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
					{props.parent}
				</span>
				<svg
					className="w-3 h-3 transition-transform"
					data-name="ecommerce-svg1"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 6"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="m1 1 4 4 4-4"
					/>
				</svg>
			</button>
			<ul id="dropdown-example" className="hidden py-2 space-y-2">
				{props.childrens.map((child, i) => {
					return (
						<li key={i}>
							<Link
								href={child.href}
								className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
							>
								{child.label}
							</Link>
						</li>
					);
				})}
			</ul>
		</li>
	);
}
