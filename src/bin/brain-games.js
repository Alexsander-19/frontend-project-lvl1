#!/usr/bin/env node

import { askName, sayHi } from '../index';

console.log('Welcome to the Brain Games!\n');
sayHi(askName());
