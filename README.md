# academic_homepage2
A simple homepage for academic use, based on Angular and Bootstrap.

**This replaces http://github.com/pettni/academic_homepage which was built using the deprecated AngularJS.**

The main changes are:
 - Using [Angular](https://angular.io/) instead of [AngularJS](https://angularjs.org/)
 - Less dependence on remote js/css, they are instead installed via npm and compiled. The only remaining remote css is [Academicons](https://jpswalsh.github.io/academicons)
 - Better structured publication code
 - Linking to individual publications
 - Small widget for posting recent news
 - Publications can be included in other parts of the site (although this is still hacky)
 - With Angular the deployed page is optimized

## Features
* Lightweight.
* Creates a searchable list of publications from a `.bib` file.
* Includes node scripts for streamlined development with livereload etc.

## Publication list
If the `.bib` file has entries named "Abstract" (text), "Url" (url) or "Slides" (url), the information will be appended to the publication list. Currently, there is support for @article, @inproceedings, @mastersthesis, @phdthesis, @book, and @inbook.

## Development
For easy development/personalization, clone the repo and run 
```
npm install
```
to install all dependencies. Then run 

```
$ ./node_modules/@angular/cli/bin/ng serve
```

for a dev server. 
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Deployment
Execute
```
ng build
```
where DEPLOY_URL is the address where the page will be deployed (e.g. ```http://its.caltech.edu```), and BASE_HREF is the location on that server (e.g. ```/~lnilsson/```)

## Live demo
http://www.its.caltech.edu/~lnilsson
