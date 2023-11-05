import Link from 'next/link';

const Logo = () => {
	return (
		<Link
			href={'/'}
			className='text-gray-600 text-lg font-extrabold tracking-wider'
		>
			<span className='text-blue-600 font-bold text-2xl'>I</span>
			{'ndie Blog'}
		</Link>
	);
};

export default Logo;
