FROM cucumber/cucumber-build:latest

COPY Gemfile ./
COPY Gemfile.lock ./
RUN gem install bundler && bundle install
COPY features/ ./features/
COPY fixtures/ ./fixtures/
