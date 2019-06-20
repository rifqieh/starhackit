import "./app.css";
import Debug from "debug";
import Router from "./router";

const debug = new Debug("app");

export default function({ context, parts, createRoutes, layout }) {
  debug("App begins");

  context.parts = parts;

  async function preAuth() {
    const token = localStorage.getItem("JWT");
    if (token) {
      parts.auth.stores().auth.setToken(token);
    }
    await parts.auth.stores().me.fetch();
  }

  const routes = createRoutes({context, parts});
  const router = Router({ context, routes, layout });

  return {
    context,
    router,
    render() {
      router.start();
    },
    async start() {
      debug("start");
      return Promise.all([preAuth()]);
    }
  };
}
