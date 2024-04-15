<script setup>
import { ref, onMounted, onUnmounted } from "vue";

let interval;
const canvasRef = ref(null);

onMounted(() => {
  const canvas = canvasRef.value;
  const ctx = canvas.getContext("2d");

  const state = { ok: true };

  interval = setInterval(
    () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeRect(1, 1, 100, 20);
      ctx.fillText(state.ok ? "OK" : "NOT OK", 30, 15);
    },
    (1 / 60) * 1000, // 60Hz
  );

  canvas.onclick = ({ offsetX, offsetY }) => {
    if (offsetX > 1 && offsetX < 100 && offsetY > 1 && offsetY < 20) {
      state.ok = !state.ok;
    }
  };
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <div flex="~" w="min" border="~ main rounded-md">
    <canvas ref="canvasRef" />
  </div>
</template>
