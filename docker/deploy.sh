#!/bin/bash
registry_name=registry.whis-consulting.fr
name=kln-debarras

docker pull $registry_name/$name
docker ps -a -q --filter name=$name | xargs docker rm -f
docker run -d --restart always --name $name --publish=2000:2000 $registry_name/$name