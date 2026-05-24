import type { JSX } from "react";

function App(): JSX.Element {
	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center">
			<div className="text-center">
				<h1 className="text-4xl font-bold text-gray-900">Hello World</h1>
				<p className="mt-2 text-gray-500">Your app starts here.</p>
			</div>
		</div>
	);
}

export default App;
