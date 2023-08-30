# Dreampack

Web-based dream journal application with a Ruby on Rails backend and React.js frontend.

## Purpose

Have you heard of [dream journaling](https://en.wikipedia.org/wiki/Dream_diary) or [lucid dreaming](https://en.wikipedia.org/wiki/Lucid_dream)? Dreampack is
a toolkit for lucid dreamers and casual dream explorers alike, including features to aid your dream journaling, dream recall, reality checks, and dream sign tracking.

I hope you find it useful or fun.

## Features

- Write, save and edit journal entries
- Highlight and save dream signs
- Interpret your dream with AI
- Audio-to-text to speak your entries to life
- Generate images for your dreams
- Responsive, sleek and colorful UI

## Technologies

- Ruby on Rails
- React.js
- Tailwind
- Postgresql
- OpenAI API: ChatGPT, Whisper, DALLE-2
- RSpec
- Cypress

## Local Setup

Currently, the only way to interact with Dreampack is locally. It will be deployed soon!

1. Check if you have Ruby 3.1.2 by entering `ruby -v` into the terminal. I recommend [rbenv](https://github.com/rbenv/rbenv) for managing versions
2. Enter `rails -v` in the terminal to ensure you have Rails 7.0.5 installed
3. `psql --version` to ensure you have PostgreSQL 14.9 installed (make sure you have a user and password)
4. If you need more information on setting up PostgreSQL with rails, see [this great resource](https://www.theodinproject.com/lessons/ruby-on-rails-installing-postgresql)
5. Fork the repository and copy SSH key
6. Enter `git clone <'SSH Key'> in the terminal and enter`
7. `bundle install` and `yarn install` to install dependencies
8. `bundle exec figaro install` to install [Figaro](https://github.com/laserlemon/figaro), which you'll need to handle your OpenAI API key
9. You'll need to sign up for an [OpenAI account](https://platform.openai.com/signup) if you want to use the AI Features
10. In your OpenAI account dashboard, click the profile icon in the top right, click `View API Keys` and then click `Create new secret key`, copy it for the next step
11. Open the `application.yml` file and enter `OPENAI_ACCESS_TOKEN: <'Your OpenAI API Key'>` without the <''>, just the key you copied earlier
12. `rails db:setup` to create the database and load the schema
13. `bin/rails db:migrate` to run migrations
14. `bin/dev` to run the local server
15. localhost:3000 in your web browser to access the application
