#!/bin/sh

rm -rf README.md
rm -rf docs/index.md
rm -rf docs/changelog.md
rm -rf playground/public/docs
mkdir playground/public/docs

touch README.md
touch README_PUBLISHED.md

cat docs-gen/readme/chapters/header.md >>README.md
cat docs-gen/readme/chapters/summary.md >>README.md
cat docs-gen/readme/chapters/mbx-intro.md >>README.md
cat docs-gen/readme/chapters/building-process-heading.md >>README.md
cat README.md >>README_PUBLISHED.md

cat docs-gen/readme/chapters/building-process-shared-props.md >>README.md
cat docs-gen/readme/chapters/published/building-process-shared-props.md >>README_PUBLISHED.md
echo -n "\n\n<br>\n\n" >>README.md
echo -n "\n\n<br>\n\n" >>README_PUBLISHED.md
cat docs-gen/readme/chapters/building-process-css-global-vars.md >>README.md
cat docs-gen/readme/chapters/published/building-process-css-global-vars.md >>README_PUBLISHED.md
echo -n "\n\n<br>\n\n" >>README.md
echo -n "\n\n<br>\n\n" >>README_PUBLISHED.md
cat docs-gen/readme/chapters/building-process-reactive-components.md >>README.md
cat docs-gen/readme/chapters/building-process-reactive-components.md >>README_PUBLISHED.md
echo -n "\n\n<br>\n\n" >>README.md
echo -n "\n\n<br>\n\n" >>README_PUBLISHED.md
cat docs-gen/readme/chapters/getting-started.md >>README.md
cat docs-gen/readme/chapters/getting-started.md >>README_PUBLISHED.md
echo -n "\n\n<br>\n\n" >>README.md
echo -n "\n\n<br>\n\n" >>README_PUBLISHED.md
cat docs-gen/readme/chapters/footer.md >>README.md
cat docs-gen/readme/chapters/footer.md >>README_PUBLISHED.md

cp -a README_PUBLISHED.md docs/index.md
cp -a CHANGELOG.md docs/changelog.md

python3 -m mkdocs build -d playground/public/docs

rm -rf README_PUBLISHED.md
rm -rf docs/index.md
rm -rf docs/changelog.md

