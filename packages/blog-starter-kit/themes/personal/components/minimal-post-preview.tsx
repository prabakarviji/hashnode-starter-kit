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
};

export const MinimalPostPreview = ({ title, date, slug, commentCount }: Props) => {
	const postURL = `/${slug}`;

	return (
		<section className="flex flex-col items-start  py-2 px-4 hover:bg-white rounded-2xl">
			<h3 className="text-base leading-tight tracking-tight text-black dark:text-white">
				<Link href={postURL}>{title}</Link>
			</h3>
			<p className="flex flex-row items-center gap-2">
				<Link href={postURL} className="text-xs text-neutral-600 dark:text-neutral-400">
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
		</section>
	);
};
