# The Problem

You are being asked to write a software subsytem of an air-traffic control system.

The system is defined to manage a queue of aircraft (AC) in an airport.
The aircraft queue is managed by a process which responds to three types of requests:

1. system boot used to start the system.

2. enqueue aircraft used to insert a new AC into the system.

3. dequeue aircraft used to remove an AC from the system.


AC’s have the following properties:

AC type: Passenger or Cargo

AC size: Small or Large

The process which manages the queue of AC’s satisfies the following:

There is no limit on the number of AC’s it can manage

Dequeue aircraft requests result in selection of one AC for removal such that:

Passenger AC’s have removal precedence over Cargo AC’s

Large AC’s of a given type have removal precedence over Small AC’s of the same type.

Earlier enqueued AC’s of a given type and size have precedence over later enqueued AC’s of the same type and size.


## What you are asked to do
Write your code for this subsystem in this angular app. The app is based on the [angular-seed](https://github.com/angular/angular-seed)
app that is provided by angular team.

The angular app has two controllers for now, one to paint the input form to add a new aircraft.
Another controller is there to dequeue an aircraft and show the aircraft that has been dequeued.

Feel free to add more controllers, views, etc. to complete the problem.

Have fun!


## Running the webserver
You will most likely be doing this test in a system that is fully setup, then you will not need
any of this. Just run

```
npm start
```

and you will have a brower interface at http://localhost:8000 to view your work.



## Setup from scratch
If you do not have a system setup for this, and need to setup your own system, then follow these
instructions:

### Tools

This app leverages the [angular-seed](https://github.com/angular/angular-seed.git) setup. 
It uses a number of node.js tools to initialize and test.
You must have node.js and its package manager (npm) installed.
You can get them from [http://nodejs.org/](http://nodejs.org/).

### Install Dependencies

There are two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
angular-seed changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.

## Directory Layout

    app/                --> all of the files to be used in production
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      index.html        --> app layout file (the main html template file of the app)
      index-async.html  --> just like index.html, but loads js files asynchronously
      js/               --> javascript files
        app.js          --> application
        controllers.js  --> application controllers
        directives.js   --> application directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
      partials/             --> angular view partials (partial html templates)
        partial1.html
        partial2.html

    test/               --> test config and source files
      protractor-conf.js    --> config file for running e2e tests with Protractor
      e2e/                  --> end-to-end specs
        scenarios.js
      karma.conf.js         --> config file for running unit tests with Karma
      unit/                 --> unit level specs/tests
        controllersSpec.js      --> specs for controllers
        directivessSpec.js      --> specs for directives
        filtersSpec.js          --> specs for filters
        servicesSpec.js         --> specs for services


## Testing

There are two kinds of tests in the angular-seed application: Unit tests and End to End tests.

### Running Unit Tests

The angular-seed app comes preconfigured with unit tests. These are written in
[Jasmine][jasmine], which we run with the [Karma Test Runner][karma]. We provide a Karma
configuration file to run them.

* the configuration is found at `test/karma.conf.js`
* the unit tests are found in `test/unit/`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit.  This is useful if you want to
check that a particular version of the code is operating as expected.  The project contains a
predefined script to do this:

```
npm run test-single-run
```


### End to end testing

The angular-seed app comes with end-to-end tests, again written in [Jasmine][jasmine]. These tests
are run with the [Protractor][protractor] End-to-End test runner.  It uses native events and has
special features for Angular applications.

* the configuration is found at `test/protractor-conf.js`
* the end-to-end tests are found in `test/e2e/`

Protractor simulates interaction with our web app and verifies that the application responds
correctly. Therefore, our web server needs to be serving up the application, so that Protractor
can interact with it.

```
npm start
```

In addition, since Protractor is built upon WebDriver we need to install this.  The angular-seed
project comes with a predefined script to do this:

```
npm run update-webdriver
```

This will download and install the latest version of the stand-alone WebDriver tool.

Once you have ensured that the development web server hosting our application is up and running
and WebDriver is updated, you can run the end-to-end tests using the supplied npm script:

```
npm run protractor
```

This script will execute the end-to-end tests against the application being hosted on the
development server.



