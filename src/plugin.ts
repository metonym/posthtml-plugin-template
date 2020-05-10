import { PostHTML } from "posthtml";

function plugin() {
  return function posthtmlPlugin(tree: PostHTML.Node) {
    return tree;
  };
}

export default plugin;
export { plugin, plugin as posthtmlPlugin };
