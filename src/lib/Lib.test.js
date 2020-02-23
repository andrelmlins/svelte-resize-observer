import { render } from "@testing-library/svelte";

import SvelteResizeObserver from "./index.svelte";

test("shows proper heading when rendered", () => {
  const { container } = render(SvelteResizeObserver);

  expect(container.firstChild).not.toBe(null);
});
