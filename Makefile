.PHONY: test

ci: install test

install: installtest installexpress

installtest:
	cd test && npm install

installexpress:
	cd node/express && npm install

test:
	cd test && npm test
