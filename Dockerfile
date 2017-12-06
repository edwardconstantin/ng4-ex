FROM nginx:alpine
# apk --update add curl

COPY nginx/default.conf /etc/nginx/conf.d/
COPY dist /usr/share/nginx/html