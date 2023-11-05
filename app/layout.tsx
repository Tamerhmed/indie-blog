import type { Metadata } from 'next';
import './globals.css';
import Provider from './components/Provider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export const metadata: Metadata = {
	title: 'Indie Blog',
	description: 'Blog app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className='min-h-screen flex flex-col'>
				<Provider>
					<Navbar />
					<main className='flex-1'>{children}</main>
					<Footer />
				</Provider>
			</body>
		</html>
	);
}
