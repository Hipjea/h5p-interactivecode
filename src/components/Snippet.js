import React from 'react';
import { decodeHtmlEntities } from '../utils';

function Snippet(props) {
    return (
        <section 
            id={`code-snippet-${props.id}`}
            className={"h5p-interactive-code-snippet code-snippet"}
        >
            {decodeHtmlEntities(props.codeSnippet)}
        </section>
    );
}

export default Snippet;