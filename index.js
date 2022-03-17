import RebrickInterface from "./lib/RebrickInterface.js"

import LegoInterface from "./lib/v3/LegoInterface.js"
import UsersInterface from "./lib/v3/UsersInterface.js"

/**
 * Top level class for interacting with the Rebrickable API.
 * https://rebrickable.com/api/v3/docs/
 *
 * @export
 * @class Rebrick
 * @extends {RebrickInterface}
 */
export default class Rebrick extends RebrickInterface {
    constructor(apiKey, userToken=false, loginPass=false) {
        super();

        this.apiKey = apiKey;
        this.userToken = loginPass ? false : userToken;
        this.username = userToken;
        this.password = loginPass;

        this.lego = new LegoInterface();
        this.users = new UsersInterface();

        this._ = this;
        this.lego._ = this;
        this.users._ = this;
    }

    static init() {
        return new Rebrick(...arguments);
    }
}