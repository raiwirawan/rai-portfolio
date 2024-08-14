"use client";
import Link from "next/link";

export default function GoPrevPageBtn({ children, ...props }: any) {
	return (
		<Link
			{...props}
			href=""
			onClick={() => {
				window.history.back();
			}}
			className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
		>
			{children}
		</Link>
	);
}
