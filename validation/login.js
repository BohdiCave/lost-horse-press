const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
    let errors = {};

    data.user_login = !isEmpty(data.user_login)? data.user_login : "";
    data.user_pass = !isEmpty (data.user_pass) ? data.user_pass : "";

    if (Validator.isEmpty(data.user_login)) {
        errors.user_login = "Login field is required";
    }

    if (Validator.isEmpty(data.user_pass)) {
        errors.user_pass = "Password field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};