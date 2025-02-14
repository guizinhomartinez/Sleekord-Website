import ReactMarkdown from "react-markdown";
import Overlay from "./Overlay";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import FetchPosts from "./fetchPosts";

function PostStyle(file: string = '') {
    const postContent = FetchPosts(file);
    const [parent] = useAutoAnimate();

    return (
        <div className='flex place-content-center mx-3 antialiased'>
            <div className='max-w-3xl mt-20 mx-3 whitespace-pre-wrap' style={{ fontFamily: "Inter" }}>
                <Overlay />
                <div ref={parent}>
                    {postContent ?
                        <ReactMarkdown>
                            {postContent}
                        </ReactMarkdown>
                        : <div className='grid mt-10 dark:bg-neutral-600 bg-slate-300 rounded-lg px-12 py-6 shadow-md dark:border-neutral-800 border-neurtal-300 border-2 border-solid'>
                            <span>Loading...</span>
                            <span className="loader mt-10"></span>
                        </div>}
                </div>
                <div className='p-3'></div>
            </div>
        </div>
    )
}

export default PostStyle