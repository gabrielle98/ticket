run: public/index.html public/main.js
	#node app.js
public/index.html: web/html/index.html web/html/*.html
	./node_modules/htmlpp/htmlpp.js -ext .html -o public/index.html web/html/index.html
public/main.js: web/js/main.js
	./node_modules/requirejs/bin/r.js -o build.js optimize=none
