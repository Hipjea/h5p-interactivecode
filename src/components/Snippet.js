import React from 'react';

function Snippet(props) {
    return (
        <section 
            id={`code-snippet-${props.id}`}
            className={"h5p-interactive-code-snippet code-snippet"}
        >
            {props.codeSnippet}
        </section>
    );
}

export default Snippet;