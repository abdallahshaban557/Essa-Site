# Essa-Site

###Heroku

1. Make sure Heroku CLI is downloaded on device
2. run heroku update
3. heroku login
4. heroku create (If the heroku app has not been created already)
5. git push heroku master (master is the branch name)
6. Setup needed environment variables
7. Make sure Procfile has been created - and that it contains a name for the app so that you can run it continously on heroku
8. Then heroku ps:scale web=1 (worker/web here will depend on the name you choose on the Procfile)



Elite skills site for Essa
