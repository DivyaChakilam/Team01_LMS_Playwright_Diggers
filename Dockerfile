FROM mcr.microsoft.com/playwright:v1.51.1-noble

WORKDIR /app

# Copy package.json and package-lock.json first for efficient caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your project files
COPY . .

# Set the default command to run the bddgen script
CMD ["npm", "run", "bddgen"]