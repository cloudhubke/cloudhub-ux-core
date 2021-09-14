
#!/bin/bash
DIR=$(pwd)
SUB='/cloudhub-ux-core'
if [[ "$DIR" == *"$SUB"* ]]; then
    echo $(pwd)
    npm version minor --no-git-tag-version
    cp package.json ../core/package.json
    cp node_modules/@devexpress -R node_modules/@devexpress
    cp .npmignore ../core/.npmignore
    cp publish.sh ../core/publish.sh
    cd ../core
    echo "\n\n PUBLISHING from $(pwd)... \n\n";
    npm publish
    echo "💥💥 Ignore the error below! Project has been published from the /core directory 💥💥\n\n"
    exit 1
fi

