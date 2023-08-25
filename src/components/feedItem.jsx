import React from "react";

export default function FeedItem({id, title, content}){
    return(
        <div
            className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
        >
            <div className="w-full p-4">
                <a
                    href={'/post/' + id}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h3 className="text-lg md:text-xl dark:text-white mb-1 md:mb-2 font-semibold">{title}</h3>
                </a>
                <div 
                    className="overflow-hidden h-24"
                >
                    <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
                        <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                            {content}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}