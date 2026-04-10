<template>
  <div class="min-h-screen bg-gray-100">

    <!-- HEADER -->
    <div class="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 flex items-center gap-3">
      <button @click="$router.back()">←</button>
      <h1 class="font-bold">Tambah Data Sampah</h1>
    </div>

    <div class="p-4 space-y-4">

      <!-- STEP -->
      <div class="flex justify-center items-center gap-2">
        <div class="step active">1</div>
        <div class="line active"></div>
        <div class="step active">2</div>
        <div class="line active"></div>
        <div class="step active">3</div>
      </div>

      <p class="text-center text-sm text-gray-500">
        Isi Detail Sampah
      </p>

      <!-- INFO JENIS -->
      <div class="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 rounded-2xl shadow">
        <h2 class="font-semibold mb-2">✨ Isi Detail Sampah</h2>

        <div class="bg-white/20 p-3 rounded-xl text-sm">
          Jenis yang dipilih:
          <p class="font-bold">
            {{ formattedType }}
          </p>
        </div>
      </div>

      <!-- ESTIMASI -->
      <div class="bg-yellow-50 border border-yellow-300 p-4 rounded-2xl">
        <h2 class="font-semibold mb-2">🏅 Estimasi Harga</h2>

        <div class="bg-white p-3 rounded-xl mb-3">
          <p class="text-sm text-gray-500">Harga per kg:</p>
          <p class="text-green-600 font-bold text-lg">
            Rp {{ price.toLocaleString() }}
          </p>
        </div>

        <div class="bg-white p-3 rounded-xl">
          <p class="text-sm text-gray-500">Berat (kg):</p>
          <input
            v-model="kg"
            type="number"
            placeholder="0.0"
            class="w-full mt-1 p-2 border rounded-lg"
          />
        </div>

        <!-- TOTAL -->
        <div class="mt-3 bg-gradient-to-r from-green-400 to-blue-500 text-white p-3 rounded-xl">
          <p class="text-sm">Total Estimasi:</p>
          <h2 class="text-xl font-bold">
            Rp {{ total.toLocaleString() }}
          </h2>
        </div>

      </div>

      <!-- TANGGAL -->
      <div class="bg-white p-4 rounded-2xl shadow">
        <p class="text-sm text-gray-500 mb-1">Tanggal</p>
        <input type="date" class="w-full p-2 border rounded-lg" />
      </div>

      <!-- CATATAN -->
      <div class="bg-white p-4 rounded-2xl shadow">
        <p class="text-sm text-gray-500 mb-1">Catatan (Opsional)</p>
        <textarea
          rows="3"
          placeholder="Tambahkan catatan jika diperlukan..."
          class="w-full p-2 border rounded-lg"
        ></textarea>
      </div>

      <!-- BUTTON -->
      <button 
        @click="saveData"
        class="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 rounded-full font-semibold shadow"
      >
        💾 Simpan Data Sampah
      </button>

    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'

const router = useRouter()

const saveData = () => {
  alert('Data berhasil disimpan!')
  router.push('/rt')
}

// 🔥 DATA
const kg = ref(0)
const price = Number(localStorage.getItem('price')) || 0
const type = localStorage.getItem('type') || '-'

// 🔥 FORMAT
const typeMap = {
  plastik: 'Botol Plastik',
  plastik_lain: 'Plastik Lainnya',
  kertas: 'Kertas',
  logam: 'Logam',
  kaca: 'Kaca',
  organik: 'Organik'
}

const formattedType = typeMap[type] || type

// 🔥 TOTAL
const total = computed(() => kg.value * price)
</script>

<style scoped>
.step {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #d1d5db;
  display: flex;
  align-items: center;
  justify-content: center;
}
.step.active {
  background: #22c55e;
  color: white;
}

.line {
  width: 30px;
  height: 3px;
  background: #d1d5db;
}
.line.active {
  background: #22c55e;
}
</style>