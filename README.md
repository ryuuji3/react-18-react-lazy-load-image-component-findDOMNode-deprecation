# React 18 + react-lazy-load-image-component reproduction

On a barebones installation of React 18, this library logs a deprecation warning about `findDOMNode`.

## How to reproduce the error
```bash
npm ci
npm test
```

## The steps to reproduce error in your project
1. Install `react`@18 and `react-lazy-load-image-component`@1.6.0
2. import and use a `<LazyLoadImage>` component