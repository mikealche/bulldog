import { RequestHandler, Express } from "express";
import fsRoutes, { FsRoute } from "./fs-routes";

const routes: FsRoute[] = fsRoutes("routes");

const wrapResolver = (resolver: Function) => {
  const requestHandler: RequestHandler = async (req, res) => {
    try {
      const response = await resolver({ ...req.params, ...req.body });
      res.json(response);
    } catch (err) {
      console.log(err);
      //@ts-ignore
      res.sendStatus(500).send(err.message);
    }
  };
  return requestHandler;
};

const registerRoutesFromFileSystem = (app: Express) => {
  for (const route of routes) {
    console.log(route);
    const resolver = require(route.path).default;
    console.log(typeof resolver);
    if (resolver.middleware) {
      app.get(
        `${route.route.toLowerCase()}`,
        resolver.middleware,
        wrapResolver(resolver)
      );
    } else {
      app.get(`${route.route.toLowerCase()}`, wrapResolver(resolver));
    }
  }
};

export default registerRoutesFromFileSystem;
