import React, {Component, useRef, useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

function useInputWithValidate(initalValue) {
    const [value, setValue] = useState(initalValue);

    const onChange = event => {
        setValue(event.target.value);
    }

    const validateInput = () => {
        return (value.search(/\d/) >= 0)
    }

    return {
        value: value,
        onChange: onChange,
        validateInput: validateInput
    }
}

const Form = () => {
    const input = useInputWithValidate('');
    const textArea = useInputWithValidate('');

    const color = input.validateInput() ? 'text-danger' : null;

    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <input
                        value={`${input.value} / ${textArea.value}`}
                        type='text'
                        className='form-control'
                        readOnly>
                    </input>
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <input
                        value={input.value}
                        onChange={input.onChange}
                        type="email"
                        className={`form-control ${color}`}
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea
                        onChange={textArea.onChange}
                        value={textArea.value}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3">
                    </textarea>
                </div>
            </form>
        </Container>
    )

}

class TextInput extends Component {
    doSmth = () => {
        console.log('smth')
    }

    render() {
        return (
            <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
            />
        );
    }
}

function App() {
    return (
        <Form/>
    );
}

export default App;
