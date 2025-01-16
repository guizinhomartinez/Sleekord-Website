import { useEffect, useState } from "react";

function FetchPosts(file:string) {
    const [markdownContent, setMarkdownContent] = useState('');
    let fileFetcher:string = '/markdown/' + file + '.md';

    useEffect(() => { fetch(fileFetcher).then(response => response.text()).then(setMarkdownContent); });

    return markdownContent;
}

export default FetchPosts;