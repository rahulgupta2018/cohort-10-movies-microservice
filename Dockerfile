# specify the base image
FROM node:16-alpine
#  create app working directory
WORKDIR /usr/src/app
# copy the files for the packages needed 
COPY package*.json ./
# install the packages from the package.json
RUN npm install
# copy all the source code
COPY ./ ./
# expose a port
EXPOSE 3000
# run the command to start the application
CMD npm run start
