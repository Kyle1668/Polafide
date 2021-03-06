
MAKEFLAGS += --silent

deploy:
	cd polafide-client
	pwd
	git push heroku master
	cd ..
	cd search-service
	git push heroku master
	cd ..
	git push
	echo 'Deployment Finished'

add:
	git add .
	git commit -m "Progress"

push:
	make add
	git push

open:
	heroku open -a polafide-client
	heroku open -a polafide-search-api
