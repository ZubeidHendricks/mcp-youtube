import { createServer } from '@modelcontextprotocol/server-filesystem';

const server = createServer({
  paths: ['/Users/anibetts/Desktop']
});

server.start().then(() => {
  console.log('MCP Server started successfully');
}).catch(error => {
  