FROM node:alpine
WORKDIR /app
COPY .  /app
RUN yarn global add  pm2
LABEL NORE="just for test"
LABEL AUTHOR="1141591465@qq.com"
EXPOSE 8080
RUN yarn
CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]