FROM node:carbon
# node:carbon allows you to add node (sometimes Java, python)
WORKDIR ./
# To add all of the code from this folder to the WORKDIR
COPY . .
# need to install node packages
RUN npm install
#expose a port to connect to the web #use same port as server.js
EXPOSE 3003
#the command that is run when we start the container
CMD ["npm","start"]