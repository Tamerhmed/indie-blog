"use client";

import React from 'react'
import Logo from './Logo';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const authlinks = [
	{ id: '1-1', name: 'Blogs', url: '/blogs' },
	{ id: '1-2', name: 'Write', url: '/blogs/add' },
	{ id: '1-3', name: 'Profile', url: '/profile' },
	{ id: '1-4', name: 'Search', url: '/search' },
];

const nonAuthLinks = [
	{ id: '2-1', name: 'Blogs', url: '/blogs' },
	{ id: '2-2', name: 'Login', url: '/api/auth/signin' },
	{ id: '2-3', name: 'Register', url: '/register' },
];

const Navbar = () => {
    const { status } = useSession();
    console.log(status)
  return (
		<section className='sticky w-full bg-gray-100'>
			<nav className='flex items-center justify-between px-8 py-4 bg-transparent'>
				<div>
					<Logo />
				</div>
				<div className='flex items-center gap-4 p-2'>
					{(status === 'authenticated' ? authlinks : nonAuthLinks).map(
						(item) => (
							<Link
								className='text-gray-500 text-lg font-semibold hover:text-gray-900 duration-300'
								href={item.url}
								key={item.id}
							>
								{item.name}
							</Link>
						)
					)}
				</div>
			</nav>
		</section>
	);
}

export default Navbar
