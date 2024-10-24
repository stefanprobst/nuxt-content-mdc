import { parseMarkdown } from "@nuxtjs/mdc/runtime";

export default eventHandler(async (event) => {
  const { content: mdc } = await readBody(event);

  const ast = await parseMarkdown(mdc);

  return ast;
});
