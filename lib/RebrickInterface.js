import fetch, { Headers } from 'node-fetch';
import urlJoin from 'proper-url-join';
import chalk from 'chalk';
import NodeCache from 'node-cache';
import crypto from 'crypto';
const reqCache = new NodeCache();

/**
 * Base class for Rebrickable API
 * https://rebrickable.com/api/v3/docs/
 *
 * @export
 * @version 3.0.0
 * @author Daniel Garden <dangarden@gmail.com>
 * @class RebrickInterface
 */
export default class RebrickInterface {
    constructor() {

        this.version = 3;
        this.baseUrl = `https://rebrickable.com/api/v${this.version}`;

    }

    getCacheKey(input) {
        return crypto.createHash('sha256').update(JSON.stringify(input)).digest('hex');
    }

    /**
     * Request a resource from the API
     *
     * @param {string} [method='GET']
     * @param {string} [endpoint='']
     * @param {*} [query={}]
     * @param {boolean} [body=false]
     * @return {*} 
     * @memberof RebrickInterface
     */
    async request(method='GET', endpoint='', query={}, body=false) {
        if(endpoint.startsWith(this.baseUrl)) {
            endpoint = endpoint.replace(this.baseUrl, '');
        }
        const cacheKey = this.getCacheKey({
            method,
            endpoint,
            query,
            body
        });
        const cache = reqCache.get( cacheKey );
        if( cache !== undefined ) {
            return cache;
        }
        const headers = new Headers();
        headers.append('Authorization', `Key ${this._.apiKey}`);
        let bodyData = undefined;
        if(body) {
            bodyData = new URLSearchParams(query);
            for(let key in body) {
                bodyData.append(key, body[key]);
            }
        }

        const options = { method, headers, body: bodyData };
        const url = urlJoin(this.baseUrl, endpoint, { trailingSlash: true, query });
        const response = await fetch(url, options)
        .then(res => res.json())
        .catch(err => {
            throw new Error(chalk.red(err));
        });

        if(response.detail) {
            console.error([chalk.red(response.detail), chalk.blue(url), chalk.yellow(JSON.stringify(query))].join('\n'));
            return undefined;
        }

        reqCache.set( cacheKey, response, 3600 );
        return response;
    }

    /**
     * Retrieve token for user requests
     *
     * @param {*} username
     * @param {*} password
     * @return {*} 
     * @memberof RebrickInterface
     */
    async getToken(username, password) {
        const response = await this.request('POST', 'users/_token/', null, {
            username,
            password
        });

        return response.user_token;
    }

    /**
     * Login to the API and retrieve user token
     *
     * @param {String} [username=false]
     * @param {String} [password=false]
     * @return {RebrickInterface}
     * @memberof RebrickInterface
     */
    async login(username=false, password=false) {
        if(!this._.userToken) {
            this._.username = this._.username || username;
            this._.password = this._.password || password;
    
            this._.userToken = await this.getToken(this._.username, this._.password);
        }
        return this;
    }
}