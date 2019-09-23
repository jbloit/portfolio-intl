# My portfolio website

Static website built with Gatsby.js, with the [Gatsby i18n starter](https://github.com/angeloocana/gatsby-plugin-i18n) (for multi language).


## Install

1. Install Gatsby.js
from the [doc](https://www.gatsbyjs.org/docs/quick-start/#install-the-gatsby-cli):
```bash
npm install -g gatsby-cli
```
2. Install packages used by this site
```bash
cd <this repo>
npm install
```

## Develop / edit
1. Run a local server on ```localhost:8000```
```bash
cd <this repo>
gatsby develop
```
2. Add new posts
Add new .md pages to the src/pages directory.
Name them with *.en.md and *.fr.md for multilanguage support.
See the changes instantly in the browser.

## Deploy
1. Build the static website to the ```public``` directory.
```bash
cd <this repo>
gatsby build
```

2. Upload 
Install [Surge.sh](https://surge.sh/)
```bash
cd <this repo>
surge public/ 
```
set domain to ```www.jbloit.com```
