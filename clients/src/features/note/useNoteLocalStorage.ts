import { useEffect, useState } from "react";


export default function useNoteLocalStorage(initialState, key) {
    const [value, setValue] = useState(function () {
        const storedValue = localStorage.getItem(key);
        if (storedValue === null) return [];
        return storedValue ? JSON.parse(storedValue) : initialState;
    });

    useEffect(function () {
        localStorage.setItem('note', JSON.stringify(value));
    }, [value, key]);
    return [value, setValue];
}
