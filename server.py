#!/usr/bin/env python3
"""
FreightIntelligence.ai Development Server

A simple HTTP server for local development of the FreightIntelligence.ai platform.
"""

import http.server
import socketserver
import os
import sys
from pathlib import Path

class FreightIntelligenceHandler(http.server.SimpleHTTPRequestHandler):
    """Custom handler for FreightIntelligence.ai development server."""
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=os.path.dirname(os.path.abspath(__file__)), **kwargs)
    
    def end_headers(self):
        # Add CORS headers for development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()
    
    def do_GET(self):
        # Serve index.html for root path
        if self.path == '/':
            self.path = '/index.html'
        return super().do_GET()

def main():
    """Main function to start the development server."""
    PORT = 8000
    
    # Check if port is available
    try:
        with socketserver.TCPServer(("", PORT), FreightIntelligenceHandler) as httpd:
            print(f"🚀 FreightIntelligence.ai Development Server")
            print(f"📍 Server running at: http://localhost:{PORT}")
            print(f"📁 Serving directory: {os.getcwd()}")
            print(f"🔗 Open your browser and navigate to: http://localhost:{PORT}")
            print(f"⏹️  Press Ctrl+C to stop the server")
            print("-" * 60)
            
            try:
                httpd.serve_forever()
            except KeyboardInterrupt:
                print("\n🛑 Server stopped by user")
                sys.exit(0)
                
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"❌ Error: Port {PORT} is already in use")
            print(f"💡 Try using a different port or stop the existing server")
            sys.exit(1)
        else:
            print(f"❌ Error starting server: {e}")
            sys.exit(1)

if __name__ == "__main__":
    main()


