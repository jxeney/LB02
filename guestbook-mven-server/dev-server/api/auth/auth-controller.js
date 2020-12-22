import { StringUtil } from "../../utilities/string-util";

export function index(req, res) {
    const validation = validateIndex(req.body);
    if (!validation.isValid){
        //400: for validation failure where username or password is missing
        return res.status(400).json({message: validation.message});
    }
    //204: success but without returning any data
    return res.status(204).json();
}

/**
 * Validates (checks) in the backend the submitted data (in this case username, password)
 * that shouldn't be empty.
 * @param body
 * @returns {{isValid: *, message: string}}
 */
function validateIndex(body) {
    let error_msg = '';
    if (StringUtil.isEmpty(body.username)) {
        error_msg += "Username is required. ";
    }
    if (StringUtil.isEmpty(body.password)) {
        error_msg += "Password is required. ";
    }

    /*  how create and return an object in javascript
        https://stackoverflow.com/questions/12272239/javascript-function-returning-an-object
    */
    return {
        isValid: StringUtil.isEmpty(error_msg),
        message: error_msg
    }

}
