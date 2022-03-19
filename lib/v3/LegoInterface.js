import RebrickInterface from "../RebrickInterface.js"

/**
 * All the /api/v3/lego APIs are available through this class.
 * https://rebrickable.com/api/v3/docs
 *
 * @export
 * @version 3.0.0
 * @author Daniel Garden <dangarden@gmail.com>
 * @class LegoInterface
 * @extends {RebrickInterface}
 */
export default class LegoInterface extends RebrickInterface {
    constructor() {
        super();

        this.fns = [
            "getColors",
            "getColor",
            "getElement",
            "getMinifigs",
            "getMinifig",
            "getMinifigParts",
            "getMinifigSets",
            "getPartCategories",
            "getPartCategory",
            "getParts",
            "getPart",
            "getPartColors",
            "getPartColor",
            "getPartColorSets",
            "getSets",
            "getSet",
            "getSetAlternates",
            "getSetMinifigs",
            "getSetParts",
            "getSetSets",
            "getThemes",
            "getTheme"
        ];
    }

    /**
     * Get a list of all Colors.
     *
     * @param {Object} config
     * @param {Number} config.page
     * @param {Number} config.page_size
     * @param {String} config.ordering
     * @return {Object}
     * @memberof LegoInterface
     */
    getColors(config={}) {
        return this.request('GET', `lego/colors`, config);
    }

    /**
     * Get details about a specific Color.
     *
     * @param {Number|String} color_id
     * @param {Object} config
     * @param {String} config.ordering
     * @return {Object}
     * @memberof LegoInterface
     */
    getColor(color_id, config={}) {
        return this.request('GET', `lego/colors/${color_id}`, config);
    }

    /**
     * Get details about a specific Element ID.
     *
     * @param {String} element_id
     * @return {Object}
     * @memberof LegoInterface
     */
    getElement(element_id) {
        return this.request('GET', `lego/elements/${element_id}`);
    }

    /**
     * Get a list of Minifigs.
     *
     * @param {Object} config
     * @param {Number} config.page
     * @param {Number} config.page_size
     * @param {Number} config.min_parts
     * @param {Number} config.max_parts
     * @param {String} config.in_set_num
     * @param {String} config.in_theme_id
     * @param {String} config.ordering
     * @param {String} config.search
     * @return {Object}
     * @memberof LegoInterface
     */
    getMinifigs(config={}) {
        return this.request('GET', `lego/minifigs`, config);
    }
    
    /**
     * Get details for a specific Minifig.
     *
     * @param {String} set_num
     * @return {Object}
     * @memberof LegoInterface
     */
    getMinifig(set_num) {
        return this.request('GET', `lego/minifigs/${set_num}`);
    }

    /**
     * Get a list of all Inventory Parts in this Minifig.
     *
     * @param {String} set_num
     * @return {Object}
     * @memberof LegoInterface
     */
    getMinifigParts(set_num) {
        return this.request('GET', `lego/minifigs/${set_num}/parts`);
    }

    /**
     * Get a list of Sets a Minifig has appeared in.
     *
     * @param {String} set_num
     * @return {Object}
     * @memberof LegoInterface
     */
    getMinifigSets(set_num) {
        return this.request('GET', `lego/minifigs/${set_num}/sets`);
    }

    /**
     * Get a list of all Part Categories.
     *
     * @param {Object} config
     * @param {Number} config.page
     * @param {Number} config.page_size
     * @param {String} config.ordering
     * @return {Object}
     * @memberof LegoInterface
     */
    getPartCategories(config={}) {
        return this.request('GET', `lego/part_categories`, config);
    }

    /**
     * Get details about a specific Part Category.
     *
     * @param {*} part_category_id
     * @param {Object} config
     * @param {String} config.ordering
     * @return {Object}
     * @memberof LegoInterface
     */
    getPartCategory(part_category_id, config={}) {
        return this.request('GET', `lego/part_categories/${part_category_id}`, config);
    }

    /**
     * Get a list of Parts.
     *
     * @param {Object} config
     * @param {Number} config.page
     * @param {Number} config.page_size
     * @param {String} config.part_num
     * @param {String} config.part_nums
     * @param {String} config.part_cat_id
     * @param {String} config.color_id
     * @param {String} config.bricklink_id
     * @param {String} config.brickowl_id
     * @param {String} config.lego_id
     * @param {String} config.ldraw_id
     * @param {String} config.ordering
     * @param {String} config.search
     * @return {Object}
     * @memberof LegoInterface
     */
    getParts() {
        return this.request('GET', `lego/parts`);
    }

