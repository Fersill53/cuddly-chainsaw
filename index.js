const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require('chalk');
const {Triangle, Circle, Square} = require('./Library/shapes');

function generateLogo() {
    inquirer
        .prompt ([
            {
                type: 'list',
                name: 'shape',
                message: 'Select a shape',
                choices: ['Triangle', 'Circle', 'Square'],
            },

            {
                type: 'input',
                name: 'color',
                message: 'Enter a color',
            },

            {
                type: 'input',
                name: 'text',
                message: 'Enter logo text',
            },

            {
                type: 'input',
                name: 'filename',
                message: 'Enter name of file including .svg extension',
            },
        ])
        
        .then((answers)=>{
            let shape;
            switch (answers.shape) {
                case 'Triangle':
                    shape = new Triangle(answers.color);
                    break;

                case 'Circle':
                    shape = new Circle(answers.color);
                    break;

                case 'Square':
                        shape = new Square(answers.color);
                        break;
                    
                    default:
                        console.error(chalk.red('Invalid Shape Selected'));
                        return;
            }
        })
}

function saveLogoToFile(svg, filename) {
    fs.writeFile(filename, svg, (err) => {
      if (err) {
        console.error(chalk.red(`Error saving file: ${err.message}`));
      } else {
        console.log(chalk.green(`Logo saved to ${filename}`));
      }
    });
  }

  generateLogo()
