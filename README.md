# README

# setup
## on first times
- $ docker-compose run web rails new . --force --database=mysql --webpack=vue --skip-coffee --skip-test
- $ docker-compose build

## run webpack-dev-servers
- $ docker-compose up -d
- $ docker-compose exec web bash  
root@c5ecea:/hoge_project# bin/webpack-dev-server

# default messages
This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
