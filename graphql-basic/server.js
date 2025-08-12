import { graphql, buildSchema} from 'graphql'

var schema = buildSchema(`
	type Query {
		hello: String
	}
`)

var rootValue = {
	hello() {
		return "Hello"
	}
}

graphql({
	schema,
	source: "{ hello }",
	rootValue
}).then(res => console.log(res))
