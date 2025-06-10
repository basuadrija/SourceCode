# Use official Node.js LTS Alpine image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy application source
COPY . .

# Expose the port (default: 3000 or 3001 depending on env)
EXPOSE 3000
EXPOSE 3001

# Start the app
CMD ["npm", "start"]

#End Of Docker File
