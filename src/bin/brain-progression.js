#!/usr/bin/env node
import { welcome } from '../games/lib';
import progressionGame from '../games/progression';

welcome('What number is missing in the progression?\n');
progressionGame();
