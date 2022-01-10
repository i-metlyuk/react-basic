import { useContext } from "react";
import dataContext from "./context";


const InputComponent = () => {

    const context = useContext(dataContext);

    return (
        <input
            onFocus={context.forceChangeMail}
            value={context.mail}
            type="email"
            className={`form-control`}
            id="exampleFormControlInput1"
            placeholder="name@example.com"
        />
    )
}

export default InputComponent;