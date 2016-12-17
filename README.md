# unwaffle

Unwaffle - JavaScript client for unwaffle
The [Unwaffle](https://unwaffle.com) API. 
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build date: 2016-10-12T09:37:32.013Z
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install unwaffle --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/unwaffle
then install it via:

```shell
    npm install YOUR_USERNAME/unwaffle --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Unwaffle = require('unwaffle');

var defaultClient = Unwaffle.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var api = new Unwaffle.ActionApi()

var opts = { 
  'body': new Unwaffle.TransportObject() // {TransportObject} A TransportObject describing the action. The API will also happily consume a CSV or TSV with one record per line and no header row.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addAction(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.unwaffle.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Unwaffle.ActionApi* | [**addAction**](docs/ActionApi.md#addAction) | **POST** /action | Add an action
*Unwaffle.LabelApi* | [**addLabel**](docs/LabelApi.md#addLabel) | **POST** /label | Add or update a Label
*Unwaffle.ParticipantApi* | [**addParticipant**](docs/ParticipantApi.md#addParticipant) | **POST** /participant | Add or update a Participant


## Documentation for Models

 - [Unwaffle.Action](docs/Action.md)
 - [Unwaffle.Label](docs/Label.md)
 - [Unwaffle.Participant](docs/Participant.md)
 - [Unwaffle.TransportObject](docs/TransportObject.md)


## Documentation for Authorization


### basicAuth

- **Type**: HTTP basic authentication
