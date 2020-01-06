const getURL = {
    href(url) {
        url = new URL(url || window.location.href);
        return url.href;
    },
    origin(url) {
        url = new URL(url || window.location.href);
        return url.origin;
    },
    host(url) {
        url = new URL(url || window.location.href);
        return url.hostname;
    },
    port(url) {
        url = new URL(url || window.location.href);
        return url.port;
    },
    protocol(url) {
        url = new URL(url || window.location.href);
        return url.protocol;
    },
    path(url) {
        url = new URL(url || window.location.href);
        return url.pathname;
    },
    anchor(url) {
        url = new URL(url || window.location.href);
        return url.hash
    },
    query(url) {
        url = new URL(url || window.location.href);
        return url.search.substr(1).split('&').reduce((obj, property) =>
            (Object.assign(obj, Object.fromEntries([property.split('=')]))), {});
    }
}

module.exports = getURL;