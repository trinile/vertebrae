var prompt = require('inquirer').prompt;
var express = require('express');
var app = express();
var open = require('open');

// Prompt user for current step of tutorial
prompt({
  type: 'list',
  name: 'step',
  message: 'Which step are you on?',
  choices: [
    { name: 'Introduction: MVC', value: 0 },
    { name: 'Create a MODEL', value: 1 },
    { name: 'Render a Model: the VIEW', value: 2 },
    { name: 'Interactions: the CONTROLLER', value: 3 },
    { name: 'Building an entire application', value: 4 },
    { name: 'Going fullstack: interacting with your server', value: 5 }
  ]
}, function(answers) {
  // Serve specified step
  app.set('view engine', 'html');
  app.set('views', __dirname);
  app.engine('html', require('consolidate').underscore);
  app.get('/', function(req, res) { res.render('index', { step: answers.step }); });

  // Serve dependencies
  app.use(express.static(__dirname));

  app.listen(8000);
  open('http://0.0.0.0:8000');
});