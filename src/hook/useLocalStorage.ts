import { useEffect, useState } from "uelements"


export function useLocalStorage(key: string, initial: any) {
const [localdata, setLocaldata] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key) as any) || initial;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(localdata));
      }, [localdata, setLocaldata]);
    
      return [localdata, setLocaldata]

}

