FROM nginx
EXPOSE 443
EXPOSE 80

COPY nginx.conf /etc/nginx/nginx.conf
COPY cert/fullchain.pem /etc/nginx/ssl/fullchain.pem
COPY cert/privkey.pem /etc/nginx/ssl/privkey.pem
