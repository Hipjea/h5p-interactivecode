import React from 'react';
import ReactDOM from 'react-dom';
import { H5PContext } from './H5PContext';
import './app.css';
import Main from './components/Main';
import { getLanguageEval, settings } from './utils';
import 'klipse/dist/codemirror.css';

// Load the H5P library
H5P = H5P || {};
H5P.InteractiveCode = (function () {
    function Wrapper(params, contentId, extras = {}) {
        // Initialize event inheritance
        H5P.EventDispatcher.call(this);

        this.wrapper = null;
        this.id = contentId;
        this.params = params;

        const customId = `code-snippet-${contentId}`;
        const language = getLanguageEval(this.params.programmingLanguage);
        const snippetWidth = `${this.params.snippetWidth}${this.params.snippetWidthUnit}`;

        const createElements = () => {
            const wrapper = document.createElement('div');
            wrapper.classList.add('h5p-interactive-code-wrapper');
            this.wrapper = wrapper;
      
            ReactDOM.render(
                <H5PContext.Provider value={this}>
                    <Main
                        {...this.params}
                        id={contentId}
                    />
                </H5PContext.Provider>,
                this.wrapper
            );
        };

        this.attach = ($container) => {
            if (!this.wrapper) {
                createElements();
            }
            // Append elements to DOM
            $container[0].appendChild(this.wrapper);
            $container[0].classList.add('h5p-interactive-code');

            const klipsify = new Promise((resolve, reject) => {
                resolve(klipse.plugin.klipsify(document.getElementById(customId), settings, language));
            });
            klipsify.then(() => {
                const root = document.documentElement;
                root.style.setProperty('--snippet-width', snippetWidth);
            });
        };
    }

    return Wrapper;
})();
