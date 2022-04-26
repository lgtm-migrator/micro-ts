import path from 'path';
import dayjs from 'dayjs';
import { sayHello } from './utils';

sayHello();
console.log(path.join(process.cwd(), '..'));
console.log(dayjs().format());
