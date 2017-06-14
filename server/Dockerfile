FROM node:8.0.0
EXPOSE 80

ENV PORT 80
ENV NODE_PATH /server

COPY ./ /server
WORKDIR /server

RUN npm install --production

CMD ["node", "/server/app.js"]
