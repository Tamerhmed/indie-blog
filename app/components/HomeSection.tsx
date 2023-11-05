import { getAllBlogs } from '@/lib/helpers';
import Image from 'next/image';
import React from 'react';
import BlogItem from './BlogItem';

const HomeSection = async () => {

	const blogs = await getAllBlogs(6);
	console.log(blogs);

	return (
		<section className='w-full my-4'>
			<div className='xs:px-4 md:container mx-auto'>
				<div className='w-full flex xs:flex-col md:flex-row justify-center items-center'>
					<div className='py-4 w-full flex flex-col gap-3'>
						<h1 className='tracking-wide lg:text-6xl md:text-5xl xs:text-4xl font-semibold md:w-2/4 text-start text-gray-700'>
							Gain wisdom from the most accomplished individuals and strive for
							excellence.
						</h1>
						<p className='tracking my-2  md:text-2xl xs:text-md font-semibold md:w-3/4 xs:w-full text-start text-gray-600'>
							Master it through hands-on experience with a free, structured
							series of practical, step-by-step articles.
						</p>
					</div>
					<div className='md:w-4/4 xs:w-full md:mx-2 xs:my-2'>
						<Image
							src={
								'https://images.unsplash.com/photo-1522071820081-009f0129c71c'
							}
							width={300}
							height={200}
							alt='hero-image'
							className='w-full rounded-2xl drop-shadow-2xl'
						/>
					</div>
				</div>
				<hr className='p-3 my-4 w-full' />
				<div className='flex flex-col justify-center items-center'>
					<div className='p-4'>
						<h2 className='text-2xl font-semibold'>Recent Articles</h2>
					</div>
					<div className='flex w-full flex-wrap justify-center'>
						{blogs.map((blog)=> <BlogItem {...blog} key={blog.id}/>)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeSection;
