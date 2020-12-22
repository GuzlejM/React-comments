import React from 'react';
import ReactDOM from 'react-dom';
const App = () => {
    const buttonText = { text: 'Click Me!' };

    return (
        <div>
            Hello world !
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));