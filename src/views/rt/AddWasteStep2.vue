<template>
  <div class="min-h-screen bg-gray-100">

    <!-- HEADER -->
    <div class="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 flex gap-3 items-center">
      <button @click="$router.back()">←</button>
      <h1 class="font-bold">Pilih Warna Botol</h1>
    </div>

    <div class="p-4 space-y-3">

      <div @click="select(4000)" class="card">
        🔵 Biru - Rp 4.000/kg
      </div>

      <div @click="select(3000)" class="card">
        🟢 Hijau - Rp 3.000/kg
      </div>

      <div @click="select(2000)" class="card">
        ⚪ Bening - Rp 2.000/kg
      </div>

    </div>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const select = (price) => {
  localStorage.setItem('price', price)
  router.push('/rt/add-step3')
}
</script>

<style>
.card {
  background: white;
  padding: 20px;
  border-radius: 15px;
  cursor: pointer;
}
</style>