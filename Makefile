run: public/index.html public/js/main.js
	node app.js
public/index.html: web/html/index.html web/html/*.html
	./node_modules/htmlpp/htmlpp.js -ext .html -o public/index.html web/html/index.html
public/js/main.js: web/js/main.js web/js/vm/*.js
	./node_modules/requirejs/bin/r.js -o install/build.js optimize=none
