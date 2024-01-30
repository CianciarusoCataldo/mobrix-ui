#!/bin/sh

for type in $(
    ls src/components/
); do
    typeDir="$OUTPUT_FILE_PATH"/components/"$type"

    for component in $(
        ls -p -- src/components/"$type"/ | grep / | tr -d '/'
    ); do

        export COMPONENT_INDEX_EXT=$(find ./src/components/"$type"/"$component"/index.* -printf "%f\n" | cut -d'.' -f2)

        echo "$TMP"

        export COMPONENT_NAME="$component"
        export COMPONENT_TYPE="$type"

        node "docs-gen/utils/update-comments.js"

    done

done
