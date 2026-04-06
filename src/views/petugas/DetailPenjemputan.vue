<template>
  <div class="min-h-screen bg-gray-50 pb-8">
    <!-- Top Bar -->
    <div class="bg-gradient-to-r from-teal-500 to-blue-500 px-4 pt-10 pb-4 flex items-center gap-3">
      <button @click="$router.back()" class="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <h1 class="text-white font-semibold text-base">Detail Penjemputan</h1>
    </div>

    <!-- Hero Card -->
    <div class="bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-5">
      <div class="flex items-start justify-between">
        <h2 class="text-white font-bold text-lg">{{ penjemputan.namaRT }}</h2>
        <span :class="statusClass" class="text-xs font-semibold px-3 py-1 rounded-full">
          {{ penjemputan.status }}
        </span>
      </div>
      <div class="mt-4 flex flex-col items-center">
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          <p class="text-white text-3xl font-bold">{{ penjemputan.totalSampah }} kg</p>
        </div>
        <p class="text-white/70 text-xs mt-1">Total Sampah</p>
      </div>
    </div>

    <div class="px-4 mt-4 space-y-4">
      <!-- Informasi RT -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
        <h3 class="text-gray-800 font-semibold text-sm mb-4">Informasi RT</h3>
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <p class="text-gray-400 text-xs">Alamat</p>
              <p class="text-gray-800 text-sm font-medium mt-0.5">{{ penjemputan.alamat }}</p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div>
              <p class="text-gray-400 text-xs">Kontak</p>
              <p class="text-gray-800 text-sm font-medium mt-0.5">{{ penjemputan.kontak }}</p>
              <a :href="'tel:' + penjemputan.noHp" class="text-blue-500 text-sm">{{ penjemputan.noHp }}</a>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div>
              <p class="text-gray-400 text-xs">Tanggal Permintaan</p>
              <p class="text-gray-800 text-sm font-medium mt-0.5">{{ penjemputan.tanggal }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Rincian Sampah -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
        <h3 class="text-gray-800 font-semibold text-sm mb-3">Rincian Sampah</h3>
        <div class="divide-y divide-gray-50">
          <div v-for="item in penjemputan.rincian" :key="item.nama" class="flex items-center justify-between py-3">
            <div class="flex items-center gap-3">
              <span class="text-xl">{{ item.icon }}</span>
              <p class="text-gray-700 text-sm">{{ item.nama }}</p>
            </div>
            <p class="text-gray-800 text-sm font-semibold">{{ item.berat }} kg</p>
          </div>
        </div>
      </div>

      <!-- Catatan -->
      <div class="bg-blue-50 border border-blue-100 rounded-2xl px-5 py-4">
        <p class="text-gray-500 text-xs mb-1">Catatan:</p>
        <p class="text-gray-700 text-sm">{{ penjemputan.catatan }}</p>
      </div>

      <!-- Update Status -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
        <h3 class="text-gray-800 font-semibold text-sm mb-3">Update Status Penjemputan</h3>
        <label class="text-gray-500 text-xs mb-1 block">Status</label>
        <select
          v-model="statusSelected"
          class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
        >
          <option value="Menunggu">Menunggu</option>
          <option value="Dijadwalkan">Dijadwalkan</option>
          <option value="Selesai">Selesai</option>
          <option value="Dibatalkan">Dibatalkan</option>
        </select>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="px-4 mt-5 space-y-3 pb-6">
      <button
        @click="perbaruiStatus"
        class="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-md active:opacity-80 transition-opacity"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Perbarui Status
      </button>

      <button
        @click="hubungiRT"
        class="w-full bg-green-500 text-white font-semibold py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-md active:opacity-80 transition-opacity"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Hubungi RT
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  id: { type: [String, Number], default: null },
})

const router = useRouter()
const statusSelected = ref('Menunggu')

// Data dummy per ID — nanti ganti dengan fetch API berdasarkan props.id
const allData = {
  1: {
    namaRT: 'RT 02 Mawar', status: 'Menunggu', totalSampah: 32.5,
    alamat: 'Jl. Mawar No. 12, RT 02/RW 05', kontak: 'Bapak Andi', noHp: '0812-3456-7890',
    tanggal: '17 Maret 2026',
    catatan: 'Sampah sudah dipilah dengan baik. Mohon konfirmasi 1 hari sebelum penjemputan.',
    rincian: [
      { nama: 'Plastik', icon: '♻️', berat: 12.5 },
      { nama: 'Kertas',  icon: '📄', berat: 8    },
      { nama: 'Logam',   icon: '🔩', berat: 6.5  },
      { nama: 'Kaca',    icon: '🍶', berat: 5.5  },
    ],
  },
  2: {
    namaRT: 'RT 05 Melati', status: 'Menunggu', totalSampah: 28,
    alamat: 'Jl. Melati No. 5, RT 05/RW 02', kontak: 'Ibu Sari', noHp: '0813-9876-5432',
    tanggal: '17 Maret 2026',
    catatan: 'Tolong datang pagi sebelum jam 10.',
    rincian: [
      { nama: 'Plastik', icon: '♻️', berat: 18 },
      { nama: 'Kaca',    icon: '🍶', berat: 10 },
    ],
  },
  3: {
    namaRT: 'RT 07 Anggrek', status: 'Menunggu', totalSampah: 35.5,
    alamat: 'Jl. Anggrek No. 3, RT 07/RW 03', kontak: 'Bapak Rudi', noHp: '0811-2233-4455',
    tanggal: '18 Maret 2026',
    catatan: 'Sampah organik sudah dikompos sebagian.',
    rincian: [
      { nama: 'Plastik', icon: '♻️', berat: 15  },
      { nama: 'Kertas',  icon: '📄', berat: 12  },
      { nama: 'Organik', icon: '🌿', berat: 8.5 },
    ],
  },
  4: {
    namaRT: 'RT 01 Tulip', status: 'Dijadwalkan', totalSampah: 29.5,
    alamat: 'Jl. Tulip No. 1, RT 01/RW 01', kontak: 'Bapak Hendra', noHp: '0856-1122-3344',
    tanggal: '18 Maret 2026',
    catatan: 'Jadwal penjemputan pukul 09:30 WIB.',
    rincian: [
      { nama: 'Plastik', icon: '♻️', berat: 20  },
      { nama: 'Logam',   icon: '🔩', berat: 9.5 },
    ],
  },
  5: {
    namaRT: 'RT 03 Dahlia', status: 'Dijadwalkan', totalSampah: 26,
    alamat: 'Jl. Dahlia No. 8, RT 03/RW 04', kontak: 'Ibu Dewi', noHp: '0877-5566-7788',
    tanggal: '18 Maret 2026',
    catatan: 'Jadwal penjemputan pukul 11:00 WIB.',
    rincian: [
      { nama: 'Kertas',  icon: '📄', berat: 16 },
      { nama: 'Plastik', icon: '♻️', berat: 10 },
    ],
  },
}

const penjemputan = ref(allData[props.id] ?? allData[1])

const statusClass = computed(() => {
  const map = {
    Menunggu:    'bg-yellow-400 text-yellow-900',
    Dijadwalkan: 'bg-blue-100 text-blue-700',
    Selesai:     'bg-green-100 text-green-700',
    Dibatalkan:  'bg-red-100 text-red-700',
  }
  return map[penjemputan.value.status] ?? 'bg-gray-100 text-gray-700'
})

function perbaruiStatus() {
  penjemputan.value.status = statusSelected.value
  router.push({ name: 'ManajemenPenjemputan' })
}

function hubungiRT() {
  window.location.href = `tel:${penjemputan.value.noHp}`
}
</script>