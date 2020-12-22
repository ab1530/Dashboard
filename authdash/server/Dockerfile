FROM node:8

WORKDIR /usr/app
COPY package*.json ./
RUN npm install -qy
COPY . .

ENV PORT 5000

EXPOSE 5000

CMD ["npm", "start"]