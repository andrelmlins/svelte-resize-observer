import { render } from "@testing-library/svelte";

import SvelteResizeObserver from "./ResizeObserver.svelte";

jest.mock("resize-observer-polyfill", () => ({
  default: jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  })),
}));

test("shows proper heading when rendered", () => {
  const { container } = render(SvelteResizeObserver);

  expect(container.firstChild).not.toBe(null);
});
