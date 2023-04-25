# BOOKS App - REST API Documentation
RESTful API Designed in Node.js for a very simple BOOKS application.

## Index
* [Requirements](#requirements)
* [Installation](#installation)
* [Schema](#schema)
* [Authentication](#authentication)
* [Root End-Point](#root-end-point)
* [Core Resources](#core-resources)
* [Request & Response Examples](#request--response-examples)

## Requirements

- [node & yarn](http://nodejs.org)
- [MongoDB](https://www.mongodb.com/): Make sure you have your own local or remote MongoDB database URI configured in `credentials/mongo.js`
<!-- - [PostMan](https://www.getpostman.com/) -->

## Installation

1. Clone the repository: `git clone git@github.com:senarius/friendly-spoon.git`
2. Install the application: `yarn install`
3. Place your own MongoDB URI in `credentials/mongo.js` unto Rename `sanple.env` file to `.env` and update `DB_URL`
4. Start the server on development: `yarn dev`
5. Execute test and test coverage: `yarn test`

## Schema

1. All API access is over HTTP, and accessed from `http://localhost:4000/api/v1`.
2. All data is sent and received as JSON.

## Authentication
There are no authentication implemented yet. So, all the end-points are open.

## Root End-Point
`http://localhost:4000/api/v1`

## Core Resources
### Book
`Book` object represents snapshot of a specific Book with a unique Id. You can retrieve it to see details about the Book.
### Comment
`Commnet` object represents snapshot of a specific Comment with a unique Id. You can retrieve it to see details about the Book remarks.

#### Schema
```
{
	book: {
    title: {
			type: String,
			required: true
    },
    author: {
			type: String,
			required: true
    },
    done: {
			type: Boolean,
			required: false
    },
    timestamps: {
			createAt: {
				type: Date,
				default: Date.now
			},
			updateAtn: {
				type: Date,
				default: Date.now
			}
    }
	},
	comment: {
    remark: {
			type: String,
			required: true
    },
    bookId: {
			type: String,
			required: true
    },
    timestamps: {
			createAt: {
				type: Date,
				default: Date.now
			},
			updateAt: {
				type: Date,
				default: Date.now
			}
    }
	}
}
```
#### End-Points
| Method | End-Point | Description |
| --- | --- | --- |
| `GET` | `/books` | List all *books* |
| `POST` | `/add-book` | Create a new *book* |
| `PUT` | `/edit-book/:id` | Edit existing *book* |
| `DELETE` | `/delete-book/:id` | Delete existing *book* |
| `GET` | `/comments` | List all *comments* |
| `POST` | `/add-comment` | Create a new *comment* |
| `DELETE` | `/delete-comment/:id` | Delete existing *comment* |

## Request & Response Examples

### API Resources
  - [GET /books](#get-books)
  - [POST /add-book](#post-add-book)
  - [PUT /edit-book/:id](#put-edit-bookbookId)
  - [DELETE /delete-book/:id](#delete-delete-bookbookId)
  - [GET /comments](#get-comments)
  - [POST /add-comment](#post-add-comment)
  - [DELETE /delete-comment/:id](#delete-delete-commentbookId)

### GET /books
To get the list of all *books*
#### Resourse Url
`http://localhost:4000/api/v1/books`
#### Request Params
`N/A`
#### Request Body
`N/A`
#### Response
```javascript
{
	"books": [
		{
			"timestamps": {
				"createAt": "2019-08-16T17:07:07.171Z",
				"updateAt": "2019-08-16T17:07:07.171Z"
			},
			"author": "author 1",
			"done": false,
			"_id": "5d56e2bbc2a36326a0a57c19",
			"title": "title 1",
			"__v": 0
		},
		{
			"timestamps": {
				"createAt": "2019-08-16T17:08:48.376Z",
				"updateAt": "2019-08-16T17:08:48.376Z"
			},
			"author": "author 2",
			"done": true,
			"_id": "5d56e320c2a36326a0a57c1a",
			"title": "title 2",
			"__v": 0
		}
	]
}
```

### POST /add-book
To create a new *book*
#### Resourse Url
`http://localhost:4000/api/v1/add-book`
#### Request Params
`N/A`
#### Request Body
```javascript
{
	"title": "title 2",
	"author": "author 2",
	"done": false
}
```
#### Response
```javascript
{
	"message": "Book added",
	"book": {
		"timestamps": {
			"createAt": "2019-08-16T17:08:48.376Z",
			"updateAt": "2019-08-16T17:08:48.376Z"
		},
		"author": "author 2",
		"done": true,
		"_id": "5d56e320c2a36326a0a57c1a",
		"title": "title 2",
		"__v": 0
	},
	"books": [
		{
			"timestamps": {
				"createAt": "2019-08-16T17:08:48.376Z",
				"updateAt": "2019-08-16T17:08:48.376Z"
			},
			"author": "author 2",
			"done": true,
			"_id": "5d56e320c2a36326a0a57c1a",
			"title": "title 2",
			"__v": 0
		}
	]
}
```

### PUT /edit-book/:bookId
To edit an existing *book*
#### Resourse Url
`http://localhost:4000/api/v1/edit-book/{{bookId}}`
#### Request Params
`{{bookId}}`
#### Request Body
```javascript
{
	"title": "UPDATED: Write Documentation",
	"author": "UPDATED: Write documentation for Book API",
	"done": false
}
```
#### Response
```javascript
{
  "message": "Book updated",
	"book": {
		"timestamps": {
			"createAt": "2019-08-16T17:08:48.376Z",
			"updateAt": "2019-08-16T17:08:48.376Z"
		},
		"author": "author 2",
		"done": false,
		"_id": "5d56e320c2a36326a0a57c1a",
		"title": "title 2",
		"__v": 0
	},
	"books": [
		{
			"timestamps": {
				"createAt": "2019-08-16T17:08:48.376Z",
				"updateAt": "2019-08-16T17:08:48.376Z"
			},
			"author": "author 2",
			"done": true,
			"_id": "5d56e320c2a36326a0a57c1a",
			"title": "title 2",
			"__v": 0
		}
	]
}
```

### DELETE /delete-book/:bookId
To delete an existing *book*
#### Resourse Url
`http://localhost:4000/api/v1/delete-book/{{bookId}}`
#### Request Params
`{{bookId}}`
#### Request Body
`N/A`
#### Response
```javascript
{
	"message": "Book deleted",
	"book": {
		"timestamps": {
			"createAt": "2019-08-16T17:08:48.376Z",
			"updateAt": "2019-08-16T17:08:48.376Z"
		},
		"author": "author 2",
		"done": false,
		"_id": "5d56e320c2a36326a0a57c1a",
		"title": "title 2",
		"__v": 0
	},
	"books": []
}
```

### GET /comments
To get the list of all *comments*
#### Resourse Url
`http://localhost:4000/api/v1/comments`
#### Request Params
`N/A`
#### Request Body
`N/A`
#### Response
```javascript
{
	"comments": [
		{
			"timestamps": {
				"createAt": "2019-08-16T17:07:07.171Z",
				"updateAt": "2019-08-16T17:07:07.171Z"
			},
			"remark": "author 1",
			"bookId": "5d56e2bbc2a36326a0a57c19",
			"_id": "5d56e2bbc2a36326a0a57c18",
			"__v": 0
		},
		{
			"timestamps": {
				"createAt": "2019-08-16T17:08:48.376Z",
				"updateAt": "2019-08-16T17:08:48.376Z"
			},
			"remark": "author 1",
			"bookId": "5d56e2bbc2a36326a0a57c19",
			"_id": "5d56e320c2a36326a0a57c1a",
			"__v": 0
		}
	]
}
```

### POST /add-comment
To create a new *comment*
#### Resourse Url
`http://localhost:4000/api/v1/add-comment`
#### Request Params
`N/A`
#### Request Body
```javascript
{
	"remark": "title 2",
	"bookId": "5d56e2bbc2a36326a0a57c19"
}
```
#### Response
```javascript
{
	"message": "Comment added",
	"comment": {
		"timestamps": {
			"createAt": "2019-08-16T17:07:07.171Z",
			"updateAt": "2019-08-16T17:07:07.171Z"
		},
		"remark": "author 1",
		"bookId": "5d56e2bbc2a36326a0a57c19",
		"_id": "5d56e2bbc2a36326a0a57c18",
		"__v": 0
	},
	"comments": [
		{
			"timestamps": {
				"createAt": "2019-08-16T17:07:07.171Z",
				"updateAt": "2019-08-16T17:07:07.171Z"
			},
			"remark": "author 1",
			"bookId": "5d56e2bbc2a36326a0a57c19",
			"_id": "5d56e2bbc2a36326a0a57c18",
			"__v": 0
		}
	]
}
```

### DELETE /delete-comment/:commentId
To delete an existing *book*
#### Resourse Url
`http://localhost:4000/api/v1/delete-comment/{{commentId}}`
#### Request Params
`{{commentId}}`
#### Request Body
`N/A`
#### Response
```javascript
{
	"message": "Comment deleted",
	"comment": {
		"timestamps": {
			"createAt": "2019-08-16T17:07:07.171Z",
			"updateAt": "2019-08-16T17:07:07.171Z"
		},
		"remark": "author 1",
		"bookId": "5d56e2bbc2a36326a0a57c19",
		"_id": "5d56e2bbc2a36326a0a57c18",
		"__v": 0
	},
	"comments": []
}
```
