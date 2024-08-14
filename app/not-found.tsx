import GoPrevPageBtn from "@/components/GoPrevPageBtn";

export default function NotFound() {
	return (
		<div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
			<div className="rounded-lg bg-white p-8 text-center shadow-xl">
				<h1 className="mb-4 text-4xl font-bold text-black">404</h1>
				<p className="text-gray-600">
					Oops! The page you are looking for could not be found.
				</p>
				<GoPrevPageBtn>Return to the previous page</GoPrevPageBtn>
			</div>
		</div>
	);
}
