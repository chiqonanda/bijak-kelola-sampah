<template>
  <div class="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex flex-col items-center px-4 pt-20 pb-10">

    <!-- LOGO -->
    <div class="text-center mb-8">
      <img src="/logo.jpg" class="w-20 mx-auto mb-3 rounded-2xl shadow" />
      <h1 class="text-2xl font-bold text-gray-800">BiSa</h1>
      <p class="text-gray-500">Bijak Kelola Sampah</p>
    </div>

    <!-- SAPAAN -->
    <div class="mb-8 text-center">
      <h2 class="text-lg font-semibold text-gray-700">
        Selamat datang, Admin 👋
      </h2>
      <p class="text-sm text-gray-500">
        Pilih menu untuk mulai monitoring
      </p>
    </div>

    <!-- MENU -->
    <div class="w-full max-w-md space-y-4">

      <!-- RT -->
      <div @click="selected = 'rt'" :class="cardClass('rt')">
        <div class="flex items-center gap-3">
          <div class="bg-green-500 text-white p-3 rounded-xl">🌿</div>
          <div>
            <h3 class="font-semibold">Pengelola Bank Sampah RT</h3>
            <p class="text-sm text-gray-500">Kelola sampah di tingkat RT</p>
          </div>
        </div>
      </div>

      <!-- PETUGAS -->
      <div @click="selected = 'petugas'" :class="cardClass('petugas')">
        <div class="flex items-center gap-3">
          <div class="bg-blue-500 text-white p-3 rounded-xl">📄</div>
          <div>
            <h3 class="font-semibold">Pengepul</h3>
            <p class="text-sm text-gray-500">Koordinasi penjemputan sampah</p>
          </div>
        </div>
      </div>

      <!-- MONITORING -->
      <div @click="selected = 'monitoring'" :class="cardClass('monitoring')">
        <div class="flex items-center gap-3">
          <div class="bg-yellow-500 text-white p-3 rounded-xl">📍</div>
          <div>
            <h3 class="font-semibold">Kelurahan (Monitoring)</h3>
            <p class="text-sm text-gray-500">Pantau aktivitas pengelolaan</p>
          </div>
        </div>
      </div>

    </div>

    <!-- BUTTON -->
    <button
      @click="goToPage"
      :disabled="!selected"
      class="mt-10 w-full max-w-md py-3 rounded-full font-semibold shadow-lg transition-all duration-200"
      :class="selected
        ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white hover:scale-105 active:scale-95'
        : 'bg-gradient-to-r from-green-200 to-blue-200 text-white opacity-70 cursor-not-allowed'"
    >
      Masuk ke Aplikasi
    </button>

    <!-- FOOTER -->
    <p class="text-sm text-gray-500 mt-6">
      Kelola sampah dengan cara yang menyenangkan! 🌱
    </p>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const selected = ref(null)
const router = useRouter()

// STYLE CARD
const cardClass = (type) => {
  return [
    'p-4 rounded-2xl flex items-center cursor-pointer transition-all duration-200 border',
    
    // warna dasar (tidak abu-abu)
    'bg-white/80 backdrop-blur-sm shadow-md',

    // hover
    'hover:scale-[1.02] hover:shadow-lg',

    // klik
    'active:scale-95',

    // selected
    selected.value === type
      ? 'ring-2 ring-green-400 shadow-xl'
      : ''
  ]
}

// NAVIGASI
const goToPage = () => {
  if (selected.value === 'rt') router.push('/rt')
  if (selected.value === 'petugas') router.push('/petugas')
  if (selected.value === 'monitoring') router.push('/admin/statistik')
}
</script>