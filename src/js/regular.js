export default class Validator {
    validateUsername(user) {
        this.user = user;
        return /^[a-z][a-z\d\-_]+[a-z]$/.test(this.user) && !/\d{4}/.test(this.user);
    };
}