# h5p-interactivecode
H5P content type that can display and grade interactive code snippets. Uses [Klipse](https://github.com/viebel/klipse) and supports Javascript, Ruby, Python, C++, SQL and PHP. No server-side rendering required!

Work in progress - Still need to add grading capability.

## Todo :
- [ ] Add support for grading code snippets
- [ ] Create examples
- [ ] Add HTML, CSS, SVG and React code support


## Development :

### Compiling :

This project has been created using **webpack-cli**, you can now run

```
npm install
npm run build
```

or

```
yarn install
yarn build
```

to bundle your application

### H5P package :

```
zip -r -D -X interactivecode.h5p .*
```