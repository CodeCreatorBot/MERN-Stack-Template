echo 'Publishing Backend Image to Github ...'
imageID = docker images -q mern-template-backend:1.0
docker tag $imageID docker.pkg.github.com/codecreatorbot/merntemplate/backend
docker login https://docker.pkg.github.com -u <Username> -p <Personal Acess Token>
docker push docker.pkg.github.com/codecreatorbot/merntemplate/backend:1.0