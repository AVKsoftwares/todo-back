const mongoose = require("mongoose")
const express = require("express")
var cors = require("cors")
const app = express()
const port = 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.set("strictQuery", true)

const config = require("./config")
const dbUrl = config.dbUrl

var options = {
	keepAlive: true,
	connectTimeoutMS: 30000,
	useNewUrlParser: true,
	useUnifiedTopology: true,
}

mongoose.connect(dbUrl, options, (err) => {
	if (err) console.log(err)
})

const tasks = require("./routes/tasks")
app.use("/tasks", tasks)

app.listen(port, () => {
	console.log(`Todo server listening on port ${port}`)
})
