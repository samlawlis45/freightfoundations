#!/bin/bash

# FreightIntelligence.ai Platform Startup Script

echo "🚀 Starting FreightIntelligence.ai Platform..."
echo "=============================================="

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is required but not installed."
    echo "💡 Please install Python 3 and try again."
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ index.html not found. Please run this script from the project root directory."
    exit 1
fi

# Make server.py executable
chmod +x server.py

# Start the development server
echo "🌐 Starting development server on port 8000..."
echo "📍 Platform will be available at: http://localhost:8000"
echo "⏹️  Press Ctrl+C to stop the server"
echo ""

python3 server.py


