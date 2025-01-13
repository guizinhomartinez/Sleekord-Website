import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';

const ThirdPost = () => {
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        fetch('/markdown/thirdPost.md').then(response => response.text()).then(setMarkdownContent);
    }, []);

    return (
        <div className='antialiased max-w-3xl mt-20 mx-auto whitespace-pre-wrap' style={{ fontFamily: "Inter" }}>
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
            <div className='p-3'></div>
        </div>
    );
};

export default ThirdPost;