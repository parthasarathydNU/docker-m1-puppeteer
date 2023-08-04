#!/bin/bash

# Loop 10 times
for ((i=1; i<=10; i++))
do
  echo "Running Docker command - Attempt $i"

  # Run the Docker command
  docker run --cap-add=SYS_ADMIN --cap-add=SYS_PTRACE --dns=8.8.8.8 my-node-app

  # Sleep for a short time (optional) to allow resources to free up between runs
  sleep 5
done
