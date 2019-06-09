SHELL := /bin/bash

DEFAULT_GOAL: npm-run-dev

.PHONY: \
	npm-run-dev

npm-run-dev:
	find . | grep ".*\/blogs\/.*.md" | python3 -c "import sys, json; config = {\"blogs\": sys.stdin.read().split('\n')[:-1]}; fh = open('static/blogs/blogs.json', 'w'); json.dump(config, fh)"
	npm run dev
