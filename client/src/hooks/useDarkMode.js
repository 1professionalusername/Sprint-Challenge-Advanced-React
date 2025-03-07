import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(initialValue);

    useEffect(() => {
        darkMode ?
            document.querySelector('body').classList.add('dark-mode') :
            document.querySelector('body').classList.remove('dark-mode');


    }, [darkMode]);

    return [darkMode, setDarkMode];

};



export default useDarkMode;