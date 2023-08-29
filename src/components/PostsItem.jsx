export default function PostsItem({id, title, content}){
    return (                 
        <>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{Date('D/M/Y')}</time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Natan</p>
            <a 
                className="text-lg font-semibold text-gray-900 dark:text-white" 
                href={'/post/' + id}
            >
                    {title}</a>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{content}</p>
        </>
    )
}