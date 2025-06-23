#!/bin/bash

echo "🚀 Setting up DivHacks 2025..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first:"
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# Install client dependencies
echo "📦 Installing client dependencies..."
cd client
npm install

echo "✅ All dependencies installed successfully!"

echo ""
echo "🎉 Setup complete! To start the development server:"
echo "   cd client"
echo "   npm start"
echo ""
echo "Then open your browser to: http://localhost:3000" 