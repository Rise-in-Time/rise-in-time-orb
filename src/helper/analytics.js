
export function sendEvent(name, parameters = {}) {
    window.vm.$gtag.event(name, parameters);
}

export function setUserId(userId) {
    window.vm.$gtag.query('set', 'user_id', userId);
}

export function setUserProperties(properties) {
    window.vm.$gtag.query('set', 'user_properties', properties);
}
