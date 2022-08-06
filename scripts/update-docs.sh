#!/bin/bash
npm i
node scripts/update-docs.js
cp CHANGELOG.md playground/public/docs/changelog.md