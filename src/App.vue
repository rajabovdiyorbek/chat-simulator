<template>
  <div>
    <p>Counter: {{ store.counter }}</p>
    <button @click="store.increment">Increment</button>
  </div>
</template>

<script setup>
import { useMainStore } from "./stores/store";

const store = useMainStore();
</script>
