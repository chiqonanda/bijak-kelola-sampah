<template>
  <div class="min-h-screen bg-gray-50 pb-10">
    <div class="bg-gradient-to-r from-teal-500 to-blue-500 px-4 pt-10 pb-4 flex items-center gap-3">
      <button @click="$router.back()" class="text-white active:scale-90 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <h1 class="text-white font-semibold text-base">Statistik Sampah</h1>
    </div>

    <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-8 flex flex-col items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
      <p class="text-white font-bold text-lg">Statistik {{ activeTab }}</p>
      <p class="text-white/70 text-xs">Kelurahan Mawar • Maret 2026</p>
    </div>

    <div class="grid grid-cols-3 bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm">
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="activeTab = tab"
        class="py-3 text-[11px] font-bold transition-all uppercase tracking-wider"
        :class="activeTab === tab ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-400'"
      >
        {{ tab }}
      </button>
    </div>

    <div class="px-4 mt-4 space-y-4">
      
      <div v-if="activeTab === 'Bulanan'" class="space-y-4">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
          <h2 class="text-gray-800 font-semibold text-sm mb-4">Volume Bulanan (kg)</h2>
          
          <div class="flex items-end gap-1.5 h-32">
            <div v-for="b in volumeBulanan" :key="b.label" class="flex-1 flex flex-col items-center gap-1">
              <p class="text-gray-400 text-[8px] leading-none">{{ b.val }}</p>
              <div
                class="w-full rounded-t-md transition-all duration-500"
                :style="{ height: (b.pct * 0.85) + 'px', backgroundColor: b.color }"
              ></div>
              <p class="text-gray-400 text-[8px] leading-none">{{ b.label }}</p>
            </div>
          </div>
          <p class="text-center text-gray-300 text-[10px] mt-4 font-medium tracking-wide uppercase">Grafik volume pengumpulan sampah</p>
        </div>

        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
          <h2 class="text-gray-800 font-semibold text-sm mb-4">Trend Mingguan (Maret)</h2>
          <div class="flex items-end gap-3 h-24">
            <div v-for="w in trendMingguan" :key="w.label" class="flex-1 flex flex-col items-center gap-1">
              <p class="text-gray-400 text-[9px] leading-none">{{ w.val }}</p>
              <div
                class="w-full rounded-t-md transition-all duration-500"
                :style="{ height: (w.pct * 0.7) + 'px', backgroundColor: '#10b981' }"
              ></div>
              <p class="text-gray-400 text-[9px] leading-none">{{ w.label }}</p>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="activeTab === 'Area'" class="space-y-4">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-5">
          <h2 class="text-gray-800 font-semibold text-sm mb-5">Komposisi Jenis Sampah</h2>
          <div class="space-y-5">
            <div v-for="a in volumeArea" :key="a.jenis" class="space-y-2">
              <div class="flex justify-between text-xs">
                <span class="font-medium text-gray-700">{{ a.jenis }}</span>
                <span class="font-bold text-gray-900">{{ a.val }} kg ({{ a.pct }}%)</span>
              </div>
              <div class="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div class="h-full rounded-full transition-all duration-700" :style="{ width: a.pct + '%', backgroundColor: a.color }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="activeTab === 'Per RT'" class="space-y-4">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
          <h2 class="text-gray-800 font-semibold text-sm mb-4">Kontribusi Volume per RT</h2>
          <div class="space-y-3">
            <div v-for="rt in volumeRT" :key="rt.label" class="flex items-center gap-3">
              <span class="text-[10px] font-bold text-gray-400 w-8">RT {{ rt.label }}</span>
              <div class="flex-1 bg-gray-50 h-6 rounded-md overflow-hidden relative">
                <div class="h-full bg-indigo-500/20 absolute left-0 top-0" :style="{ width: rt.pct + '%' }"></div>
                <div class="absolute inset-y-0 left-2 flex items-center">
                  <span class="text-[10px] font-bold text-indigo-700">{{ rt.val }} kg</span>
                </div>
              </div>
              <span class="text-[10px] text-gray-400">{{ rt.pct }}%</span>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl px-5 py-5 text-white">
        <p class="font-semibold text-sm mb-4">Dampak Lingkungan</p>
        <div class="grid grid-cols-2 gap-3">
          <div class="bg-white/20 rounded-xl px-4 py-3 border border-white/10">
            <p class="text-white/80 text-[10px] uppercase">CO₂ Reduksi</p>
            <p class="text-2xl font-bold mt-1">624<span class="text-xs ml-1">kg</span></p>
          </div>
          <div class="bg-white/20 rounded-xl px-4 py-3 border border-white/10">
            <p class="text-white/80 text-[10px] uppercase">Tabungan Pohon</p>
            <div class="flex items-center gap-1 mt-1">
              <p class="text-2xl font-bold">125</p>
              <span class="text-xl">🌳</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tabs = ['Bulanan', 'Area', 'Per RT']
const activeTab = ref('Bulanan')

const volumeBulanan = [
  { label: 'Jan', val: '168', pct: 56, color: '#818cf8' },
  { label: 'Feb', val: '180', pct: 60, color: '#818cf8' },
  { label: 'Mar', val: '230', pct: 77, color: '#a855f7' },
  { label: 'Apr', val: '180', pct: 60, color: '#818cf8' },
  { label: 'Mei', val: '225', pct: 75, color: '#818cf8' },
  { label: 'Jun', val: '180', pct: 60, color: '#818cf8' },
  { label: 'Jul', val: '245', pct: 82, color: '#818cf8' },
  { label: 'Agu', val: '285', pct: 95, color: '#6366f1' },
]

const trendMingguan = [
  { label: 'M1', val: '56', pct: 75 },
  { label: 'M2', val: '72', pct: 96 },
  { label: 'M3', val: '56', pct: 75 },
  { label: 'M4', val: '70', pct: 93 },
]

const volumeArea = [
  { jenis: 'Plastik', val: '85.5', pct: 37, color: '#3b82f6' },
  { jenis: 'Kertas', val: '62.0', pct: 27, color: '#fbbf24' },
  { jenis: 'Logam', val: '45.0', pct: 20, color: '#94a3b8' },
  { jenis: 'Kaca', val: '22.5', pct: 10, color: '#10b981' },
]

const volumeRT = [
  { label: '01', val: '45.2', pct: 60 },
  { label: '02', val: '58.5', pct: 85 },
  { label: '03', val: '32.1', pct: 45 },
  { label: '04', val: '40.0', pct: 55 },
  { label: '05', val: '54.2', pct: 80 },
]
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>