'use strict';

/**
 * Defines the builder to configure a qurating of datastream of IoT profile. With this builder you can configure a qrating
 */
export default class IoTQrating {

    constructor() {}

    /**
     * Set the minRequired attribute
     * @param {!string} label - required field
     * @param {!number} value - required field
     * @return {IoTQrating}
     */
    withMinRequired(label, value) {
        this._isValidString(label, 'label', 50);
        this._isValidNumber(value, 'value');
        this._minRequired = {
            label: label,
            value: value
        }
        return this;
    }
    /**
     * Set the minDesired attribute
     * @param {!string} label - required field
     * @param {!number} value - required field
     * @return {IoTQrating}
     */
    withMinDesired(label, value) {
        this._isValidString(label, 'label', 50);
        this._isValidNumber(value, 'value');
        this._minDesired = {
            label: label,
            value: value
        }
        return this;
    }
    /**
     * Set the ideal attribute
     * @param {!string} label - required field
     * @param {!number} value - required field
     * @return {IoTQrating}
     */
    withIdeal(label, value) {
        this._isValidString(label, 'label', 50);
        this._isValidNumber(value, 'value');
        this._ideal = {
            label: label,
            value: value
        }
        return this;
    }
    /**
     * Set the maxDesired attribute
     * @param {!string} label - required field
     * @param {!number} value - required field
     * @return {IoTQrating}
     */
    withMaxDesired(label, value) {
        this._isValidString(label, 'label', 50);
        this._isValidNumber(value, 'value');
        this._maxDesired = {
            label: label,
            value: value
        }
        return this;
    }
    /**
     * Set the maxAllowed attribute
     * @param {!string} label - required field
     * @param {!number} value - required field
     * @return {IoTQrating}
     */
    withMaxAllowed(label, value) {
        this._isValidString(label, 'label', 50);
        this._isValidNumber(value, 'value');
        this._maxAllowed = {
            label: label,
            value: value
        }
        return this;
    }
    /**
     * Set the maxScore attribute
     * @param {!number} maxScore - required field
     * @return {IoTQrating}
     */
    withMaxScore(maxScore) {
        this._isValidNumber(maxScore, 'maxScore');
        this._maxScore = maxScore;
        return this;
    }

    /**
     * Set the cumulativePeriodDivisor attribute
     * @param {!string} cumulativePeriodDivisor
     * @return {IoTQrating}
     */
    withCumulativePeriodDivisor(cumulativePeriodDivisor) {
        if (cumulativePeriodDivisor) {
            this._isValidNumber(cumulativePeriodDivisor, 'cumulativePeriodDivisor');
        }
        this._cumulativePeriodDivisor = cumulativePeriodDivisor;
        return this;
    }

    /**
     * Set the conversionMatrix attribute
     * @param {!Object} conversionMatrix
     * @return {IoTQrating}
     */
    withConversionMatrix(conversionMatrix) {
        if (conversionMatrix) {
            if (typeof conversionMatrix !== 'object') {
                throw new Error('ConversionMatrix must be an object on IoTQrating');
            }
        }
        this._conversionMatrix = conversionMatrix;
        return this;
    }
    /**
     * Set the version attribute
     * @param {!string} version - required field
     * @return {IoTQrating}
     */
    withVersion(version) {
        /**max 100, min 1 */
        this._isValidString(version, 'version', 100);
        this._version = version;
        return this;
    }

    /**
     * Build a Qrating json object
     * 
     * @example
     * ogapi.IoTQratingsBuilder().build()
     * @throws {Error} Throw error if there is not version, minRequired, minDesired, ideal, maxDesired, maxAllowed and maxScore
     * @return {Object}  Datastream json object
     */
    build() {
        if (!this._version) {
            throw new Error('Version is required on IoTQrating');
        }
        if (!this._minRequired) {
            throw new Error('MinRequired is required on IoTQrating');
        }
        if (!this._minDesired) {
            throw new Error('MinDesired is required on IoTQrating');
        }
        if (!this._ideal) {
            throw new Error('Ideal is required on IoTQrating');
        }
        if (!this._maxDesired) {
            throw new Error('MaxDesired is required on IoTQrating');
        }
        if (!this._maxAllowed) {
            throw new Error('MaxAllowed is required on IoTQrating');
        }
        if (!this._maxScore) {
            throw new Error('MaxScore is required on IoTQrating');
        }

        return {
            min_required: this._minRequired,
            min_desired: this._minDesired,
            ideal: this._ideal,
            max_desired: this._minDesired,
            max_allowed: this._maxAllowed,
            max_score: this._maxScore,
            cumulative_period_divisor: this._cumulativePeriodDivisor,
            conversion_matrix: this._conversionMatrix,
            version: this._version
        }
    }

    _isValidString(string, param_name, max_length) {
        if (typeof string !== 'string' || string.length === 0 || string.length > max_length)
            throw new Error('Parameter ' + param_name + ' must be a string, cannot be empty and has a maximum length of ' + max_length + ' on IoTQrating');
    }

    _isValidNumber(number, param_name) {
        if (typeof number !== 'number')
            throw new Error('Parameter ' + param_name + ' must be a number, cannot be empty on IoTQrating');
    }
}