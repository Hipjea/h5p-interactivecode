import React from 'react';
import { H5PContext } from '../H5PContext';
import Snippet from './Snippet';

export default class Main extends React.Component {
    createMarkup() {
        return {__html: this.props.instruction};
    }

    render() {
        return (
            <div className="h5p-interactive-code-main">
                <p className="instruction" dangerouslySetInnerHTML={this.createMarkup()}></p>
                <div className="h5p-interactive-code-snippet-wrapper">
                    <Snippet 
                        id={this.props.id}
                        programmingLanguage={this.props.programmingLanguage}
                        codeSnippet={this.props.codeSnippet}
                    />
                </div>
            </div>
        );
    }
}

Main.contextType = H5PContext;