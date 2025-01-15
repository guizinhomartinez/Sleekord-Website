import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Overlay from '@/components/Overlay'

function SecondPost() {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => { fetch('/secondPost.md').then(response => response.text()).then(setMarkdownContent); });

  return (
    <div className='flex place-content-center mx-3 antialiased'>
      <div className='max-w-3xl mt-20 mx-3 whitespace-pre-wrap' style={{ fontFamily: "Inter" }}>
        <Overlay />
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
        <div className='p-3'></div>
      </div>
    </div>
  );
}

export default SecondPost;
