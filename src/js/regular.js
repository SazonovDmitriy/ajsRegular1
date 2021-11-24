class Validator {
    constructor() {

    };

    validateUsername(user) {
        return /^\w[a-z]$[-_]\d/.test(user);
    };
}