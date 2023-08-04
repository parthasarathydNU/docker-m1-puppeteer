## System Specs
Chip: Apple M1
macOS: 13.0 (22A380) Ventura

Command to build : `docker build --no-cache --platform=linux/arm64  -t my-node-app .`

Command to run : `docker run --cap-add=SYS_ADMIN --cap-add=SYS_PTRACE --dns=8.8.8.8 my-node-app`

## Problem Statement:
Puppeter fails on Apple M1 and running Puppeteer with `headless:true` is extremely slow

## Hypothesis:
1. Node version plays a part in the speed of creating a browser instance
2. Using a dns flag in the docker run step increases speed of execution
3. Adding flags like `--cap-add=SYS_ADMIN --cap-add=SYS_PTRACE` in the docker run command increases speed of execution
4. Adding `--platform=linux/arm64` in the dockerfile makes this work on M1
5. Using `--platform=linux/arm64` flag in the build step makes this work on M1

## What made the difference:

- Upgrading the node version to 20.2.0 worked
Possible explanation : Newer versions often come with performance improvements.


## Observations:
- The program ran even without using the `--cap-add=SYS_ADMIN --cap-add=SYS_PTRACE` flags
- The program ran even without using `--dns=8.8.8.8` flag in the run command
- The program ran even without having to mention `--platform=linux/arm64` within the docker file
- The program ran even without having to mention `--platform=linux/arm64` in the build step


### Testing PDF generation

