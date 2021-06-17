export function getLanguageEval(programmingLanguage) {
    const languageEval = {
        'javascript': 'eval-javascript',
        'python': 'eval-python-client',
        'ruby': 'eval-ruby',
        'cpp': 'eval-cpp',
        'php': 'eval-php',
        'sql': 'eval-sql'
    }
    return languageEval[programmingLanguage] || languageEval[0];
}

export const settings = {
    selector_eval_js: '.code-snippet', // css selector for the html elements you want to klipsify
};