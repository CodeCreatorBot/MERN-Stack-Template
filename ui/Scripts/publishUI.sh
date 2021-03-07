echo 'Publishing React App Image to Github ...'
imageID = docker images -q mern-template-react-app:1.0
docker tag $imageID docker.pkg.github.com/codecreatorbot/merntemplate/react-app:1.0react-app:1.0
docker login https://docker.pkg.github.com -u <Username> -p <Personal Acess Token>
docker push docker.pkg.github.com/codecreatorbot/merntemplate/react-app:1.0