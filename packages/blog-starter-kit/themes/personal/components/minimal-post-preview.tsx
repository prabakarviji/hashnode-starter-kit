import Link from 'next/link';
import { User } from '../generated/graphql';
import { DateFormatter } from './date-formatter';

type Author = Pick<User, 'name'>;

type Props = {
	title: string;
	date: string;
	author: Author;
	slug: string;
	commentCount: number;
	tags: string[];
};

export const MinimalPostPreview = ({ title, date, slug, commentCount, tags }: Props) => {
	const postURL = `/${slug}`;

	return (
		<section className="flex flex-col items-start gap-1 ">
			<h2 className="text-xl leading-tight tracking-tight text-black dark:text-white hover:text-blue-500">
				<Link href={postURL}>{title}</Link>
			</h2>
			<p className="flex flex-row items-center gap-2 mb-1">
				<Link href={postURL} className="text-sm text-neutral-400 dark:text-neutral-200">
					<DateFormatter dateString={date} />
				</Link>
				{commentCount > 2 && (
					<>
						<span>&middot;</span>
						<Link href={postURL} className="text-sm text-neutral-600 dark:text-neutral-400">
							{commentCount} comments
						</Link>
					</>
				)}
			</p>
			<div className="flex flex-row flex-wrap gap-2">
				{tags.map((tag, index) => (
				<span key={index} className="bg-gray-100 text-gray-500 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
						{tag}
					</span>
				))}
			</div>
			<hr className="w-full border-t border-white dark:border-gray-700 my-2" />

		</section>
	);
};
