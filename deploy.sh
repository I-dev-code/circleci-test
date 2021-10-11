#!/bin/bash

cd /home/circleci/circleci-test

git pull origin main

npm install
export PATH=~/.npm-global/bin:$PATH
source ~/.profile

pm2 restart app
