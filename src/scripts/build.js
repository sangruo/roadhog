import chalk from 'chalk';
import yargs from 'yargs';

const argv = yargs.option('watch', {
  alias: 'w',
  default: false,
}).argv;

let entry;
if (argv._.length > 0) {
  entry = argv._[0];
}

process.env.NODE_ENV = 'production';
require('../build')
  .default({
    cwd: process.cwd(),
    watch: argv.watch,
    entry,
  })
  .catch(e => {
    console.error(chalk.red(`Build failed: ${e.message}`));
    console.log(e);
  });
