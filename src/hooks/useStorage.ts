import { useState, useEffect } from 'react';

function getStorageValue(key: string, defaultValue: unknown) {
    // getting stored value
    const saved = sessionStorage.getItem(key);

    if (saved) {
        const initial = JSON.parse(saved);

        return initial;
    }

    return defaultValue;
}

export const deleteStorageValue = (key: string) => {
    sessionStorage.removeItem(key);
};

export const useSessionStorage = (key: string, defaultValue: unknown) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
        // storing input name
        sessionStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};
