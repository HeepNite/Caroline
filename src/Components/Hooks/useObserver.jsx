import { useState, useEffect, useRef } from "react";

const useObserver = (options) => {

    const [elements, setElemnts] = useState([]);
    const [entries, setEntries] = useState([]);

    const observer = useRef(new IntersectionObserver(entries => {
        console.log(`entries`,entries);
        setEntries(entries);
    }, options));

    useEffect(() => {

        const { current: currentObserver } = observer;
        if (elements.length > 0) {
             for(let elementInt of elements){
              currentObserver.observe(elementInt);
            } 
        }
        return () => {
            if (currentObserver) {
                currentObserver.disconnect();
            }
        }

    }, [elements]);

    return [observer.current, setElemnts, entries];
}

export default useObserver;