install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

gendiff:
	node bin/gendiff.js -h

gendiff-test:
	node bin/gendiff.js __tests__/file1.json __tests__/file2.json

.PHONY: test lint