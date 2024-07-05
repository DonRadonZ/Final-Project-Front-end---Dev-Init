import { useEffect, useState } from "react";


export default function useTodoLocalStorage(initialState, key) {
    const [value, setValue] = useState(function () {
        const storedValue = localStorage.getItem(key);
        if (storedValue === null) return [];
        return storedValue ? JSON.parse(storedValue) : initialState;
    });

    useEffect(function () {
        localStorage.setItem('todos', JSON.stringify(value));
    }, [value, key]);
    return [value, setValue];
}
