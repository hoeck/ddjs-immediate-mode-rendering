<script setup>
import { ref, onMounted } from "vue";

const canvasRef = ref(null);

onMounted(() => {
  const canvas = canvasRef.value;
  const ctx = canvas.getContext("2d");

  ctx.strokeRect(1, 1, 100, 20);
  ctx.fillText("OK", 30, 15);

  canvas.onclick = ({ offsetX, offsetY }) => {
    if (offsetX > 1 && offsetX < 100 && offsetY > 1 && offsetY < 20) {
      console.log("click");
    }
  };
});
</script>

<template>
  <div flex="~" w="min" border="~ main rounded-md">
    <canvas ref="canvasRef" />
  </div>
</template>
