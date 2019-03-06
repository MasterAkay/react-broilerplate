import React from 'react';
import ReactDOM from 'react-dom';
// document.body.innerText = 'Hello,  JavaScript';
// const helloElem = React.createElement('hi', null, "hello, reactJS");
//          ReactDOM.render(helloElem, document.getElementById('root'));
class Greeter extends React.Component {
            render(){
                return <p> Hello, CLass Component!</p>;
            }
        }
        ReactDOM.render(<Greeter />, document.getElementById('root'));