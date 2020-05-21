# Conteneur temporaire de build
FROM cypress/included:3.2.0 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run test:unit
RUN npm run test:e2e -- --headless
RUN npm run build

# Conteneur final applicatif
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Construire l'image Docker:
# docker build -t kumojin/mybudget .

# Lancer l'application dans un container Docker:
# docker run -it -p 8080:80 --rm --name mybudget-lastest kumojin/mybudget
