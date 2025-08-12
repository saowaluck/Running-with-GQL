import express from "express"
import { createHandler } from "graphql-http/lib/use/express"
import { buildSchema } from "graphql"

const schema = buildSchema(`
	type Query {
		hello: String
	}
`)

const root = {
	hello() {
		return "Hello world"
	}
}

const app = express()

app.all(
	"/graphql",
	createHandler({
		schema,
		rootValue: root,
	})
)

app.listen(5000, () => {
	console.log("Running a GQL api server at http://localhost:5000/graphql")
})

