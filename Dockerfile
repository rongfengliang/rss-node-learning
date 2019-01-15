FROM node:alpine
WORKDIR /app
COPY .  /app
LABEL NORE="just for test"
LABEL AUTHOR="1141591465@qq.com"
EXPOSE 8080
RUN yarn
CMD [ "yarn","app" ]