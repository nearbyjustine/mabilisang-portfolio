# BUILD STAGE
FROM node:20-alpine
WORKDIR /app
COPY package.json /app/package.json
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install
EXPOSE 5173
CMD ["npm", "run", "dev"]
