'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Customer Schema
 */
var CustomerSchema = new Schema({
	firstName: {
		type: String,
		default: '',
		//required: 'Please fill Customer name',
		trim: true
	},
    lastName: {
        type: String,
        default: '',
        required: 'Please fill Customer last name',
        trim: true
    },
    email: {
        type: String,
        default: '',
        required: 'Please fill Customer email',
        trim: true
    },
    userName: {
        type: String,
        default: '',
        required: 'Please fill Customer user name',
        trim: true
    },
    password: {
        type: String,
        default: '',
        required: 'Please fill Customer password name',
        trim: true
    },

	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Customer', CustomerSchema);