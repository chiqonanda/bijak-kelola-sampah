<template>
  <div class="min-h-screen bg-gray-50 pb-20">
    <!-- Header -->
    <div class="bg-gradient-to-r from-indigo-600 to-purple-500 px-4 pt-10 pb-6">
      <p class="text-indigo-200 text-xs font-medium mb-0.5">Bank Sampah Induk</p>
      <div class="flex items-center justify-between">
        <h1 class="text-white text-xl font-bold">Kelurahan Mawar</h1>
        <button class="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </button>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-2 gap-3 mt-4">
        <div class="bg-white/15 rounded-2xl px-4 py-3">
          <p class="text-indigo-200 text-xs">Total RT</p>
          <p class="text-white text-2xl font-bold mt-1">8</p>
        </div>
        <div class="bg-white/15 rounded-2xl px-4 py-3">
          <p class="text-indigo-200 text-xs">Minggu Ini</p>
          <p class="text-white text-2xl font-bold mt-1">285.5 kg</p>
        </div>
      </div>
    </div>

    <!-- Status Pills -->
    <div class="mx-4 -mt-4 bg-white rounded-2xl shadow-sm border border-gray-100 grid grid-cols-3 divide-x divide-gray-100">
      <div class="flex flex-col items-center py-4 gap-1">
        <div class="w-8 h-8 bg-amber-50 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p class="text-gray-800 text-lg font-bold leading-none">3</p>
        <p class="text-amber-500 text-xs">Menunggu</p>
      </div>
      <div class="flex flex-col items-center py-4 gap-1">
        <div class="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <p class="text-gray-800 text-lg font-bold leading-none">2</p>
        <p class="text-blue-500 text-xs">Dijadwalkan</p>
      </div>
      <div class="flex flex-col items-center py-4 gap-1">
        <div class="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p class="text-gray-800 text-lg font-bold leading-none">1</p>
        <p class="text-green-500 text-xs">Hari ini</p>
      </div>
    </div>

    <div class="px-4 mt-5 space-y-5">
      <!-- Permintaan Penjemputan -->
      <section>
        <div class="flex items-center justify-between mb-3">
          <h2 class="text-gray-800 font-semibold text-sm">Permintaan Penjemputan</h2>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <div class="space-y-2">
          <div
            v-for="req in permintaan"
            :key="req.id"
            @click="$router.push({ name: 'DetailPenjemputan', params: { id: req.id } })"
            class="bg-amber-50 border border-amber-100 rounded-2xl px-4 py-3 flex items-start justify-between cursor-pointer active:scale-95 transition-transform"
          >
            <div class="flex-1">
              <p class="text-gray-800 text-sm font-semibold">{{ req.nama }}</p>
              <p class="text-gray-400 text-xs mt-0.5">{{ req.tanggal }}</p>
              <div class="flex gap-1.5 mt-2 flex-wrap">
                <span
                  v-for="tag in req.tags"
                  :key="tag"
                  class="bg-white border border-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
            <div class="flex flex-col items-end gap-2 ml-3">
              <span class="bg-amber-100 text-amber-600 text-xs font-medium px-2 py-0.5 rounded-full">Menunggu</span>
              <p class="text-gray-700 text-sm font-bold">{{ req.berat }} kg</p>
            </div>
          </div>
        </div>

        <button 
          @click="$router.push({ name: 'daftarPenjemputan' })"
          class="w-full mt-2 text-indigo-600 text-xs font-medium py-2 text-center active:bg-indigo-50 rounded-lg transition-colors"
        >
          Kelola Semua Penjemputan →
        </button>
      </section>

      <!-- Jadwal Penjemputan -->
      <section>
        <div class="flex items-center justify-between mb-3">
          <h2 class="text-gray-800 font-semibold text-sm">Jadwal Penjemputan</h2>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <div class="space-y-2">
          <div
            v-for="jadwal in jadwalList"
            :key="jadwal.id"
            @click="$router.push({ name: 'DetailPenjemputan', params: { id: jadwal.id } })"
            class="bg-blue-50 border border-blue-100 rounded-2xl px-4 py-3 flex items-start justify-between cursor-pointer active:scale-95 transition-transform"
          >
            <div>
              <p class="text-gray-800 text-sm font-semibold">{{ jadwal.nama }}</p>
              <p class="text-gray-400 text-xs mt-0.5">{{ jadwal.waktu }}</p>
              <p class="text-gray-700 text-sm font-bold mt-2">{{ jadwal.berat }} kg</p>
            </div>
            <span class="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-0.5 rounded-full mt-1">Dijadwalkan</span>
          </div>
        </div>
      </section>

      <!-- Aktivitas Terbaru -->
      <section>
        <div class="flex items-center justify-between mb-3">
          <h2 class="text-gray-800 font-semibold text-sm">Aktivitas Terbaru</h2>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div
          v-for="act in aktivitas"
          :key="act.id"
          class="bg-green-50 border border-green-100 rounded-2xl px-4 py-3 flex items-center gap-3"
        >
          <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p class="text-gray-800 text-sm font-semibold">{{ act.nama }}</p>
            <p class="text-gray-500 text-xs">{{ act.deskripsi }}</p>
            <p class="text-gray-400 text-xs mt-0.5">{{ act.waktu }}</p>
          </div>
        </div>
      </section>

      <!-- Daftar Bank Sampah RT -->
      <section class="pb-4">
        <h2 class="text-gray-800 font-semibold text-sm mb-3">Daftar Bank Sampah RT</h2>
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-50">
          <div v-for="rt in daftarRT" :key="rt.id" class="flex items-center justify-between px-4 py-3">
            <div>
              <p class="text-gray-800 text-sm font-medium">{{ rt.nama }}</p>
              <p class="text-gray-400 text-xs">{{ rt.jumlahPenjemputan }} penjemputan</p>
            </div>
            <div class="text-right">
              <p class="text-gray-800 text-sm font-bold">{{ rt.totalBerat }} kg</p>
              <p class="text-gray-400 text-xs">Total</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Bottom Navigation -->
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex">
      <button class="flex-1 flex flex-col items-center py-3 gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span class="text-xs text-indigo-600 font-medium">Beranda</span>
      </button>
      <button class="flex-1 flex flex-col items-center py-3 gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span class="text-xs text-gray-400">Profil</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const permintaan = [
  { id: 1, nama: 'RT 02 Mawar',   tanggal: '17 Mar 2026', tags: ['Plastik', 'Kertas', 'Logam'], berat: 32.5 },
  { id: 2, nama: 'RT 05 Melati',  tanggal: '17 Mar 2026', tags: ['Plastik', 'Kaca'],            berat: 28   },
  { id: 3, nama: 'RT 07 Anggrek', tanggal: '18 Mar 2026', tags: ['Plastik', 'Kertas', 'Organik'], berat: 35.5 },
]

const jadwalList = [
  { id: 4, nama: 'RT 01 Tulip',  waktu: '18 Mar 2026 • 09:30 WIB', berat: 29.5 },
  { id: 5, nama: 'RT 03 Dahlia', waktu: '18 Mar 2026 • 11:00 WIB', berat: 26   },
]

const aktivitas = [
  { id: 1, nama: 'RT 04 Seroja', deskripsi: 'Penjemputan selesai • 34.5 kg', waktu: '2 jam lalu' },
]

const daftarRT = [
  { id: 1, nama: 'RT 01 Tulip',  jumlahPenjemputan: 12, totalBerat: 88.5  },
  { id: 2, nama: 'RT 02 Mawar',  jumlahPenjemputan: 18, totalBerat: 145.5 },
  { id: 3, nama: 'RT 03 Dahlia', jumlahPenjemputan: 14, totalBerat: 95    },
  { id: 4, nama: 'RT 04 Seroja', jumlahPenjemputan: 11, totalBerat: 78.5  },
  { id: 5, nama: 'RT 05 Melati', jumlahPenjemputan: 20, totalBerat: 156.5 },
]
</script>