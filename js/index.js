'use strict';

var container = document.querySelector('#container');

var DisplayContainer = React.createClass({
    displayName: 'DisplayContainer',

    updateValue: function updateValue(preview) {
        this.setState({ value: preview });
    },
    getInitialState: function getInitialState() {
        return {
            value: '# Style your text like a pro  \n## Create readme files that ' + 'don\'t look like crap  \n### __Be__ **bold**  \n#### _Show_ *emphasis*\n\n' + '![embed images](https://goo.gl/KTFRD4) ![quincy](https://goo.gl/doXmnN)' + '\nEnd a line with 2 spaces  \nto start a new line.  \n\nWrite lists:' + '\n1. item1\n2. item2\n3. item3\n\nWith ease:\n* easy\n* normal\n* ' + 'hard\n\n```\ntype.code(inMarkdown) {\n  likeThis();\n}\n```\n\n' + 'Take care,  \n*[bnoden](https://freecodecamp.com/bnoden)*'
        };
    },
    rawMarkup: function rawMarkup(value) {
        var rawMarkup = marked(value, { sanitize: true });
        return { __html: rawMarkup };
    },
    render: function render() {
        return React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
                'div',
                { className: 'col-xs-6 col-md-4' },
                React.createElement(RawInput, { value: this.state.value, updateValue: this.updateValue })
            ),
            React.createElement(
                'div',
                { className: 'col-xs-6 col-md-8' },
                React.createElement('span', { dangerouslySetInnerHTML: this.rawMarkup(this.state.value) })
            )
        );
    }
});

var RawInput = React.createClass({
    displayName: 'RawInput',

    update: function update(preview) {
        preview = this.refs.inputValue.getDOMNode().value;
        this.props.updateValue(preview);
    },
    render: function render() {
        return React.createElement('textarea', { className: 'md-input', rows: '30', type: 'text', ref: 'inputValue', value: this.props.value, onChange: this.update });
    }
});

React.render(React.createElement(DisplayContainer, null), container);