#!/bin/sh

export OUTPUT_FILE_PATH="docs/css-vars/"

rm docs/css-vars/*.md

touch "$OUTPUT_FILE_PATH"/full-css-vars.md

base=$(cat docs/templates/base.md)

echo "$base" >>"$OUTPUT_FILE_PATH"/full-css-vars.md

node "scripts/docs/parser.js"
