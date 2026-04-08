<template>
  <div class="min-h-screen bg-gray-100 pb-20">

    <!-- HEADER -->
    <div class="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 flex items-center gap-3">
      <button @click="$router.back()">←</button>
      <h1 class="font-bold">Penjemputan Sampah</h1>
    </div>

    <div class="p-4 space-y-4">

      <!-- TOTAL -->
      <div class="bg-gradient-to-r from-green-400 to-blue-500 text-white p-5 rounded-2xl shadow text-center">
        <p class="text-sm opacity-80">Total Sampah Siap Jemput</p>
        <h1 class="text-4xl font-bold">{{ total }} kg</h1>
        <p class="text-sm mt-1">Terkumpul dari {{ items.length }} jenis sampah</p>
      </div>

      <!-- RINCIAN -->
      <div class="bg-white p-4 rounded-2xl shadow">
        <h2 class="font-semibold mb-3">Rincian Sampah</h2>

        <div 
          v-for="(item, i) in items" 
          :key="i"
          class="flex justify-between items-center bg-gray-50 p-3 rounded-xl mb-2"
        >
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200">
              {{ item.icon }}
            </div>
            <p>{{ item.name }}</p>
          </div>

          <p class="font-semibold">{{ item.kg }} kg</p>
        </div>
      </div>

      <!-- BUTTON -->
      <button
        @click="submitPickup"
        :class="isSubmitted 
          ? 'bg-gray-400' 
          : 'bg-gradient-to-r from-green-400 to-blue-500'"
        class="w-full text-white py-3 rounded-full font-semibold shadow transition"
      >
        {{ isSubmitted ? 'Permintaan Terkirim ✓' : '🚚 Ajukan Penjemputan' }}
      </button>

      <p class="text-center text-sm text-gray-500">
        Penjemputan akan dijadwalkan oleh Bank Sampah Induk
      </p>

      <!-- RIWAYAT -->
                <div class="bg-white p-4 rounded-2xl shadow">
            <h2 class="font-semibold mb-3">Riwayat Penjemputan</h2>

            <div
                v-for="(item, i) in history"
                :key="i"
                class="flex justify-between items-center bg-gray-50 p-3 rounded-xl mb-3"
            >
                <!-- KIRI -->
                <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    ✔
                </div>

                <div>
                    <p class="font-semibold text-sm">{{ item.date }}</p>
                    <p class="text-xs text-gray-500">{{ item.kg }} kg</p>
                </div>
                </div>

                <!-- STATUS -->
                <div class="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
                Selesai
                </div>
            </div>
            </div>

            <!-- INFO BOX -->
            <div class="bg-blue-50 border border-blue-300 text-blue-600 p-3 rounded-xl text-sm">
            💡 Info: Pastikan sampah sudah dipilah sesuai jenis sebelum dijemput!
            </div>

    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const history = [
  { date: '10 Mar 2026', kg: 28.5 },
  { date: '3 Mar 2026', kg: 31 },
  { date: '24 Feb 2026', kg: 26.5 },
]

// 🔥 DATA DUMMY (nanti bisa dari localStorage)
const items = ref([
  { name: 'Plastik', kg: 12.5, icon: '♻️' },
  { name: 'Kertas', kg: 8, icon: '📄' },
  { name: 'Logam', kg: 6.5, icon: '🔩' },
  { name: 'Kaca', kg: 5.5, icon: '🍾' },
])

// 🔥 TOTAL OTOMATIS
const total = computed(() => {
  return items.value.reduce((sum, item) => sum + item.kg, 0)
})

// 🔥 STATE BUTTON
const isSubmitted = ref(false)

const submitPickup = () => {
  isSubmitted.value = true
}
</script>