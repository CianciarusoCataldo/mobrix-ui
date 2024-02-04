#!/bin/sh

export OUTPUT_FILE_PATH="docs/props"
export README_CHAPTER_PATH=docs-gen/readme/chapters/building-process-shared-props.md
export README_CHAPTER_PATH_PUBLISHED=docs-gen/readme/chapters/published/building-process-shared-props.md

rm -rf "$OUTPUT_FILE_PATH"
rm -f docs-gen/readme/chapters/building-process-shared-props.md

mkdir "$OUTPUT_FILE_PATH"

touch docs-gen/readme/chapters/building-process-shared-props.md
touch "$OUTPUT_FILE_PATH"/index.md
touch "$OUTPUT_FILE_PATH"/summary.md
touch "$OUTPUT_FILE_PATH"/tables.md

mkdir "$OUTPUT_FILE_PATH"/global
touch "$OUTPUT_FILE_PATH"/global/index.md
touch "$OUTPUT_FILE_PATH"/global/list.md
touch "$OUTPUT_FILE_PATH"/global/table.md

mkdir "$OUTPUT_FILE_PATH"/components

cat docs-gen/props/templates/base.md >>"$OUTPUT_FILE_PATH"/index.md
cat docs-gen/props/templates/table-header.md >>"$OUTPUT_FILE_PATH"/global/table.md
cat docs-gen/readme/templates/props.md >>docs-gen/readme/chapters/building-process-shared-props.md

COUNT=0
cat docs-gen/props/templates/table-base.md >>"$OUTPUT_FILE_PATH"/global/index.md
for cssvar in $(cat docs-gen/components/shared-props.json | jq 'keys_unsorted[]'); do
    touch "$OUTPUT_FILE_PATH"/global/tmp_row.md
    touch "$OUTPUT_FILE_PATH"/global/tmp_row_mini.md
    cat docs-gen/props/templates/table-row.md >>"$OUTPUT_FILE_PATH"/global/tmp_row.md
    sed -i "s/PROP_NAME/PROP_NAME_$COUNT/g" "$OUTPUT_FILE_PATH"/global/tmp_row.md
    sed -i "s/PROP_TYPE/PROP_TYPE_$COUNT/g" "$OUTPUT_FILE_PATH"/global/tmp_row.md
    sed -i "s/PROP_DEFAULT/"PROP_DEFAULT_$COUNT"/g" "$OUTPUT_FILE_PATH"/global/tmp_row.md
    cat "$OUTPUT_FILE_PATH"/global/tmp_row.md >>"$OUTPUT_FILE_PATH"/global/table.md
    echo -n "\n<br>\n\n" >>"$OUTPUT_FILE_PATH"/global/list.md
    echo "## $cssvar\n\n<br>" >>"$OUTPUT_FILE_PATH"/global/list.md
    echo -n "\n\n" >>"$OUTPUT_FILE_PATH"/global/list.md
    cat docs-gen/props/templates/table-header-mini.md >>"$OUTPUT_FILE_PATH"/global/tmp_row_mini.md
    cat docs-gen/props/templates/table-row-mini.md >>"$OUTPUT_FILE_PATH"/global/tmp_row_mini.md
    sed -i "s/PROP_TYPE/PROP_TYPE_$COUNT/" "$OUTPUT_FILE_PATH"/global/tmp_row_mini.md
    sed -i "s/PROP_DEFAULT/"PROP_DEFAULT_$COUNT"/" "$OUTPUT_FILE_PATH"/global/tmp_row_mini.md
    cat "$OUTPUT_FILE_PATH"/global/tmp_row_mini.md >>"$OUTPUT_FILE_PATH"/global/list.md
    echo -n "\n<br>\n" >>"$OUTPUT_FILE_PATH"/global/list.md
    echo -n "\n\n<br>\n\n" >>"$OUTPUT_FILE_PATH"/global/list.md
    echo "\n\nVAR_DESCRIPTION_$COUNT" >>"$OUTPUT_FILE_PATH"/global/list.md
    echo -n "\n\n<br>\n\n" >>"$OUTPUT_FILE_PATH"/global/list.md
    COUNT=$((COUNT + 1))
    rm "$OUTPUT_FILE_PATH"/global/tmp_row.md
    rm "$OUTPUT_FILE_PATH"/global/tmp_row_mini.md
done

sed -i 's/"//g' "$OUTPUT_FILE_PATH"/global/list.md

echo -n "\n\n" >>"$README_CHAPTER_PATH"
cat "$OUTPUT_FILE_PATH"/global/table.md >>"$README_CHAPTER_PATH"
node docs-gen/props/parse-shared-props.js

rm "$OUTPUT_FILE_PATH"/global/list.md

