import { StringUtil } from "../../utilities/string-util";
import { IdUtil } from "../../utilities/id-util";
import Account from './account';

export function create(req, res) {
    const validation = validateIndex(req.body);
    if (!validation.isValid){
        //400: for validation failure where username or password is missing
        return res.status(400).json({message: validation.message});
    }

    //init account
    let new_account = new Account(
        IdUtil.generateUserId(),
        req.body.email.toLowerCase(),
        req.body.password.toLowerCase(),
        req.body.firstname,
        req.body.lastname
    );

    console.log(new_account);
    //201: success when creating new data
    return res.status(201).json({message: "User"+new_account.email+"registred!", id: new_account.id});
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
    if (StringUtil.isEmpty(body.firstname)) {
        error_msg += "Firstname is required. ";
    }
    if (StringUtil.isEmpty(body.lastname)) {
        error_msg += "Lastname is required. ";
    }

    /*  how create and return an object in javascript
        https://stackoverflow.com/questions/12272239/javascript-function-returning-an-object
    */
    return {
        isValid: StringUtil.isEmpty(error_msg),
        message: error_msg
    }

}
