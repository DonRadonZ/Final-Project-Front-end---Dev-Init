import { useEffect, useState } from "react";


export default function useNoteLocalStorage(initialState: any[], key: string) {
    const [value, setValue] = useState(function () {
        const storedValue = localStorage.getItem(key);
        if (storedValue === null) return [];
        return storedValue ? JSON.parse(storedValue) : initialState;
    });

    useEffect(function () {
        localStorage.setItem('notes', JSON.stringify(value));
    }, [value, key]);
    return [value, setValue];
}
