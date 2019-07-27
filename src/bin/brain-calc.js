#!/usr/bin/env node
import { welcome } from '../games/lib';
import calcGame from '../games/calc';

welcome('What is the result of the expression?\n');
calcGame();
