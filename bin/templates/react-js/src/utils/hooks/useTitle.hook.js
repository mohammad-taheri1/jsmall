// These codes are generated with jsmall CLI(https://github.com/MamadTaheri/jsmall)

import config from "../config/config.json";
import {useLayoutEffect} from "react";

const useTitle = (title = "") => {

    // as a homework, google the difference between useEffect and useLayoutEffect
    useLayoutEffect(() => {
        document.title = title !== "" ? title : config.appTitle;
    }, [title])
};

export default useTitle;