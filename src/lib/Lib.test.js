import { render } from "@testing-library/svelte";

import SvelteResizeObserver from "./ResizeObserver.svelte";

test("shows proper heading when rendered", () => {
  const { container } = render(SvelteResizeObserver);

  expect(container.firstChild).not.toBe(null);
});
