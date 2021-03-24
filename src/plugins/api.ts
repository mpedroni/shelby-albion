import axios from 'axios';

const server = axios.create({
  baseURL: 'http://localhost:3000',
});

server.interceptors.request.use((config) => {
  if (!config.url?.includes('albion')) return config;

  return {
    ...config,
    url: `https://albiononline2d.ams3.cdn.digitaloceanspaces.com/thumbnails/orig/${config.params.id}`,
  };
});

export default server;
