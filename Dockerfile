FROM node:14

RUN mkdir -p /home/blog-app

COPY ./blog-app /home/blog-app 

CMD ["node","/home/blog-app/server.js"]
