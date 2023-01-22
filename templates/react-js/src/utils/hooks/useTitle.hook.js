// These codes are generated with jsmall CLI(https://github.com/MamadTaheri/jsmall)

import config from "../config/config.json";

const useTitle = (title = "") => {
   document.title = title !== "" ? title : config.appTitle;
};

export default useTitle;