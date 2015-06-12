#!/bin/sh
mocha app/test --compilers js:babel/register
mocha app/shared/mail/test --compilers js:babel/register