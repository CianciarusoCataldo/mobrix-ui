#!/bin/sh

OUTPUT_PATH=docs/components
OUTPUT_CSSVARS_PATH=docs/css-vars
OUTPUT_PROPS_PATH=docs/props

rm -rf "$OUTPUT_PATH"
rm -rf docs/global
rm -rf docs/index.md

mkdir "$OUTPUT_PATH"
mkdir "$OUTPUT_PATH"/global

for type in $(
    ls src/components
); do

    TYPE_DIR="$OUTPUT_PATH"/$type
    mkdir "$TYPE_DIR"

    cp docs-gen/templates/index-group.md "$TYPE_DIR"/index.md
    sed -i "s/COMPONENTS_TYPE/$type/g" "$TYPE_DIR"/index.md

    for component in $(
        ls -p -- src/components/"$type"/ | grep / | tr -d '/'
    ); do
        COMPONENT_DIR="$type"/"$component"
        mkdir "$OUTPUT_PATH"/"$COMPONENT_DIR"

        cp "$OUTPUT_CSSVARS_PATH"/components/"$COMPONENT_DIR"/index.md "$OUTPUT_PATH"/"$COMPONENT_DIR"/css-vars.md
        cp "$OUTPUT_PROPS_PATH"/components/"$COMPONENT_DIR"/index.md "$OUTPUT_PATH"/"$COMPONENT_DIR"/props.md
        cp docs-gen/templates/index-component.md "$OUTPUT_PATH"/"$COMPONENT_DIR"/index.md
        sed -i "s/COMPONENT_NAME/$component/g" "$OUTPUT_PATH"/"$COMPONENT_DIR"/index.md
        echo -n "\n- [$component]($component/index.md)" >>"$TYPE_DIR"/index.md

    done

done

cp "$OUTPUT_CSSVARS_PATH"/global/index.md "$OUTPUT_PATH"/global/css-vars.md
cp "$OUTPUT_PROPS_PATH"/global/index.md "$OUTPUT_PATH"/global/props.md
cp "$OUTPUT_CSSVARS_PATH"/index.md "$OUTPUT_PATH"/css-vars.md
cp "$OUTPUT_PROPS_PATH"/index.md "$OUTPUT_PATH"/props.md
rm -rf "$OUTPUT_CSSVARS_PATH"
rm -rf "$OUTPUT_PROPS_PATH"
