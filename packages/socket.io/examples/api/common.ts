import { Get, Router } from "@discordx/koa";
import fs from "fs";
import type { Context } from "koa";

const readFile = function (src: string) {
  return new Promise(function (resolve, reject) {
    fs.readFile(src, { encoding: "utf8" }, function (err, data) {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
};

@Router()
export class Example {
  @Get("/")
  async web(context: Context): Promise<void> {
    context.body = await readFile(`${__dirname}/index.html`);
  }
}
