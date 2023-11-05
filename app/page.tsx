import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import HomeSection from './components/HomeSection';

export default async function Home() {
	return (
		<main>
			<HomeSection />
		</main>
	);
}
