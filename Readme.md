Command to build : `docker build --no-cache --platform=linux/arm64  -t my-node-app .`

Command to run : `docker run --cap-add=SYS_ADMIN --cap-add=SYS_PTRACE --dns=8.8.8.8 my-node-app`
