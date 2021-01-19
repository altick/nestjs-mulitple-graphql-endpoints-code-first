# NestJS multiple GraphQL endpoints with code-first approach example

## The problem
When trying to configure a single NestJS app with multiple GraphQL endpoints you would endup with following error:
```
Error: Schema must contain uniquely named types but contains multiple types named "TestModel".
```
For details, please, see this [github issue](https://github.com/nestjs/graphql/issues/721).

## The solution/workaround
This solution is built with [the NestJS workspaces](https://docs.nestjs.com/cli/monorepo) and introduces two apps with one shared library. Each app can configure its own GraphQL Module which will generate schema from objects that are in the scope of this app only.

The shared logic including resolvers can be places in the shared library.

## How to run it
First, install the dependencies
```
yarn install
```
Then you can run both apps
```
nest start my-app
```
This will start the `my-app` applicaton on the port 3000

The GraphQL playground is available on http://localhost:3000/graphql

```
nest start my-project
```
This will start the `my-project` applicaton on the port 3001

The GraphQL playground is available on http://localhost:3001/graphql

### Example GraphQL query:
```graphql
query {
  helloWorld {
    message
  }
  shared {
    message
  }
}
```