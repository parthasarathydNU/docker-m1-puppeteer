#!/bin/bash

# Loop 10 times
for ((i=1; i<=10; i++))
do
  echo "Running Docker command - Attempt $i"
  echo "docker run my-node-app"

  # Run the Docker command
  docker run my-node-app

  # Sleep for a short time (optional) to allow resources to free up between runs
  sleep 5
done
