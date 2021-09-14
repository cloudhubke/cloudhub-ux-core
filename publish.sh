#!/bin/bash
DIR=$(pwd)
SUB='/dist'
if [[ "$DIR" == *"$SUB"* ]]; 
then
    echo "\n\n PUBLISHING from $(pwd)... \n\n";
else
    echo $(pwd)
    npm version minor --no-git-tag-version
    cp package.json ./dist/package.json
    cp .npmignore ./dist/.npmignore
    cp publish.sh ./dist/publish.sh
    cd ./dist
    npm publish
    echo "💥💥 Ignore the error below! Project has been published from the /core directory 💥💥\n\n"
    exit 1
fi

