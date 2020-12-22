FROM node:8

WORKDIR /usr/app
COPY package*.json ./
ENV PATH /usr/app/node_modules/.bin:$PATH
RUN npm install 

COPY . .

EXPOSE 4200 49153

CMD ["npm", "start"]