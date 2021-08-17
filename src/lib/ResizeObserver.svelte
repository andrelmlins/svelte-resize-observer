<script lang="ts">
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import ResizeObserver from "resize-observer-polyfill";

  export let elementResize: HTMLElement | undefined = undefined;

  const dispatch = createEventDispatcher<{ resize: Element }>();
  let component: HTMLElement;
  let RO: ResizeObserver;

  onMount(() => {
    RO = new ResizeObserver((e) => {
      dispatch("resize", e[0].target);
    });
  });

  $: {
    if (component || elementResize) {
      const element = elementResize ? elementResize : component.parentNode;
      RO.observe(element as Element);
    }
  }

  onDestroy(() => {
    RO.disconnect();
  });
</script>

<div bind:this={component} style="width:0px" />