    /**
     * Get details about a specific Part.
     *
     * @param {String} part_num
     * @return {Object}
     * @memberof LegoInterface
     */
    getPart(part_num) {
        return this.request('GET', `lego/parts/${part_num}`);
    }

    /**
     * Get a list of all Colors a Part has appeared in.
     *
     * @param {String} part_num
     * @param {Object} config
     * @param {Number} config.page
     * @param {Number} config.page_size
     * @param {String} config.ordering
     * @return {Object}
     * @memberof LegoInterface
     */
    getPartColors(part_num) {
        return this.request('GET', `lego/parts/${part_num}/colors`);
    }

    /**
     * Get details about a specific Part/Color combination.
     *
     * @param {String} part_num
     * @param {String} color_id
     * @return {Object}
     * @memberof LegoInterface
     */
    getPartColor(part_num, color_id) {
        return this.request('GET', `lego/parts/${part_num}/colors/${color_id}`);
    }

    /**
     * Get a list of all Sets the Part/Color combination has appeard in.
     *
     * @param {String} part_num
     * @param {String} color_id
     * @param {Object} config
     * @param {Number} config.page
     * @param {Number} config.page_size
     * @param {String} config.ordering
     * @return {Object}
     * @memberof LegoInterface
     */
    getPartColorSets(part_num, color_id, config={}) {
        return this.request('GET', `lego/parts/${part_num}/colors/${color_id}/sets`, config);
    }

    /**
     * Get a list of Sets, optionally filtered by any of the below parameters.
     *
     * @param {Object} config
     * @param {Number} config.page
     * @param {Number} config.page_size
     * @param {String} config.theme_id
     * @param {Number} config.min_year
     * @param {Number} config.max_year
     * @param {Number} config.min_parts
     * @param {Number} config.max_parts
     * @param {String} config.ordering
     * @param {String} config.search
     * @return {Object}
     * @memberof LegoInterface
     */
    getSets(config={}) {
        return this.request('GET', `lego/sets`, config);
    }

    /**
     * Get details for a specific Set.
     *
     * @param {String} set_num
     * @return {Object}
     * @memberof LegoInterface
     */
    getSet(set_num) {
        return this.request('GET', `lego/sets/${set_num}`);
    }

    /**
     * Get a list of MOCs which are Alternate Builds of a specific Set - i.e.
     * all parts in the MOC can be found in the Set.
     *
     * @param {String} set_num
     * @param {Object} config
     * @param {Number} config.page
     * @param {Number} config.page_size
     * @param {String} config.ordering
     * @return {Object}
     * @memberof LegoInterface
     */
    getSetAlternates(set_num, config={}) {
        return this.request('GET', `lego/sets/${set_num}/alternates`, config);
    }
    
    /**
     * Get a list of all Inventory Minifigs in this Set.
     *
     * @param {String} set_num
     * @param {Object} config
     * @param {Number} config.page
     * @param {Number} config.page_size
     * @return {Object}
     * @memberof LegoInterface
     */
    getSetMinifigs(set_num, config={}) {
        return this.request('GET', `lego/sets/${set_num}/minifigs`, config);
    }
    
    /**
     * Get a list of all Inventory Parts in this Set.
     *
     * @param {String} set_num
     * @param {Object} config
     * @param {Number} config.page
     * @param {Number} config.page_size
     * @return {Object}
     * @memberof LegoInterface
     */
    getSetParts(set_num, config={}) {
        return this.request('GET', `lego/sets/${set_num}/parts`, config);
    }
    
    /**
     * Get a list of all Inventory Sets in this Set.
     *
     * @param {String} set_num
     * @param {Object} config
     * @param {Number} config.page
     * @param {Number} config.page_size
     * @return {Object}
     * @memberof LegoInterface
     */
    getSetSets(set_num, config={}) {
        return this.request('GET', `lego/sets/${set_num}/sets`, config);
    }

    /**
     * Return all Themes
     *
     * @param {Object} config
     * @param {Number} config.page
     * @param {Number} config.page_size
     * @param {String} config.ordering
     * @return {Object}
     * @memberof LegoInterface
     */
    getThemes(config={}) {
        return this.request('GET', `lego/themes`, config);
    }

    /**
     * Return details for a specific Theme
     *
     * @param {Number} id
     * @param {Object} config
     * @param {String} config.ordering
     * @return {Object}
     * @memberof LegoInterface
     */
    getTheme(id, config={}) {
        return this.request('GET', `lego/themes/${id}`, config);
    }
}