import { useState} from 'react';

import Form from './Form';
import dataContext from "./context";

import './App.css';

const {Provider} = dataContext;

function App() {
    const [data, setData] = useState({
        mail: 'name@example.com',
        text: 'some text',
        forceChangeMail: forceChangeMail
    });

    function forceChangeMail() {
        setData({
            ...data, mail: 'test@gmail.com'
        })
    }

    return (
        <Provider value={data}>
            <Form text={data.text} />
            <button
                onClick={() => {
                    setData({
                        ...data,
                        mail: 'second@example.com',
                        text: 'some new text'
                    })
                }}>
                Click me
            </button>
        </Provider>
    );
}

export default App;
