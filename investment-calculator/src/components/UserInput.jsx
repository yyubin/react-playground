import { useState } from 'react';
export default function UserInput({ initialValue, subject, onChangeValue }) {
    const [value, setValue] = useState(initialValue);

    function handleChangeInputValue(event) {
        setValue(event.target.value);
        onChangeValue(subject, event.target.value);
    }

    return (
        <div>
            <label>{subject}</label>
            <input id={subject} type="number" onChange={handleChangeInputValue} />
        </div>
    )
}