FROM ubuntu/apache2
WORKDIR /var/www/html
COPY ./index.html /var/www/html/
COPY ./dev.js /var/www/html/
EXPOSE 80