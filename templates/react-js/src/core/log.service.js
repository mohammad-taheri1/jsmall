// These codes are generated with jsmall CLI(https://github.com/MamadTaheri/jsmall)

// configuration of logging your system events
// it can be either local console.log() command or logging into server database or even local txt files

function init() {
   console.log("Log service initialized successfully");
}

function log(logMessage) {
   // config your log type here

   console.warn(logMessage);
}

const logger = {
   init,
   log,
};

export default logger;
