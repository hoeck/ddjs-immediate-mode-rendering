<script setup>
import { ref, onMounted, onUnmounted } from "vue";

let interval;
const state = { ok: [true, true, true] };
const canvasRef2 = ref(null);

function button(env, { x, y, width, height, label, onclick }) {
  env.ctx.strokeRect(x, y, width, height);
  env.ctx.fillText(label, x + 30, y + 15);

  env.onclick.push(({ offsetX, offsetY }) => {
    console.log("offsetY", offsetY, "y", y, "y+h", y + height);

    if (
      offsetX > x &&
      offsetX < x + width &&
      offsetY > y &&
      offsetY < y + height
    ) {
      onclick();
    }
  });
}

function stackLayout(env, { children, height }) {
  let y = 1;

  for (let i = 0; i < children.length; i++) {
    const c = children[i];

    c(env, { y });

    y += height;
  }
}

function root(env) {
  stackLayout(env, {
    height: 30,
    children: [0, 1, 2].map(
      (i) =>
        (env, { y }) =>
          button(env, {
            x: 1,
            y,
            width: 100,
            height: 20,
            label: state.ok[i] ? `OK ${i}` : `NOT OK ${i}`,
            onclick: () => {
              state.ok[i] = !state.ok[i];
            },
          }),
    ),
  });
}

function render1(canvas, root) {
  const onclick = [];
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  root({ ctx, onclick });

  canvas.onclick = (ev) => onclick.forEach((c) => c(ev));
}

onMounted(() => {
  const canvas = canvasRef2.value;

  interval = setInterval(
    () => {
      render1(canvas, root);
    },
    (1 / 60) * 1000, // 60Hz
  );
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <div flex="~" w="min" border="~ main rounded-md">
    <canvas style="height: 200px" ref="canvasRef2" />
  </div>
</template>
