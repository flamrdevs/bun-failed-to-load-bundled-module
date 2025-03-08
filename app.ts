import index from "~/client/index.html";

const server = Bun.serve({
  routes: {
    "/": index,
  },
  development: true,
});

console.log(`Listening on ${server.url}`);
