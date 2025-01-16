import { useEffect, useState } from "react";

function FetchPosts(file:string) {
    const [markdownContent, setMarkdownContent] = useState('');
    let fileFetcher:string = '/' + file + '.md';

    useEffect(() => { fetch(fileFetcher).then(response => response.text()).then(setMarkdownContent); });

    return markdownContent;
}

export default FetchPosts;