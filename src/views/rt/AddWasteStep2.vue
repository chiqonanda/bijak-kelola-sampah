<template>
  <div class="min-h-screen bg-gray-100">

    <!-- HEADER -->
    <div class="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 flex items-center gap-3">
      <button @click="$router.back()">←</button>
      <h1 class="font-bold">Tambah Data Sampah</h1>
    </div>

    <div class="p-4">

      <!-- STEP -->
      <div class="flex justify-center items-center gap-2 mb-4">
        <div class="step active">1</div>
        <div class="line active"></div>
        <div class="step active">2</div>
        <div class="line"></div>
        <div class="step">3</div>
      </div>

      <p class="text-center text-sm text-gray-500 mb-4">
        Pilih Kriteria ({{ type }})
      </p>

      <!-- INFO -->
      <div class="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-2xl mb-4 shadow">
        <h2 class="font-semibold">🎖 Pilih Kriteria</h2>
        <p class="text-sm opacity-90">
          Harga berbeda tergantung jenis sampah yang kamu pilih.
        </p>
      </div>

      <!-- CARD LIST -->
      <div
        v-for="item in priceOptions"
        :key="item.name"
        @click="select(item.price)"
        class="card"
      >
        <div class="flex items-center gap-3">

          <div :class="['circle', item.color]"></div>

          <div class="flex-1">
            <div class="flex items-center gap-2">
              <h3 class="font-bold">{{ item.name }}</h3>
              <span :class="['badge', item.badgeColor]">
                {{ item.label }}
              </span>
            </div>

            <p class="price text-green-600">
              Rp {{ item.price.toLocaleString() }}/kg
            </p>

            <span class="tag">{{ item.tag }}</span>
          </div>

          <div>›</div>

        </div>
      </div>

      <!-- BACK -->
      <p @click="$router.back()" class="text-center text-sm text-gray-500 mt-4 cursor-pointer">
        ← Kembali ke Pilih Jenis
      </p>

    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

// 🔥 AMBIL JENIS
const type = localStorage.getItem('type') || 'plastik'

// 🔥 PRICE MAP (INI KUNCI CERDASNYA)
const priceMap = {
  plastik: [
    { name: 'Biru', price: 4000, label: 'Harga Tinggi', color: 'bg-blue-400', badgeColor: 'blue', tag: '📈 Lebih Menguntungkan' },
    { name: 'Hijau', price: 3000, label: 'Harga Sedang', color: 'bg-green-400', badgeColor: 'green', tag: '📈 Menguntungkan' },
    { name: 'Bening', price: 2000, label: 'Harga Standar', color: 'bg-gray-300', badgeColor: 'gray', tag: '📉 Standar' },
  ],

  kertas: [
    { name: 'Kertas A', price: 2000, label: 'Standar', color: 'bg-yellow-300', badgeColor: 'gray', tag: '📉 Standar' },
    { name: 'Kertas B', price: 1500, label: 'Rendah', color: 'bg-yellow-200', badgeColor: 'gray', tag: '📉 Rendah' },
  ],

  logam: [
    { name: 'Besi', price: 6000, label: 'Tinggi', color: 'bg-gray-500', badgeColor: 'blue', tag: '📈 Mahal' },
    { name: 'Aluminium', price: 8000, label: 'Premium', color: 'bg-gray-400', badgeColor: 'green', tag: '🔥 Paling Mahal' },
  ],

  kaca: [
    { name: 'Kaca Bening', price: 3000, label: 'Standar', color: 'bg-blue-200', badgeColor: 'gray', tag: '📉 Standar' },
  ],

  organik: [
    { name: 'Organik', price: 1000, label: 'Murah', color: 'bg-green-200', badgeColor: 'gray', tag: '🌱 Ramah Lingkungan' },
  ],

  plastik_lain: [
    { name: 'Campuran', price: 2500, label: 'Sedang', color: 'bg-purple-300', badgeColor: 'green', tag: '♻️ Daur Ulang' },
  ]
}

// 🔥 AMBIL SESUAI TYPE
const priceOptions = priceMap[type] || priceMap['plastik']

// 🔥 SELECT
const select = (price) => {
  localStorage.setItem('price', price)
  router.push('/rt/add-step3')
}
</script>

<style scoped>
.card {
  background: white;
  padding: 16px;
  border-radius: 16px;
  cursor: pointer;
  margin-bottom: 12px;
  transition: 0.2s;
}
.card:hover {
  transform: scale(1.02);
}

.circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.price {
  font-size: 18px;
  font-weight: bold;
}

.badge {
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 6px;
  color: white;
}
.badge.blue { background: #3b82f6; }
.badge.green { background: #16a34a; }
.badge.gray { background: #9ca3af; }

.tag {
  font-size: 10px;
  background: #fde68a;
  padding: 2px 6px;
  border-radius: 6px;
}

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