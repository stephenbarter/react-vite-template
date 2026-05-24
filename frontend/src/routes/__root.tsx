import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import type { JSX } from "react";

export const Route = createRootRoute({
	component: RootLayout,
});

function RootLayout(): JSX.Element {
	return (
		<>
			<Outlet />
			{import.meta.env.DEV && <TanStackRouterDevtools />}
		</>
	);
}
