FROM node:carbon

WORKDIR /Users/Kevin/Desktop/Amazon

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 2106

CMD [ "npm", "start" ]