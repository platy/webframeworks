NOTE: this is currently an experiment, I don't know if it will go anywhere.

# Backend web framework documentation project

Web frameworks are very varied, and often have particular strength and weakness
applications. There are also different patterns which are used across different
programming languages. I want to categorize these types and work out what is
important in a framework.

In modern web applications we don't do so much on the backend related to the presentation, so mostly I'm interested in the features that help build an api for a rich client. So I will mostly ignore the view layer.

Hopefully we can work out the features and problems that have to be solved to create a web framework.

## Methods

* A table of features to compare everything
* Examples, each will be explained independently of the frameworks. They will be
designed to expose the differences.
* Tests on examples will be implemented independent of the languages so that the same test will be run against each implementation
* Hopefully we can find a documentation method which can expose this matrix of
languages, web frameworks and examples.
* Example explanations should be able to link to all of their implementations, so the implementation of examples should be separate from each other

## Test ideas

Maybe it is best to take the official examples given by the frameworks official guides and to follow their spirit (following the spirit could be difficult between very different languages though).

* Empty GET request with string response
* Basic REST CRUD of a string
* Path alias - 2 paths which do the same thing
* JSON handling -
* JSON handling - convert POSTed json to native object and back
* Some performance test for parallel requests

## Web framework examples to try

### Js

* Express
* fortune

### Scala

* Spray
* Play
* Lift

### Java

* Play
* Spring
* Struts

### Ruby

* rails

### Python

* Django

### Elixir

### Go

## Strategy

1. Add a sub-project for a http server using a new framework
2. Implement any examples from their documentation.
3. Create tests for the examples from outside the project
4. Get the server to run and the tests to run against them from a top level travis build
5. Loop this for a bunch of projects
6. Write implementations for the tests of other frameworks and have the tests run across.
7. Describe the examples and the http interfaces
8. Link examples to the feature that they prove, describe the feature
9. Make a feature table with collapsable groups of features like on the kangax es6 matrix, with the results in the table cells (https://github.com/kangax/compat-table)
