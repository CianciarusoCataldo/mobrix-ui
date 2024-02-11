#!/bin/sh

export OUTPUT_ROOT_DIR=docs
export COMPONENTS_FILES_DIR=src/components
export COMPONENTS_DOCS_DIR="$OUTPUT_ROOT_DIR"/components
export GLOBAL_SETTINGS_DIR=docs-gen/global
export SHARED_DIR="$OUTPUT_ROOT_DIR"/shared
export COMPONENTS_SETTINGS_DIR=docs-gen/components
export TEMPLATE_DIR=docs-gen/templates
export SCRIPTS_DIR=docs-gen/utils
export README_CHAPTERS_DIR=docs-gen/readme/chapters

export PARSE_MODE=global

globalPageTitle="MoBrix-ui shared"

rm -rf "$OUTPUT_ROOT_DIR"/shared

mkdir "$OUTPUT_ROOT_DIR"/shared

cp "$TEMPLATE_DIR"/index-component.md "$OUTPUT_ROOT_DIR"/shared/index.md
cp "$TEMPLATE_DIR"/props-page.md "$OUTPUT_ROOT_DIR"/shared/props.md
cp "$TEMPLATE_DIR"/css-vars-page.md "$OUTPUT_ROOT_DIR"/shared/css-vars.md

sed -i "s/COMPONENT_NAME/$globalPageTitle/g" "$OUTPUT_ROOT_DIR"/shared/index.md
sed -i "s/COMPONENT_NAME/$globalPageTitle/g" "$OUTPUT_ROOT_DIR"/shared/css-vars.md
sed -i "s/COMPONENT_NAME/$globalPageTitle/g" "$OUTPUT_ROOT_DIR"/shared/props.md

node "$SCRIPTS_DIR/generate-docs.js"

export PARSE_MODE=components

rm -rf "$OUTPUT_ROOT_DIR"/components

mkdir "$COMPONENTS_DOCS_DIR"

fullPageTitle="components"

cp "$TEMPLATE_DIR"/index-group.md "$COMPONENTS_DOCS_DIR"/index.md
sed -i "s/COMPONENTS_TYPE/$fullPageTitle/g" "$COMPONENTS_DOCS_DIR"/index.md

for type in $(
    ls "$COMPONENTS_FILES_DIR"
); do
    typeDir="$COMPONENTS_DOCS_DIR"/"$type"
    mkdir "$typeDir"
    cp "$TEMPLATE_DIR"/index-group.md "$typeDir"/index.md
    sed -i "s/COMPONENTS_TYPE/$type/g" "$typeDir"/index.md
    echo "[$(python3 -c "print(\"$type\".capitalize())")](https://cianciarusocataldo.github.io/mobrix-ui/docs/components/$type/)\n" >>"$COMPONENTS_DOCS_DIR"/index.md
    for component in $(
        ls -p -- "$COMPONENTS_FILES_DIR"/"$type"/ | grep / | tr -d '/'
    ); do
        echo " - [$component](https://cianciarusocataldo.github.io/mobrix-ui/docs/components/$type/$component/)\n" >>"$COMPONENTS_DOCS_DIR"/index.md
        export COMPONENT_DIR="$typeDir"/"$component"
        mkdir "$COMPONENT_DIR"

        export COMPONENT_INDEX_EXT=$(find ./src/components/"$type"/"$component"/index.* -printf "%f\n" | cut -d'.' -f2)
        export COMPONENT_NAME="$component"
        export COMPONENT_TYPE="$type"

        node "$SCRIPTS_DIR/update-props.js"
        node "$SCRIPTS_DIR/update-css-vars.js"
        node "$SCRIPTS_DIR/update-comments.js"

        echo " - [$component](https://cianciarusocataldo.github.io/mobrix-ui/docs/components/$type/$component/)" >>"$typeDir"/index.md

        cp "$TEMPLATE_DIR"/index-component.md "$COMPONENT_DIR"/index.md
        cp "$TEMPLATE_DIR"/props-page.md "$COMPONENT_DIR"/props.md
        cp "$TEMPLATE_DIR"/css-vars-page.md "$COMPONENT_DIR"/css-vars.md

        sed -i "s/COMPONENT_NAME/$component/g" "$COMPONENT_DIR"/index.md
        sed -i "s/COMPONENT_NAME/$component/g" "$COMPONENT_DIR"/props.md
        sed -i "s/COMPONENT_NAME/$component/g" "$COMPONENT_DIR"/css-vars.md

        node "$SCRIPTS_DIR/generate-docs.js"

    done

done

rm -rf README.md
rm -rf "$OUTPUT_ROOT_DIR"/index.md
rm -rf "$OUTPUT_ROOT_DIR"/Changelog.md
rm -rf "$OUTPUT_ROOT_DIR"/License.md
rm -rf playground/public/docs
mkdir playground/public/docs

touch README.md
touch "$OUTPUT_ROOT_DIR"/index.md
touch README_TEMP.md

cat docs-gen/readme/chapters/header.md >>README.md
cat docs-gen/readme/chapters/header.md >>"$OUTPUT_ROOT_DIR"/index.md

cat docs-gen/readme/chapters/summary.md >>README.md
cat docs-gen/readme/chapters/mbx-intro-extra.md >>README.md

cat docs-gen/readme/chapters/mbx-intro.md >>README_TEMP.md

cat docs-gen/readme/chapters/building-process-heading.md >>README_TEMP.md
cat docs-gen/readme/chapters/building-process-shared-props.md >>README_TEMP.md

echo -n "\n\n<br>\n\n" >>README_TEMP.md

cat docs-gen/readme/chapters/building-process-css-global-vars.md >>README_TEMP.md

echo -n "\n\n<br>\n\n" >>README_TEMP.md

cat docs-gen/readme/chapters/building-process-reactive-components.md >>README_TEMP.md
echo -n "\n\n<br>\n\n" >>README_TEMP.md

cat docs-gen/readme/chapters/getting-started.md >>README_TEMP.md
echo -n "\n\n<br>\n\n" >>README_TEMP.md

cat docs-gen/readme/chapters/footer.md >>README_TEMP.md

cat README_TEMP.md >>README.md
cat docs-gen/readme/chapters/license-section.md >>README.md
cat README_TEMP.md >>"$OUTPUT_ROOT_DIR"/index.md
rm -rf README_TEMP.md

cp -a CHANGELOG.md "$OUTPUT_ROOT_DIR"/Changelog.md
cp -a LICENSE "$OUTPUT_ROOT_DIR"/License.md

npx --yes prettier --log-level silent --write src/components/*/*/*.ts src/components/*/*/*.tsx README.md "$OUTPUT_ROOT_DIR"/index.md "$OUTPUT_ROOT_DIR"/**/*.md "$OUTPUT_ROOT_DIR"/*/**/*.md "$OUTPUT_ROOT_DIR"/*/*/*.md "$OUTPUT_ROOT_DIR"/*/*/*/*.md "$COMPONENTS_SETTINGS_DIR"/*/*/*.json

python3 -m mkdocs build --quiet -d playground/public/docs

rm -rf docs/Changelog.md
rm -rf docs/License.md