for type in $(
    ls src/components/
); do
    typeDir="$OUTPUT_FILE_PATH"/components/"$type"
    mkdir "$typeDir"
    touch "$typeDir"/summary.md
    touch "$typeDir"/index.md
    touch "$typeDir"/tables.md
    cat docs-gen/props/templates/group-base.md >>"$typeDir"/index.md
    sed -i "s/COMPONENTS_TYPE/$type/g" "$typeDir"/index.md
    echo " - [${type}](#$type)\n" >>"$OUTPUT_FILE_PATH"/summary.md
    echo "\n\n## $type\n" >>"$OUTPUT_FILE_PATH"/tables.md

    for actualComponent in $(
        ls -p -- src/components/"$type"/ | grep /
    ); do
        component=$(echo "$actualComponent" | tr -d '/')
        summaryComponent=$(echo "$component" | tr '[:upper:]' '[:lower:]')
        echo " - [${component}](#$summaryComponent)\n" >>"$typeDir"/summary.md
        echo "   - [${component}](#$summaryComponent)\n" >>"$OUTPUT_FILE_PATH"/summary.md
        componentPath="$typeDir"/"$component"
        mkdir "$componentPath"
        touch "$componentPath"/table.md
        touch "$componentPath"/table-external.md
        touch "$componentPath"/table-global.md
        touch "$componentPath"/index-global.md
        touch "$componentPath"/list.md
        touch "$componentPath"/index.md
        touch "$componentPath"/index-external.md
        cat docs-gen/props/templates/table-header.md >>"$componentPath"/table.md
        cat docs-gen/props/templates/table-header.md >>"$componentPath"/table-external.md
        cat docs-gen/props/templates/table-header.md >>"$componentPath"/table-global.md
        cat docs-gen/props/templates/table-base.md >>"$componentPath"/index.md
        cat docs-gen/props/templates/table-base-external.md >>"$componentPath"/index-external.md
        cat docs-gen/props/templates/table-base-global.md >>"$componentPath"/index-global.md

        COUNTER=0

        for cssvar in $(cat docs-gen/components/"$type"/"$component"/props.json | jq 'keys_unsorted[]'); do
            touch "$componentPath"/tmp_row.md
            touch "$componentPath"/tmp_row_mini.md
            touch "$componentPath"/tmp_row_external.md
            touch "$componentPath"/tmp_row_global.md
            cat docs-gen/props/templates/table-header-mini.md >>"$componentPath"/tmp_row_mini.md
            cat docs-gen/props/templates/table-row-mini.md >>"$componentPath"/tmp_row_mini.md
            cat docs-gen/props/templates/table-row.md >>"$componentPath"/tmp_row.md
            cat docs-gen/props/templates/table-row.md >>"$componentPath"/tmp_row_external.md
            cat docs-gen/props/templates/table-row.md >>"$componentPath"/tmp_row_global.md
            sed -i "s/PROP_NAME/PROP_NAME_$COUNTER/g" "$componentPath"/tmp_row.md
            sed -i "s/PROP_TYPE/PROP_TYPE_$COUNTER/g" "$componentPath"/tmp_row.md
            sed -i "s/PROP_DEFAULT/"PROP_DEFAULT_$COUNTER"/g" "$componentPath"/tmp_row.md
            sed -i "s/PROP_NAME/PROP_NAME_EXTERNAL_$COUNTER/g" "$componentPath"/tmp_row_external.md
            sed -i "s/PROP_TYPE/PROP_TYPE_EXTERNAL_$COUNTER/g" "$componentPath"/tmp_row_external.md
            sed -i "s/PROP_DEFAULT/"PROP_DEFAULT_EXTERNAL_$COUNTER"/g" "$componentPath"/tmp_row_external.md
            sed -i "s/PROP_NAME/PROP_NAME_GLOBAL_$COUNTER/g" "$componentPath"/tmp_row_global.md
            sed -i "s/PROP_TYPE/PROP_TYPE_GLOBAL_$COUNTER/g" "$componentPath"/tmp_row_global.md
            sed -i "s/PROP_DEFAULT/"PROP_DEFAULT_GLOBAL_$COUNTER"/g" "$componentPath"/tmp_row_global.md
            sed -i "s/PROP_TYPE/PROP_TYPE_$COUNTER/g" "$componentPath"/tmp_row_mini.md
            sed -i "s/PROP_DEFAULT/"PROP_DEFAULT_$COUNTER"/g" "$componentPath"/tmp_row_mini.md
            cat "$componentPath"/tmp_row_global.md >>"$componentPath"/table-global.md
            cat "$componentPath"/tmp_row_external.md >>"$componentPath"/table-external.md
            cat "$componentPath"/tmp_row.md >>"$componentPath"/table.md
            echo "### $cssvar\n\n<br>" >>"$componentPath"/list.md
            echo -n "\n\n" >>"$componentPath"/list.md
            cat "$componentPath"/tmp_row_mini.md >>"$componentPath"/list.md
            echo -n "\n\n" >>"$componentPath"/list.md
            echo "VAR_DESCRIPTION_$COUNTER<br><br>" >>"$componentPath"/list.md
            COUNTER=$((COUNTER + 1))
            rm "$componentPath"/tmp_row.md
            rm "$componentPath"/tmp_row_external.md
            rm "$componentPath"/tmp_row_global.md
            rm "$componentPath"/tmp_row_mini.md
        done

        sed -i 's/"//g' "$componentPath"/list.md

        export COMPONENT_TYPE="$type"
        export COMPONENT_NAME="$component"

        node "docs-gen/props/parse-component.js"

        cat "$componentPath"/index-external.md >>"$typeDir"/tables.md
        echo -n "" >>"$typeDir"/tables.md

        cat "$componentPath"/index-global.md >>"$OUTPUT_FILE_PATH"/tables.md
        echo -n "" >>"$OUTPUT_FILE_PATH"/tables.md
        rm "$componentPath"/table.md
        rm "$componentPath"/list.md
        rm "$componentPath"/table-external.md
        rm "$componentPath"/table-global.md
        rm "$componentPath"/index-global.md
        rm "$componentPath"/index-external.md

    done

    echo -n "\n" >>"$typeDir"/index.md
    cat "$typeDir"/summary.md >>"$typeDir"/index.md
    cat "$typeDir"/tables.md >>"$typeDir"/index.md
    rm "$typeDir"/summary.md
    rm "$typeDir"/tables.md
done

cat "$OUTPUT_FILE_PATH"/summary.md >>"$OUTPUT_FILE_PATH"/index.md
cat "$OUTPUT_FILE_PATH"/tables.md >>"$OUTPUT_FILE_PATH"/index.md
rm "$OUTPUT_FILE_PATH"/summary.md
rm "$OUTPUT_FILE_PATH"/tables.md
