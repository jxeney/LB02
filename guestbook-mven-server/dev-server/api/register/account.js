class Account {
    get firstname() {
        return this._firstname;
    }

    set firstname(value) {
        this._firstname = value;
    }

    get lastname() {
        return this._lastname;
    }

    set lastname(value) {
        this._lastname = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }
    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }
    constructor(id, email, password, firstname, lastname){
        this._email = email;
        this._password = password;
        this._id = id;
        this._firstname = firstname;
        this._lastname = lastname;
    }
}

export default Account;
