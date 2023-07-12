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
                name: 'shape color',
                message: 'Enter a color for the shape',
            },

            {
                type: 'input',
                name: 'text',
                message: 'Enter logo text',
            },

            {
                type: 'input',
                name: 'text color',
                message: 'Enter text color',
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

            const svg = `
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
              ${shape.render()}
              <text x="50%" y="50%" text-anchor="middle" fill="black" dy=".3em">${answers.text}</text>
            </svg>
          `;

          saveLogoToFile(svg, answers.filename);

        })

        .catch((err)=> {
            console.error(chalk.red('Error creating logo: ${err.message}'));
        });
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
