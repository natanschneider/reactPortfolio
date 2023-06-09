import React from 'react';

function PortfolioItem({ title, imgUrl, stack, link, repository }) {
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
		>
			<img
				src={imgUrl}
				alt="projectImage"
				className="w-full h-36 md:h-48 object-cover cursor-pointer"
			/>
			<div className="w-full p-4">
				<h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{title}</h3>
				<p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
					{stack.map(item => (
						<span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                     {item}
                  </span>
					))}
				</p>
			</div>
			<a
				href={repository}
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="w-full flex justify-center border-t-2 border-stone-900 dark:border-white py-2">
					<p className="text-bold text-lg md:text-xl dark:text-white">
						Repository
					</p>
				</div>
			</a>
		</a>
	)
}

export default PortfolioItem;