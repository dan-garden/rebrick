import RebrickInterface from "../RebrickInterface.js"

/**
 * All the /api/v3/users APIs are available through this class.
 * https://rebrickable.com/api/v3/docs
 *
 * @export
 * @version 3.0.0
 * @author Daniel Garden <dangarden@gmail.com>
 * @class UsersInterface
 * @extends {RebrickInterface}
 */
export default class UsersInterface extends RebrickInterface {
    constructor() {
        super();

        this.fns = [
            "token",
            "getAllParts",
            "getBuild",
            "getLostParts",
            "getMinifigs",
            "getPartLists",
            "getPartList",
            "getPartListParts",
            "getParts",
            "getProfile",
            "getSetLists",
            "getSetList",
            "getSetListSets",
            "getSetListSet",
            "getSets",
            "getSet",
            "getBadges",
            "getBadge",
            "getAllColorsFromPartLists"
        ];
    }
    /**
     * Clone of userToken to be used outside the base class.
     *
     * @readonly
     * @memberof UsersInterface
     */
    get token() {
        return this._.userToken;
    }

    /**
     * Get a list of all the Parts in all the user's Part Lists as well as the Parts inside Sets in the user's Set Lists.
     * WARNING this call is very resource intensive, do not overuse it!
     * Optionally, filter by one or more of the below query parameters.
     *
     * @param {*} [config={}]
     * @return {Object}
     * @memberof UsersInterface
     */
    async getAllParts(config={}) {
        await this.login();
        return await this.request('GET', `users/${this.token}/allparts`, config);
    }

    /**
     * Find out how many parts the user needs to build the specified Set.
     * The user's default Build Settings will be used to calculate a Build Match % using their LEGO Collection of Sets and Parts.
     *
     * @param {*} set_num
     * @param {*} [config={}]
     * @return {Object}
     * @memberof UsersInterface
     */
    async getBuild(set_num, config={}) {
        await this.login();
        return await this.request('GET', `users/${this.token}/build/${set_num}`, config);
    }

    /**
     * Get a list of all the Lost Parts from the user's LEGO collection.
     *
     * @return {Object}
     * @memberof UsersInterface
     */
    async getLostParts() {
        await this.login();
        return await this.request('GET', `users/${this.token}/lost_parts`);
    }

    /**
     * Get a list of all the Minifigs in all the user's Sets. Note that this is a read-only list as Minifigs are automatically determined by the Sets in the user's Set Lists.
     *
     * @param {*} [config={}]
     * @return {Object}
     * @memberof UsersInterface
     */
    async getMinifigs(config={}) {
        await this.login();
        return await this.request('GET', `users/${this.token}/minifigs`, config);
    }

    /**
     * Get a list of all the user's Part Lists.
     *
     * @param {*} [config={}]
     * @return {Object}
     * @memberof UsersInterface
     */
    async getPartLists(config={}) {
        await this.login();
        return await this.request('GET', `users/${this.token}/partlists`, config);
    }

    /**
     * Get details about a specific Part List.
     *
     * @param {*} list_id
     * @param {*} [config={}]
     * @return {Object}
     * @memberof UsersInterface
     */
    async getPartList(list_id, config={}) {
        await this.login();
        return await this.request('GET', `users/${this.token}/partlists/${list_id}`, config);
    }

    /**
     * Get a list of all the Parts in a specific Part List.
     *
     * @param {*} list_id
     * @param {*} [config={}]
     * @return {Object}
     * @memberof UsersInterface
     */
    async getPartListParts(list_id, config={}) {
        await this.login();
        return await this.request('GET', `users/${this.token}/partlists/${list_id}/parts`, config);
    }

    /**
     * Get a list of all the Parts in all the user's Part Lists.
     *
     * @param {*} [config={}]
     * @return {Object}
     * @memberof UsersInterface
     */
    async getParts(config={}) {
        await this.login();
        return await this.request('GET', `users/${this.token}/parts`, config);
    }

    /**
     * Get details about a specific user.
     *
     * @return {Object}
     * @memberof UsersInterface
     */
    async getProfile() {
        await this.login();
        return await this.request('GET', `users/${this.token}/profile`);
    }

    /**
     * Get a list of all the user's Set Lists.
     *
     * @return {Object}
     * @memberof UsersInterface
     */
    async getSetLists() {
        await this.login();
        return await this.request('GET', `users/${this.token}/setlists`);
    }

    /**
     * Get details about a specific Set List.
     *
     * @param {*} list_id
     * @return {Object}
     * @memberof UsersInterface
     */
    async getSetList(list_id) {
        await this.login();
        return await this.request('GET', `users/${this.token}/setlists/${list_id}`);
    }

    /**
     * Get a list of all the Sets in a specific Set List.
     *
     * @param {*} list_id
     * @param {*} [config={}]
     * @return {Object}
     * @memberof UsersInterface
     */
    async getSetListSets(list_id, config={}) {
        await this.login();
        return await this.request('GET', `users/${this.token}/setlists/${list_id}/sets`, config);
    }

    /**
     * Get details about a specific Set in the Set List.
     *
     * @param {*} set_num
     * @param {*} list_id
     * @param {*} [config={}]
     * @return {Object}
     * @memberof UsersInterface
     */
    async getSetListSet(set_num, list_id, config={}) {
        await this.login();
        return await this.request('GET', `users/${this.token}/setlists/${list_id}/sets/${set_num}`, config);
    }

    /**
     * Get a list of all the Sets in the user's LEGO collection.
     *
     * @param {*} [config={}]
     * @return {Object}
     * @memberof UsersInterface
     */
    async getSets(config={}) {
        await this.login();
        return await this.request('GET', `users/${this.token}/sets`, config);
    }

    /**
     * Get details about a specific Set in the user's LEGO collection.
     *
     * @param {*} set_num
     * @param {*} [config={}]
     * @return {Object}
     * @memberof UsersInterface
     */
    async getSet(set_num, config={}) {
        await this.login();
        return await this.request('GET', `users/${this.token}/sets/${set_num}`, config);
    }

    /**
     * Get a list of all the available Badges
     *
     * @param {*} [config={}]
     * @return {Object}
     * @memberof UsersInterface
     */
    async getBadges(config={}) {
        await this.login();
        return await this.request('GET', `users/badges`, config);
    }

    /**
     * Get details about a specific Badge
     *
     * @param {*} id
     * @param {*} [config={}]
     * @return {Object}
     * @memberof UsersInterface
     */
    async getBadge(id, config={}) {
        await this.login();
        return await this.request('GET', `users/badges/${id}`, config);
    }

    /**
     * Get a list of used colors from users part lists
     * 
     * @return {Object} 
     * @memberof UsersInterface
     */
    async getAllColorsFromPartLists() {
        const partLists = await this.getPartLists();
        let allColors = {};
        for(let i = 0; i < partLists.results.length; i++) {
            const partList = partLists.results[i];

            const parts = await this.getPartListParts(partList.id, { page_size: 500 });

            for(let j = 0; j < parts.results.length; j++) {
                const part = parts.results[j];

                if(!allColors[part.color.name]) {
                    allColors[part.color.name] = part.color;
                    allColors[part.color.name].count = 0;
                }
                allColors[part.color.name].count += part.quantity;
            }
        }

        return allColors;
    }
}