#!/bin/sh

rm README_GENERATED.md
touch README_GENERATED.md

cat docs-gen/readme/chapters/header.md >>README_GENERATED.md
cat docs-gen/readme/chapters/summary.md >>README_GENERATED.md
cat docs-gen/readme/chapters/mbx-intro.md >>README_GENERATED.md
cat docs-gen/readme/chapters/building-process-heading.md >>README_GENERATED.md
cat docs-gen/readme/chapters/building-process-ui-props.md >>README_GENERATED.md
cat docs-gen/readme/chapters/building-process-css-global-vars.md >>README_GENERATED.md
cat docs-gen/readme/chapters/building-process-reactive-components.md >>README_GENERATED.md
cat docs-gen/readme/chapters/getting-started.md >>README_GENERATED.md
cat docs-gen/readme/chapters/footer.md >>README_GENERATED.md
