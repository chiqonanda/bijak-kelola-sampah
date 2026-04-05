<template>
  <div class="min-h-screen bg-gray-100 p-4">

    <h1 class="text-lg font-bold mb-4">Isi Detail Sampah</h1>

    <input
      v-model="kg"
      type="number"
      placeholder="Masukkan berat (kg)"
      class="w-full p-3 rounded-xl border mb-4"
    />

    <div class="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 rounded-2xl">
      <p>Total Estimasi:</p>
      <h2 class="text-2xl font-bold">Rp {{ total }}</h2>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const kg = ref(0)
const price = localStorage.getItem('price') || 0

const total = computed(() => kg.value * price)
</script>