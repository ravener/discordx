import { dirname, importx } from "@discordx/importer";
import { Koa } from "@discordx/koa";
import type { RouterContext } from "@koa/router";
import type { Next } from "koa";

// example of global middleware
function Log(ctx: RouterContext, next: Next) {
  console.log(`Global logger - request: ${ctx.URL}`);
  return next();
}

const server = new Koa({
  globalMiddlewares: [Log],
});

async function start() {
  await importx(`${dirname(import.meta.url)}/routes/**/*.{js,ts}`);
  // await importx(__dirname + "/routes/**/*.{js,ts}");
  await server.build();

  const port = process.env.PORT ?? 3000;
  server.listen(port, () => {
    console.log(`server started on port ${port}`);
  });
}

start();
