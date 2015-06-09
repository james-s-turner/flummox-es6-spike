#!/bin/sh
mocha  --compilers js:babel/register app/test
#mocha app/shared/mail/test --compilers js:babel/register