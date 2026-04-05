<template>
  <div class="min-h-screen bg-gray-100">

    <!-- HEADER + BACK -->
    <div class="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 flex items-center gap-3">
      <button @click="$router.back()">←</button>
      <h1 class="text-lg font-bold">Tambah Data Sampah</h1>
    </div>

    <div class="p-4">

      <!-- STEP -->
      <div class="flex justify-center gap-3 mb-4">
        <span class="bg-green-500 text-white px-3 py-1 rounded-full">1</span>
        <span class="bg-gray-300 px-3 py-1 rounded-full">2</span>
        <span class="bg-gray-300 px-3 py-1 rounded-full">3</span>
      </div>

      <!-- TITLE -->
      <div class="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 rounded-2xl mb-4">
        Pilih Jenis Sampah
      </div>

      <!-- GRID -->
      <div class="grid grid-cols-2 gap-3">

        <div @click="next" class="card">🍶 Botol Plastik</div>
        <div @click="next" class="card">♻️ Plastik Lainnya</div>
        <div @click="next" class="card">📄 Kertas</div>
        <div @click="next" class="card">🔩 Logam</div>
        <div @click="next" class="card">🧊 Kaca</div>
        <div @click="next" class="card">🍂 Organik</div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const next = () => {
  router.push('/rt') // sementara balik dulu
}
</script>

<style>
.card {
  background: white;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  transition: 0.2s;
}
.card:hover {
  transform: scale(1.05);
}
</style>