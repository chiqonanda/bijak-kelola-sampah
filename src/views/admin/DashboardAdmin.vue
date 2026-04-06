<template>
  <div class="min-h-screen bg-gray-50 pb-24">
    <!-- Header -->
    <div class="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 px-4 pt-10 pb-6">
      <p class="text-white/70 text-xs font-medium mb-0.5">Monitoring Kelurahan</p>
      <div class="flex items-center justify-between">
        <h1 class="text-white text-xl font-bold">Kelurahan Mawar</h1>
        <div class="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-2 gap-3 mt-4">
        <div class="bg-white/15 rounded-2xl px-4 py-3">
          <p class="text-white/70 text-xs">Total Sampah Terkumpul</p>
          <p class="text-white text-2xl font-bold mt-1">1248.5</p>
          <p class="text-white/60 text-xs">kg tahun ini</p>
        </div>
        <div class="bg-white/15 rounded-2xl px-4 py-3">
          <p class="text-white/70 text-xs">Bulan Ini</p>
          <p class="text-white text-2xl font-bold mt-1">285.5</p>
          <p class="text-white/60 text-xs">+12.4%</p>
        </div>
      </div>
    </div>

    <div class="px-4 mt-4 space-y-4">
      <!-- Status RT -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
        <div class="flex items-center justify-between mb-3">
          <h2 class="text-gray-800 font-semibold text-sm">Status RT</h2>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div class="bg-green-50 rounded-xl px-4 py-3 flex flex-col items-center">
            <p class="text-green-600 text-2xl font-bold">8</p>
            <p class="text-green-600 text-xs mt-0.5">RT Aktif</p>
          </div>
          <div class="bg-blue-50 rounded-xl px-4 py-3 flex flex-col items-center">
            <p class="text-blue-600 text-2xl font-bold">8</p>
            <p class="text-blue-600 text-xs mt-0.5">Total RT</p>
          </div>
        </div>
      </div>

      <!-- Trend Bulanan -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-gray-800 font-semibold text-sm">Trend Bulanan</h2>
          <button
            @click="$router.push({ name: 'StatistikSampah' })"
            class="text-purple-500 text-xs font-medium"
          >
            Detail →
          </button>
        </div>

        <!-- Bar Chart -->
        <div class="flex items-end gap-1.5 h-28">
          <div
            v-for="bulan in trendBulanan"
            :key="bulan.label"
            class="flex-1 flex flex-col items-center gap-1"
          >
            <p class="text-gray-400 text-[8px] leading-none">{{ bulan.kg }}</p>
            <div
              class="w-full rounded-t-md transition-all"
              :style="{ height: (bulan.pct * 0.75) + 'px', backgroundColor: bulan.color }"
            ></div>
            <p class="text-gray-400 text-[8px] leading-none">{{ bulan.label }}</p>
          </div>
        </div>
      </div>

      <!-- RT Paling Aktif -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
        <div class="flex items-center justify-between mb-3">
          <h2 class="text-gray-800 font-semibold text-sm">RT Paling Aktif</h2>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <div class="bg-yellow-50 rounded-xl px-3 py-3 space-y-3">
          <div v-for="(rt, i) in rtAktif" :key="rt.nama" class="flex items-center gap-3">
            <div
              class="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
              :class="[i === 0 ? 'bg-yellow-400' : i === 1 ? 'bg-gray-400' : 'bg-orange-400']"
            >
              {{ i + 1 }}
            </div>
            <div class="flex-1">
              <p class="text-gray-800 text-sm font-semibold">{{ rt.nama }}</p>
              <p class="text-gray-500 text-xs">{{ rt.berat }} kg</p>
            </div>
            <span class="text-green-500 text-xs font-medium">+{{ rt.pct }}%</span>
          </div>
        </div>

        <button
          @click="$router.push({ name: 'LeaderboardKelurahan' })"
          class="w-full mt-3 text-purple-500 text-xs font-medium py-1 text-center"
        >
          Lihat Semua Peringkat →
        </button>
      </div>

      <!-- Jenis Sampah Terbanyak -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
        <h2 class="text-gray-800 font-semibold text-sm mb-4">Jenis Sampah Terbanyak</h2>
        <div class="space-y-3">
          <div v-for="jenis in jenisSampah" :key="jenis.nama">
            <div class="flex items-center justify-between mb-1">
              <p class="text-gray-700 text-xs">{{ jenis.nama }}</p>
              <p class="text-gray-500 text-xs font-medium">{{ jenis.pct }}%</p>
            </div>
            <div class="w-full bg-gray-100 rounded-full h-2">
              <div
                class="h-2 rounded-full"
                :style="{ width: jenis.pct + '%', backgroundColor: jenis.color }"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Daftar RT Wilayah -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
        <div class="flex items-center justify-between mb-3">
          <h2 class="text-gray-800 font-semibold text-sm">Daftar RT Wilayah</h2>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <div class="divide-y divide-gray-50">
          <div v-for="rt in daftarRT" :key="rt.nama" class="flex items-center justify-between py-3">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p class="text-gray-800 text-sm font-medium">{{ rt.nama }}</p>
                <p class="text-gray-400 text-xs">Angg. {{ rt.anggota }}</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-gray-800 text-sm font-bold">{{ rt.berat }}</p>
              <p class="text-green-500 text-xs">{{ rt.status }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Navigation -->
    <div class="fixed bottom-0 left-0 right-0 grid grid-cols-2">
      <button
        @click="$router.push({ name: 'StatistikSampah' })"
        class="bg-blue-600 flex flex-col items-center py-3 gap-1"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <span class="text-xs text-white font-medium">Statistik & Trend</span>
      </button>
      <button
        @click="$router.push({ name: 'LeaderboardKelurahan' })"
        class="bg-orange-400 flex flex-col items-center py-3 gap-1"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <span class="text-xs text-white font-medium">LeaderBoard</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const trendBulanan = [
  { label: 'Jan', kg: '180', pct: 60,  color: '#818cf8' },
  { label: 'Feb', kg: '95',  pct: 32,  color: '#818cf8' },
  { label: 'Mar', kg: '210', pct: 70,  color: '#818cf8' },
  { label: 'Apr', kg: '160', pct: 53,  color: '#818cf8' },
  { label: 'Mei', kg: '240', pct: 80,  color: '#818cf8' },
  { label: 'Jun', kg: '185', pct: 62,  color: '#818cf8' },
  { label: 'Jul', kg: '220', pct: 73,  color: '#818cf8' },
  { label: 'Agu', kg: '195', pct: 65,  color: '#818cf8' },
  { label: 'Sep', kg: '285', pct: 95,  color: '#a855f7' },
  { label: 'Okt', kg: '260', pct: 87,  color: '#818cf8' },
  { label: 'Nov', kg: '300', pct: 100, color: '#6366f1' },
  { label: 'Des', kg: '—',   pct: 10,  color: '#e5e7eb' },
]

const rtAktif = [
  { nama: 'RT 05 Melati',  berat: 156.5, pct: 12 },
  { nama: 'RT 02 Mawar',   berat: 145.5, pct: 8  },
  { nama: 'RT 07 Anggrek', berat: 130,   pct: 7  },
]

const jenisSampah = [
  { nama: 'Plastik',  pct: 35, color: '#3b82f6' },
  { nama: 'Kertas',   pct: 25, color: '#f59e0b' },
  { nama: 'Logam',    pct: 20, color: '#6b7280' },
  { nama: 'Kaca',     pct: 12, color: '#6366f1' },
  { nama: 'Organik',  pct: 8,  color: '#22c55e' },
]

const daftarRT = [
  { nama: 'RT 01 Tulip',   anggota: 4, berat: '88.5 kg',  status: 'Aktif' },
  { nama: 'RT 02 Mawar',   anggota: 6, berat: '145.5 kg', status: 'Aktif' },
  { nama: 'RT 03 Dahlia',  anggota: 4, berat: '95 kg',    status: 'Aktif' },
  { nama: 'RT 04 Seroja',  anggota: 4, berat: '78.5 kg',  status: 'Aktif' },
  { nama: 'RT 05 Melati',  anggota: 5, berat: '156.5 kg', status: 'Aktif' },
  { nama: 'RT 06 Kenanga', anggota: 3, berat: '72 kg',    status: 'Aktif' },
  { nama: 'RT 07 Anggrek', anggota: 3, berat: '130 kg',   status: 'Aktif' },
  { nama: 'RT 08 Sakura',  anggota: 2, berat: '129.5 kg', status: 'Aktif' },
]
</script>