# TypeScript introduction

## Create a new project
``npm init -y``

## Add TypeScript to the project

``npm i typescript``

## Initialize a new TS config

``npx tsc --init --rootdir src --outdir lib``

`This will create a config file where we indicate that all of our source code will be located in folder and the output javascript code should be generated on the lib folder.`

## Run the project

``npx tsc --watch``
