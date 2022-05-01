import path from 'path';
import dayjs from 'dayjs';
import { sayHello } from './utils';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'

const MAIN_CMD = 'at-example';
const TITLE = 'micro-ts';

enum Command {
  CREATE = 'create',
  UPDATE = 'update',
}

const run = async (command: Command, args: { [appArgs: string]: unknown }) => {
  switch (command) {
    case Command.CREATE:
      console.log(`Create awesome application with name: ${args.name}`);
      sayHello();
      console.log(path.join(process.cwd(), '..'));
      console.log(dayjs().format());
      return;
    case Command.UPDATE:
      console.log('Update awesome application');
      return;
    default:
      throw new Error(`Command not implement yet`);
  }
};

yargs(hideBin(process.argv))
  .usage(TITLE)
  .command({
    command: Command.CREATE,
    describe: 'Create awesome application',
    aliases: 'c',
    builder: (builder) =>
      builder.options({
        name: { type: 'string', demandOption: true, alias: 'n' },
      }),
    handler: async (args) => {
      await run(Command.CREATE, args);
    },
  })
  .command({
    command: Command.UPDATE,
    describe: 'Update awesome application',
    aliases: 'u',
    handler: async (args) => {
      await run(Command.UPDATE, args);
    },
  })
  .example(Command.CREATE, `${MAIN_CMD} ${Command.CREATE} --name awesome-app`)
  .example(Command.UPDATE, `${MAIN_CMD} ${Command.UPDATE}`)
  .demandCommand(1, 1)
  .showHelpOnFail(true)
  .epilog('micro-ts')
  .strict().argv;
