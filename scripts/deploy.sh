#!/bin/bash
npm run build
npm run build-playground
npx gh-pages -d playground/build