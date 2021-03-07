echo 'Pulling Latest version from Github ...'
docker pull docker.pkg.github.com/codecreatorbot/merntemplate/backend:latest

echo 'Launching Server ...'
docker-compose -f docker-compose-server.yaml up