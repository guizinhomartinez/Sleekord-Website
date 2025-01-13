import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function Overlay() {
  return (
    <Button variant="secondary" className="fixed top-[1em] h-9 shadow-md right-[17.5em] backdrop-blur-md sm:flex hidden" style={{ zIndex: 60 }} onClick={() => window.history.back()}>
      Go Back
      <ChevronRight />
    </Button>
  );
}

function FirstPost() {
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        fetch('src/pages/posts/markdown/firstPost.md').then(response => response.text()).then(setMarkdownContent);
    }, []);

    return (
        <div className='antialiased max-w-3xl mt-20 mx-auto whitespace-pre-wrap' style={{ fontFamily: "Inter" }}>
            <Overlay />
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
            <div className='p-3'></div>
        </div>
    );
}

export default FirstPost;
