
build: components favorited.js favorited.css
	component build --standalone favorited name build

components: component.json
	component install --dev

clean:
	rm -fr build components

.PHONY: clean
