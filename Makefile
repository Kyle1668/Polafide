deploy:
	cd polafide-client
	git push heroku master
	cd ..
	cd search-service
	git push heroku master
	cd ..
	git push
	echo 'Deployment Finished'
