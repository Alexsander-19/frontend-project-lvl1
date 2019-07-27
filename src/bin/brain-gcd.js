#!/usr/bin/env node
import { welcome } from '../games/lib';
import gcdGame from '../games/gcd';

welcome('Find the greatest common divisor of given numbers.\n');
gcdGame();
