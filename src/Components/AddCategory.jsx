import { useState } from "react";

export const AddCategory = ({añadirElemento}) => {

    const [input, setInput] = useState('');

    function onSearchInput(e) {
        setInput(e.target.value);
    }

    function onSubmitEvent(e) {
        e.preventDefault();
        if(input.length < 1) {return}
        añadirElemento(input);
        setInput('');
    }

    return ( 
        <form onSubmit={onSubmitEvent}>
            <input type="text" value={input} onChange={onSearchInput} />
        </form>
     );
};