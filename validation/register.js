const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.user_login = !isEmpty(data.user_login) ? data.user_login : "";
    data.user_pass = !isEmpty (data.user_pass) ? data.user_pass : "";
    data.user_email = !isEmpty(data.user_email) ? data.user_email : "";
    data.user_pass2 = !isEmpty (data.user_pass2) ? data.user_pass2 : "";

    if (Validator.isEmpty(data.user_login)) {
        errors.user_login = "Login field is required";
    }

    if (Validator.isEmpty(data.user_email)) {
        errors.user_email = "Email field is required";
    } else if (!Validator.isEmail(data.user_email)) {
        errors.user_email = "Email is invalid";
    }

    if (Validator.isEmpty(data.user_pass)) {
        errors.user_pass = "Password field is required";
    }

    if (Validator.isEmpty(data.user_pass2)) {
        errors.user_pass2 = "Confirm password field is required";
    }

    if (!Validator.isLength(data.user_pass, {min: 8, max: 30})) {
        errors.user_pass = "Password must be at least 8 characters long";
    }

    if (!Validator.equals(data.user_pass, data.user_pass2)) {
        errors.user_pass2 = "Passwords must match";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
