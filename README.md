# nodejs rss demo with nodemon watch changes

you can run local  || with docker


## for package application

* global install  pkg  package

```code
npm install -g pkg
```

* package application

```code
pkg  .
```

* for small package size build like below

```code
pkg -t alpine .  && docker build -f Dockerfile-alpine -t dalongrong/rssjs:alpine .
```

* with docker-compose running

you can change the index.js file for generate new rss content

```code
docker-compose up -d
```