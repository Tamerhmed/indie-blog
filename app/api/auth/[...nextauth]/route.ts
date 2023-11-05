import NextAuth, { AuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDb } from '@/lib/helpers';
import prisma from '@/prisma';
import bcrypt from 'bcrypt';

export const authOptions: AuthOptions = {
	// Configure one or more authentication providers
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
		CredentialsProvider({
			// The name to display on the sign in form (e.g. 'Sign in with...')
			name: 'Credentials',

			credentials: {
				email: { label: 'Email', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				if (!credentials || !credentials.email || !credentials.password) {
					return null;
				}

                try {
                    await connectToDb();
                    const user = await prisma.user.findFirst({where: {email: credentials.email},
                    });

                    if(!user) {
                        return null;
                    }

                    if(!user.password) {
                        return null
                    }

                    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

                    if(!isPasswordCorrect) {
                        return null;
                    }

                    return {...user, id: user.id}
                } catch (error) {
                    return null;
                } finally {
                    await prisma.$disconnect();
                }
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
