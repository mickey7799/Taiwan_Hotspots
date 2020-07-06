import React, { useState } from "react";

const Form = () => {
    const [inputSearch, setInputSearch] = useState("");

    const handleOnChange = (e) => {
        setInputSearch(e.value);
    };
    return (
        <form>
            <input
                type="text"
                name="search"
                placeholder="Search for animals"
                onChange={handleOnChange}
                value={inputSearch}
            />

        </form>

    );
}

export default Form;