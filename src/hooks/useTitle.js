import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Wheel Mania`;

    }, [title]);
};

export default useTitle;