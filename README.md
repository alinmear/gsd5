# GSD5

NOTE: This project is forked from https://github.com/roma0104/gsd5. roma0104 discontinued the development since 2016 and i will try to take over the development. 

My Development workflow is making use of the n1ce _[ThirdFlow](https://github.com/TheDiveO/ThirdFlow)_ plugin. For an easy introduction, you may want to [watch the demo video](https://youtu.be/BFE6PFZ_uWQ).

How to contribute:

1. Install nodejs and npm on your system
2. Clone this repository: `git clone https://github.com/alinmear/gsd5.git`
3. run `npm install` to install the required TiddlyWiki5 core, as well as the _ThirdFlow_ plugin from the NPM registry.
4. run `npm run develop`.
5. navigate to http://localhost:9999 in your web browser
6. have fun ;-) and make a pull request

Develop:

* work on your plugin ... you can freely mix developing things inside the web browser as well as outside the browser using a standalone editor.
* Don't forget to stop and then restart `$ npm run develop` after you've made changes to TiddlyWiki files outside your web browser.

Release:

* simply run `$ npm run release` to create the release file(s) in `editions/release/output`

## Further Development

* Remove overwrite tiddlers
* quick capture functionality (like org-mode)
* add priorities
* Integrate B.A.S.B (building a second brain) concept and terminology
* Checkout synergy with stroll
* kanban boards
* update repository for better integration within the tiddlywiki update mechanism
* CI/CD Pipeline
* takeover issues from https://github.com/roma0104/gsd5
* Integrate tickler plugin
* Convert "normal" tiddlers to action-type tiddlers
* Show integration of gsd5 into my tiddlywiki/workflow

## Description

A Getting-Things-Done tool for the TiddlyWiki5 environment.

GSD5, or Getting-Stuff-Done 5, is a plugin for [TiddlyWiki5](http://tiddlywiki.com) *[(github)](https://github.com/Jermolene/TiddlyWiki5/)* that attempts to combine the workflow and philosophy of David Allen's **[Getting Things Done](http://www.amazon.com/Getting-Things-Done-Stress-Free-Productivity/dp/0142000280/)** with the TiddlyWiki5 platform.  GSD5 is heavily influenced by [mGSD](http://mgsd.tiddlyspot.com/) for TiddlyWiki classic.

#### Disclaimer
GTD® and Getting Things Done® are registered trademarks of the [David Allen Company](http://www.davidco.com). GSD5 is not affiliated with or endorsed by the David Allen Company.