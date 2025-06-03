FROM node:18-alpine

WORKDIR /usr/app

# copy the entire project
COPY . .

# install dependencies
RUN npm i

EXPOSE 3000
CMD [ "npm", "run", "dev" ]