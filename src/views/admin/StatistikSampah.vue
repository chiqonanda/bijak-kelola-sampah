<template>
  <div class="min-h-screen bg-gray-50 pb-8">
    <!-- Top Bar -->
    <div class="bg-gradient-to-r from-teal-500 to-blue-500 px-4 pt-10 pb-4 flex items-center gap-3">
      <button @click="$router.back()" class="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <h1 class="text-white font-semibold text-base">Statistik Sampah</h1>
    </div>

    <!-- Hero -->
    <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-8 flex flex-col items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
      <p class="text-white font-bold text-lg">Statistik Pengelolaan Sampah</p>
      <p class="text-white/70 text-xs">Kelurahan Mawar • Maret 2026</p>
    </div>

    <!-- Tab Filter -->
    <div class="grid grid-cols-3 bg-white border-b border-gray-100">
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="activeTab = tab"
        class="py-3 text-xs font-medium transition-colors"
        :class="activeTab === tab ? 'text-gray-800 border-b-2 border-gray-800' : 'text-gray-400'"
      >
        {{ tab }}
      </button>
    </div>

    <div class="px-4 mt-4 space-y-4">
      <!-- Volume Bulanan -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-gray-800 font-semibold text-sm">Volume Bulanan</h2>
          <button class="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
        </div>

        <!-- Bar Chart Bulanan -->
        <div class="flex items-end gap-1.5 h-32">
          <div v-for="b in volumeBulanan" :key="b.label" class="flex-1 flex flex-col items-center gap-1">
            <p class="text-gray-400 text-[8px] leading-none">{{ b.val }}</p>
            <div
              class="w-full rounded-t-md"
              :style="{ height: (b.pct * 0.85) + 'px', backgroundColor: b.color }"
            ></div>
            <p class="text-gray-400 text-[8px] leading-none">{{ b.label }}</p>
          </div>
        </div>
        <p class="text-center text-gray-300 text-xs mt-2">Grafik volume pengumpulan sampah</p>
      </div>

      <!-- Trend Mingguan (Maret) -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
        <h2 class="text-gray-800 font-semibold text-sm mb-4">Trend Mingguan (Maret)</h2>

        <!-- Bar Chart Mingguan -->
        <div class="flex items-end gap-3 h-24">
          <div v-for="w in trendMingguan" :key="w.label" class="flex-1 flex flex-col items-center gap-1">
            <p class="text-gray-400 text-[9px] leading-none">{{ w.val }}</p>
            <div
              class="w-full rounded-t-md"
              :style="{ height: (w.pct * 0.7) + 'px', backgroundColor: '#10b981' }"
            ></div>
            <p class="text-gray-400 text-[9px] leading-none">{{ w.label }}</p>
          </div>
        </div>

        <!-- Summary -->
        <div class="grid grid-cols-2 gap-3 mt-4">
          <div class="bg-green-50 rounded-xl px-4 py-3">
            <p class="text-gray-500 text-xs">Total Minggu Ini</p>
            <p class="text-gray-800 text-lg font-bold mt-1">71.25 kg</p>
          </div>
          <div class="bg-blue-50 rounded-xl px-4 py-3">
            <p class="text-gray-500 text-xs">Pertumbuhan</p>
            <div class="flex items-center gap-1 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <p class="text-green-500 text-lg font-bold">+15%</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Dampak Lingkungan -->
      <div class="bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl px-5 py-5">
        <p class="text-white font-semibold text-sm mb-4">Dampak Lingkungan</p>
        <div class="grid grid-cols-2 gap-3">
          <div class="bg-white/20 rounded-xl px-4 py-3">
            <p class="text-white/80 text-xs">CO₂ Diselamatkan</p>
            <p class="text-white text-2xl font-bold mt-1">624 kg</p>
          </div>
          <div class="bg-white/20 rounded-xl px-4 py-3">
            <p class="text-white/80 text-xs">Setara Pohon</p>
            <div class="flex items-center gap-1 mt-1">
              <p class="text-white text-2xl font-bold">125</p>
              <span class="text-2xl">🌳</span>
            </div>
          </div>
        </div>
        <p class="text-white/60 text-xs text-center mt-3">Setara dengan menanam pohon selama 1 tahun</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tabs = ['Bulanan', 'Area', 'Per RT']
const activeTab = ref('Bulanan')

const volumeBulanan = [
  { label: 'Jan', val: '168', pct: 56,  color: '#818cf8' },
  { label: 'Feb', val: '180', pct: 60,  color: '#818cf8' },
  { label: 'Mar', val: '230', pct: 77,  color: '#a855f7' },
  { label: 'Apr', val: '180', pct: 60,  color: '#818cf8' },
  { label: 'Mei', val: '225', pct: 75,  color: '#818cf8' },
  { label: 'Jun', val: '180', pct: 60,  color: '#818cf8' },
  { label: 'Jul', val: '245', pct: 82,  color: '#818cf8' },
  { label: 'Agu', val: '285', pct: 95,  color: '#6366f1' },
  { label: 'Sep', val: '—',   pct: 8,   color: '#e5e7eb' },
  { label: 'Okt', val: '—',   pct: 8,   color: '#e5e7eb' },
  { label: 'Nov', val: '—',   pct: 8,   color: '#e5e7eb' },
  { label: 'Des', val: '—',   pct: 8,   color: '#e5e7eb' },
]

const trendMingguan = [
  { label: 'M1', val: '56',  pct: 75  },
  { label: 'M2', val: '72',  pct: 96  },
  { label: 'M3', val: '56',  pct: 75  },
  { label: 'M4', val: '70',  pct: 93  },
]
</script>