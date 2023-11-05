
import { BlogItemType } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';


const BlogItem = (props: BlogItemType) => {
  return (
		<Card className='hover:border-slate-950 duration-500 flex flex-col  w-[400px] h-[600px] mx-4 my-2 rounded-lg'>
			<CardHeader>
				<Image
					width={400}
					height={100}
					className='h-48 rounded-sm'
					alt={props.title}
					src={
						props.imageUrl ??
						'https://unsplash.com/photos/macbook-pro-white-ceramic-mugand-black-smartphone-on-table-cckf4TsHAuw'
					}
				/>
			</CardHeader>
            <CardTitle className="p-3">
                {props.title}
            </CardTitle>
            <CardContent className="w-full text-slate-500">
                <p className="tracking-wide w-full px-2 py-1 text-left" dangerouslySetInnerHTML={{__html:props.description}}>
                {/* {props.description} */}
                </p>
            </CardContent>
            <CardFooter className="w-full h-full p-3">
                <button className="ml-auto mt-auto border-[1px] p-3 rounded-lg hover:bg-violet-600 hover:text-white duration-500">View more</button>
            </CardFooter>
		</Card>
	);
}

export default BlogItem
