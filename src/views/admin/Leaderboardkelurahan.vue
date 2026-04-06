<template>
  <div class="min-h-screen bg-gray-50 pb-8">
    <!-- Top Bar -->
    <div class="bg-gradient-to-r from-teal-500 to-blue-500 px-4 pt-10 pb-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <button @click="$router.back()" class="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 class="text-white font-semibold text-base">Leaderboard Kelurahan</h1>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>

    <!-- Hero -->
    <div class="bg-gradient-to-r from-yellow-400 to-orange-400 px-5 py-8 flex flex-col items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
      <p class="text-white font-bold text-lg">Peringkat RT Kelurahan</p>
      <p class="text-white/80 text-xs">Per bulan Maret 2026</p>
    </div>

    <!-- Achievement Cards -->
    <div class="bg-white px-4 py-4 grid grid-cols-2 gap-3 border-b border-gray-100">
      <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
        <span class="text-2xl">🏆</span>
        <div>
          <p class="text-gray-500 text-xs">Terbanyak</p>
          <p class="text-gray-800 text-sm font-bold">RT 05 Melati</p>
          <p class="text-purple-500 text-xs font-medium">156.5 kg</p>
        </div>
      </div>
      <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
        <span class="text-2xl">🎯</span>
        <div>
          <p class="text-gray-500 text-xs">Quest Master</p>
          <p class="text-gray-800 text-sm font-bold">RT 05 Melati</p>
          <p class="text-purple-500 text-xs font-medium">18 Quest</p>
        </div>
      </div>
      <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
        <span class="text-xl">⭐</span>
        <div>
          <p class="text-gray-500 text-xs">Konsisten</p>
          <p class="text-gray-800 text-sm font-bold">RT 02 Mawar</p>
          <p class="text-green-500 text-xs font-medium">+8%</p>
        </div>
      </div>
      <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
        <span class="text-xl">📈</span>
        <div>
          <p class="text-gray-500 text-xs">Pertumbuhan</p>
          <p class="text-gray-800 text-sm font-bold">RT 08 Sakura</p>
          <p class="text-green-500 text-xs font-medium">+20%</p>
        </div>
      </div>
    </div>

    <!-- Top 3 Podium -->
    <div class="bg-white px-4 py-4 border-b border-gray-100">
      <p class="text-center text-gray-600 text-xs mb-4">🏅 Top 3 RT Terbaik 🏅</p>
      <div class="flex items-end justify-center gap-2">
        <!-- #2 -->
        <div class="flex-1 flex flex-col items-center">
          <span class="text-2xl mb-1">🥈</span>
          <div class="w-full bg-gray-200 rounded-t-xl py-4 flex flex-col items-center gap-1">
            <p class="text-gray-700 text-xs font-bold">RT 02 Mawar</p>
            <p class="text-gray-500 text-xs">145.5 kg</p>
            <p class="text-gray-600 font-bold text-sm">#2</p>
          </div>
        </div>
        <!-- #1 -->
        <div class="flex-1 flex flex-col items-center">
          <span class="text-3xl mb-1">👑</span>
          <div class="w-full bg-yellow-400 rounded-t-xl py-6 flex flex-col items-center gap-1">
            <p class="text-white text-xs font-bold">RT 05 Melati</p>
            <p class="text-white/80 text-xs">156.5 kg</p>
            <p class="text-white font-bold text-base">#1</p>
          </div>
        </div>
        <!-- #3 -->
        <div class="flex-1 flex flex-col items-center">
          <span class="text-2xl mb-1">🥉</span>
          <div class="w-full bg-orange-300 rounded-t-xl py-3 flex flex-col items-center gap-1">
            <p class="text-white text-xs font-bold">RT 07 Anggrek</p>
            <p class="text-white/80 text-xs">130 kg</p>
            <p class="text-white font-bold text-sm">#3</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Full Leaderboard Table -->
    <div class="bg-white mt-2">
      <!-- Header -->
      <div class="grid grid-cols-3 px-4 py-2 border-b border-gray-100">
        <p class="text-gray-500 text-xs font-medium">Kelurahan</p>
        <p class="text-gray-500 text-xs font-medium text-center">Event</p>
        <p class="text-gray-500 text-xs font-medium text-right">Quest</p>
      </div>

      <!-- Rows -->
      <div
        v-for="(rt, i) in leaderboard"
        :key="rt.nama"
        class="px-4 py-3 border-b border-gray-50"
        :class="i === 0 ? 'bg-yellow-50' : ''"
      >
        <div class="grid grid-cols-3 items-start">
          <!-- Nama & Info -->
          <div>
            <div class="flex items-center gap-1.5">
              <span class="text-sm">{{ rt.medal }}</span>
              <p class="text-gray-800 text-sm font-semibold">{{ rt.nama }}</p>
            </div>
            <p class="text-gray-400 text-xs mt-0.5">{{ rt.berat }} kg</p>
            <div class="flex gap-1.5 mt-1.5 flex-wrap">
              <span
                v-for="badge in rt.badges"
                :key="badge.label"
                class="text-xs px-2 py-0.5 rounded-full font-medium"
                :class="badge.class"
              >{{ badge.label }}</span>
            </div>
          </div>
          <!-- Event -->
          <div class="text-center">
            <p class="text-gray-500 text-xs">Quest Selesai</p>
            <p class="text-gray-800 text-sm font-bold">{{ rt.questSelesai }} quest</p>
          </div>
          <!-- Quest poin -->
          <div class="text-right">
            <p class="text-gray-800 text-sm font-bold">{{ rt.poin }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Rules -->
    <div class="px-4 py-4 text-gray-400 text-xs space-y-0.5">
      <p class="font-medium text-gray-500">Rules:</p>
      <p>Penjemputan = 10 poin</p>
      <p>50 lebih = 50/100 poin</p>
      <p>Quest selesai tepat waktu = bonus 25 poin</p>
      <p>Peringkat poin terbanyak = bonus poin quest</p>
    </div>
  </div>
</template>

<script setup>
const leaderboard = [
  {
    nama: 'RT 05 Melati', berat: 156.5, medal: '🥇',
    questSelesai: 18, poin: '380',
    badges: [
      { label: 'Aktif', class: 'bg-green-100 text-green-600' },
      { label: 'Star Champion', class: 'bg-purple-100 text-purple-600' },
    ],
  },
  {
    nama: 'RT 02 Mawar', berat: 145.5, medal: '🥈',
    questSelesai: 16, poin: '340',
    badges: [
      { label: 'Aktif', class: 'bg-green-100 text-green-600' },
      { label: 'Konsisten', class: 'bg-blue-100 text-blue-600' },
    ],
  },
  {
    nama: 'RT 07 Anggrek', berat: 130, medal: '🥉',
    questSelesai: 15, poin: '305',
    badges: [
      { label: 'Aktif', class: 'bg-green-100 text-green-600' },
    ],
  },
  {
    nama: 'RT 01 Tulip', berat: 88.5, medal: '4️⃣',
    questSelesai: 14, poin: '240',
    badges: [],
  },
  {
    nama: 'RT 04 Seroja', berat: 78.5, medal: '5️⃣',
    questSelesai: 13, poin: '215',
    badges: [],
  },
  {
    nama: 'RT 03 Dahlia', berat: 95, medal: '6️⃣',
    questSelesai: 12, poin: '210',
    badges: [],
  },
  {
    nama: 'RT 06 Kenanga', berat: 72, medal: '7️⃣',
    questSelesai: 11, poin: '190',
    badges: [],
  },
  {
    nama: 'RT 08 Sakura', berat: 129.5, medal: '8️⃣',
    questSelesai: 10, poin: '185',
    badges: [],
  },
]
</script>