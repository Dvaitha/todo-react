# pull official base image
FROM node:16.3.0

# set working directory
WORKDIR /todo-react

# add `/app/node_modules/.bin` to $PATH
ENV PATH /todo-react/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@4.0.3 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]
