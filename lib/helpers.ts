import prisma from '@/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const connectToDb = async () => {
	try {
		await prisma.$connect();
	} catch (err: any) {
		throw new Error(err);
	}
};

export const generateErrorMessage = (data: any, status: number) => {
	return NextResponse.json(
		{ message: 'Error', ...data },
		{ status, statusText: 'Error' }
	);
};
export const generateSuccessMessage = (data: any, status: number) => {
	return NextResponse.json(
		{ message: 'Success', ...data },
		{ status, statusText: 'OK' }
	);
};

export const getAllBlogs = async (count?: number) => {
	const res = await fetch('http://localhost:3000/api/blogs', { cache: 'no-store' });
    const data = await res.json();

    if(count) {
        return data.blogs.slice(0,6);
    }

    return data.blogs;
};
