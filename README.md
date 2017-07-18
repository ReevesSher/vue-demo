# Vue Demo

> A Vue.js project with vuex vue-router vue-material and axios es7 async
including most of the basic uses of vue and other relevant <br/>
whats it for ? fetch the repositories data by the GitHub token of users and imitate the sigh in process

## About
> It`s forked and I made changes for practical use , generating Github token and fetch the repositories data<br/>
* use localStorage to store token and the data we fetched, keeping alive at the same time
* axios is simple and efficient enough to communicate with server
easily handle the request response by using interceptors.It would be more efficient if we use some async tools like ES7 async await
* within vuex and vue-router and other relative vue tools,we can handle most of tough situations that we can image
##Unfinished
* test the redirect <br/>
* add transition
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
