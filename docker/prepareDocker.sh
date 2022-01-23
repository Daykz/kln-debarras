#!/bin/bash
registry_name=registry.whis-consulting.fr
name=kln-debarras

docker build -t $registry_name/$name:$1 . --no-cache
docker push $registry_name/$name:$1