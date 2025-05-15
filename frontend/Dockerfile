# Usa Node.js 18 versión alpine (ligera)
FROM node:18-alpine

# Carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copia solo los package.json para instalar dependencias (cache-friendly)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código fuente
COPY . .

# Expone el puerto donde Next corre por defecto
EXPOSE 3000

# Comando para desarrollo
CMD ["npm", "run", "dev"]
