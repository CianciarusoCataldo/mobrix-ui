#!/bin/sh

rm -rf README.md
touch README.md

cat docs-gen/readme/chapters/header.md >>README.md
cat docs-gen/readme/chapters/summary.md >>README.md
cat docs-gen/readme/chapters/mbx-intro.md >>README.md
cat docs-gen/readme/chapters/building-process-heading.md >>README.md
cat docs-gen/readme/chapters/building-process-shared-props.md >>README.md
echo -n "\n\n<br>\n\n" >>README.md
cat docs-gen/readme/chapters/building-process-css-global-vars.md >>README.md
echo -n "\n\n<br>\n\n" >>README.md
cat docs-gen/readme/chapters/building-process-reactive-components.md >>README.md
echo -n "\n\n<br>\n\n" >>README.md
cat docs-gen/readme/chapters/getting-started.md >>README.md
echo -n "\n\n<br>\n\n" >>README.md
cat docs-gen/readme/chapters/footer.md >>README.md
