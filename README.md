# How To Deploy a node.js React Application to Heroku

Deploying to Heroku is not trivial, so in order to make thing simple, I've created this repository.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

node, npm

### Installing

Clone down this repository. You will need node and npm installed globally on your machine.

run `$npm install` on both server (root) & client

create a new app in Heroku

* for the deployment process, either create a git repository or connect your local project to Heroku cli


## Deployment

via Heroku cli - 
```
$ git push heroku master
```

via Heroku admin panel -
in Heroku, navigate to the "Deploy" section, under your project

at "Deployment method" select GitHub and select repo name, conect

then scroll down and click on the "Deploy Branch" button

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Quick overview

1. make sure you are using a proxy (package.json, client side) pointing at the server api

2. add this line at package.json server side (root):
`"heroku-postbuild": "cd client && npm install && npm run build"`
"heroku-postbuild" will be activated by Heroku during the deploy process and will do the following:
cd to client
install all dependancies
create build folder with minified code

3. add this code to your server:
```
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
```

## Authors

* **Danny Leon** - *Initial work* - [doubletuna](https://github.com/doubletuna)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* thanks for all involved packages

