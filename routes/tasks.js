const express = require("express")
const router = express.Router()

const Task = require("../models/Task")

router.get("/", (req, res) => {
	Task.find({}, function (err, tasks) {
		if (err) return handleError(err)
		res.send(tasks)
	})
})

router.get("/:id", (req, res) => {
	Task.findOne({ _id: req.params.id }, function (err, task) {
		if (err) return handleError(err)
		res.send(task)
	})
})

router.post("/add", (req, res) => {
	Task.create(req.body, function (err, data) {
		if (err) return handleError(err)
		res.send(data);
	})
})

router.get("/delete/:id", (req, res) => {
	Task.deleteOne({ _id: req.params.id }, function (err) {
		if (err) return handleError(err)
		res.send("deleted")
	})
})

router.get("/setStatus/:status/:id", (req, res) => {
	Task.updateOne(
		{ _id: req.params.id },
		{ status: req.params.status },
		function (err, response) {
			if (err) return handleError(err)
			res.send("updated");
		}
	)
})

module.exports = router
