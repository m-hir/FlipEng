import ReactDOM from 'react-dom'
import * as React from 'react';

class MyComponent extends React.Component {
    render () {
        return (<h1>おはよ</h1>);
    }
}


ReactDOM.render(
    <MyComponent />, 
    document.getElementById("app")
);