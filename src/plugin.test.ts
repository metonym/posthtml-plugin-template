import posthtml from "posthtml";
import test from "tape";
import { plugin } from "./plugin";

test("plugin returns the correct result", async (t) => {
  const result = await posthtml().use(plugin()).process(`<body></body>`);

  t.equal(result.html, "<body></body>");
  t.end();
});
