

## Expectations
- One Project for all games
- One folder per game. When code changed in that folder, only build image for that game.
- When there are a new game which needs to use a different version of "sc-automation-core", we want to build an image for that game only. (Not update and build images for all games)

## Solutions
- The simplest way is to put test code for one game and its package dependencies in one folder per game. But this will duplicate node packages in Dev environment and change version for "sc-automation-core" will take a lot of time.
- So we arrange node package dependencies for similar games into one folder. We name it "runtime" and each "runtime" has a version. (In this project we put version similar to "sc-automation-core" version, but we can add extra info if needed)

## Result
- We have 3 projects: 1-bigsmall, 9-minisedie and 50-bigsmall-city. 
- 1-bigsmall can be run with "sc-automation-core" version 1.1.0
- 9-minisedie and 50-bigsmall-city need to be run with newer "sc-automation-core" version, but we don't want to change for 1-bigsmall
- So we add another "runtime" enviroment for 9-minisedie and 50-bigsmall-city and name it "auto-runtime-latest" (maybe we think more about the name here)
- when code change in 9-minisedie folder -> build image for 9-minisedie
- when code change in 50-bigsmall-city folder -> build image for 50-bigsmall-city
- when package.json change in "auto-runtime-latest" -> build images for 9-minisedie and 50-bigsmall-city
