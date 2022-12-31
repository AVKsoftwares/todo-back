const mongoose = require("mongoose")
let Schema = mongoose.Schema

let taskSchema = new Schema({
	title: {
		type: String
	},
	description: {
		type: String,
	},
	status: {
		type: String,
	}
})

let Task = mongoose.model("task", taskSchema)

module.exports = Task
