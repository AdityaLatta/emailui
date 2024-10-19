"use client";
import { Inter } from "next/font/google";
import "./globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const inter = Inter({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600"],
});

export default function RootLayout({ children }) {
	const [queryClient] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false,
					staleTime: 1000 * 60,
					cacheTime: 1000 * 60 * 10,
					retry: 3,
				},
			},
		})
	);

	return (
		<html lang="en">
			<head>
				<title>Email UI</title>
			</head>
			<body className={`${inter.className} p-8 lg:p-10`}>
				<QueryClientProvider client={queryClient}>
					{children}
				</QueryClientProvider>
			</body>
		</html>
	);
}
