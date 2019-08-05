import { validateInput, knightsTravails } from './src/knightsTravails';

const argv = require('yargs')
    .command('shortestPath', '', () => {}, (argv) => {
        if(validateInput(argv.start, argv.end)) {
          console.log(knightsTravails(argv.start, argv.end));
        } else {
          console.log('\x1b[31m', 'Invalid input', '\x1b[0m');
          console.log('Chess notation must range from A-H and 1-8');
        }
    }).argv;
    