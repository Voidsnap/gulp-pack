[logo]: https://raw.githubusercontent.com/Voidsnap/gulp-pack/master/gulp-pack.svg

# Gulp-pack

Gulp-pack ist a task runner setup with PostCSS and es6 compiler.

---
## Installation

**[Download](https://github.com/Voidsnap/gulp-pack.git) or clone this repository. Install the dependencies** You need also gulp global installed

```sh
$ npm install

$ npm install -g gulp
```

## Requirements
Requires Node.js and Gulp global

## Usage

#### build:
```sh
$ npm run build
```
#### dev mode:
```sh
$ npm run dev
```
#### dev mode + dev Server:
```sh
$ npm run dev:serve || $ npm run serve
```

## Optional
You can change some settings in the **gulp-pack.json** file.

```json
{
  "title": "Page Title",
  "author": "John Doe",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "keywords": "HTML,CSS,XML,JavaScript",
  "lang": "en",
  "port": "4000",
  "dest": "build",
  "css": {
    "src": "src/css/*.css",
    "dest": "/css",
    "bundle": "/bundle.css"
  },
  "js": {
    "src": "src/js/*.js",
    "dest": "/js",
    "bundle": "/bundle.js"
  },
  "html": {
    "src": "src/index.html",
    "dest": "build"
  }
}
```

---

### Version: 0.1.0

## todo

- fix html save reload bug
