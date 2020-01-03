const getURL = {
    href() {
        return window.location.href;
    },
    origin() {
        return window.location.origin;
    },
    host() {
        return window.location.hostname;
    },
    port() {
        return window.location.port;
    },
    protocol() {
        return window.location.protocol;
    },
    path() {
        return window.location.pathname;
    },
    anchor() {
        return window.location.hash
    },
    query() {
        return window.location.search.substr(1).split('&').reduce((obj, property) =>
            (Object.assign(obj, Object.fromEntries([property.split('=')]))), {});
    }
}

module.exports = getURL;