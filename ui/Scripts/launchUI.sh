echo 'Pulling Latest version from Github ...'
docker pull docker.pkg.github.com/codecreatorbot/merntemplate/react-app:latest

echo 'Launching UI ...'
docker-compose -f docker-compose-ui.yaml up