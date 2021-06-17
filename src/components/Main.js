import React from 'react';
import { H5PContext } from '../H5PContext';
import Snippet from './Snippet';

export default class Main extends React.Component {
    render() {
        return (
            <div className="h5p-interactive-code-main">
                <p className="instruction">{this.props.instruction}</p>
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