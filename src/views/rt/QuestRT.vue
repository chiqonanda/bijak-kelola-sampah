<template>
  <div class="min-h-screen bg-gray-100 pb-20">

    <!-- HEADER -->
    <div class="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 flex items-center gap-3">
      <button @click="$router.back()">←</button>
      <h1 class="font-bold">Quest Mingguan</h1>
    </div>

    <div class="p-4 space-y-4">

      <!-- HERO QUEST -->
      <div class="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-5 rounded-2xl text-center shadow">
        <div class="text-3xl mb-2">🎯</div>
        <h2 class="font-bold text-lg">Quest Minggu Ini</h2>
        <p class="text-sm mb-3">17 - 23 Maret 2026</p>

        <!-- PROGRESS -->
        <div class="bg-white/20 p-3 rounded-xl">
          <div class="flex justify-between text-sm mb-1">
            <span>Progress</span>
            <span>{{ doneQuest }}/{{ quests.length }} Quest</span>
          </div>

          <div class="w-full bg-white/30 h-2 rounded-full">
            <div 
              class="bg-black h-2 rounded-full"
              :style="{ width: progressPercent + '%' }"
            ></div>
          </div>
        </div>
      </div>

      <!-- XP & POIN -->
      <div class="grid grid-cols-2 gap-3">
        <div class="bg-white p-4 rounded-2xl shadow">
          <p class="text-sm text-gray-500">⭐ Total XP</p>
          <h2 class="font-bold text-lg">+{{ totalXP }}</h2>
        </div>

        <div class="bg-white p-4 rounded-2xl shadow">
          <p class="text-sm text-gray-500">🎁 Poin</p>
          <h2 class="font-bold text-lg">+{{ totalPoint }}</h2>
        </div>
      </div>

      <!-- LIST QUEST -->
      <div 
        v-for="(q, i) in quests" 
        :key="i"
        class="rounded-2xl shadow overflow-hidden"
        :class="q.done === q.total ? 'bg-green-500 text-white' : 'bg-white'"
      >

        <!-- HEADER -->
        <div class="p-4">
          <div class="flex justify-between items-center mb-2">
            <h2 class="font-semibold">{{ q.title }}</h2>
            <span v-if="q.done === q.total">✔</span>
          </div>

          <p class="text-sm opacity-80">{{ q.desc }}</p>
        </div>

        <!-- PROGRESS -->
        <div class="p-4 bg-white text-black rounded-b-2xl">

          <div class="flex justify-between text-sm mb-1">
            <span>Progress</span>
            <span>{{ q.done }}/{{ q.total }}</span>
          </div>

          <div class="w-full bg-gray-200 h-2 rounded-full mb-2">
            <div 
              class="bg-black h-2 rounded-full"
              :style="{ width: (q.done/q.total*100) + '%' }"
            ></div>
          </div>

          <!-- REWARD -->
          <div class="flex gap-2">
            <span class="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded-full">
              +{{ q.xp }} XP
            </span>
            <span class="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
              +{{ q.point }} Poin
            </span>

            <span 
              v-if="q.done === q.total"
              class="ml-auto bg-green-500 text-white text-xs px-2 py-1 rounded-full"
            >
              Selesai
            </span>
          </div>

        </div>

      </div>

    </div>

        <!-- NAVBAR -->
    <div class="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around py-2">

      <div @click="$router.push('/rt')" class="text-gray-400 text-center cursor-pointer">
        🏠<p class="text-xs">Beranda</p>
      </div>

      <div @click="$router.push('/rt/quest')" class="text-green-600 text-center">
        🎯<p class="text-xs">Quest</p>
      </div>

      <div @click="$router.push('/rt/taman')" class="text-gray-400 text-center cursor-pointer">
        🌱<p class="text-xs">Taman</p>
      </div>

      <div class="text-gray-400 text-center cursor-pointer">
        🏆<p class="text-xs">Peringkat</p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// 🔥 DATA QUEST (7 BIAR RAMAI)
const quests = [
  {
    title: 'Kumpulkan 10kg Plastik',
    desc: 'Catat minimal 10kg sampah plastik minggu ini',
    done: 7,
    total: 10,
    xp: 50,
    point: 100
  },
  {
    title: 'Catat Sampah 3 Kali',
    desc: 'Tambah data sampah minimal 3 kali minggu ini',
    done: 3,
    total: 3,
    xp: 30,
    point: 75
  },
  {
    title: 'Setor Sampah 2x',
    desc: 'Lakukan penjemputan minimal 2 kali',
    done: 1,
    total: 2,
    xp: 40,
    point: 90
  },
  {
    title: 'Pisahkan Sampah Organik',
    desc: 'Pisahkan sampah organik dengan benar',
    done: 4,
    total: 5,
    xp: 20,
    point: 50
  },
  {
    title: 'Gunakan Ulang Plastik',
    desc: 'Reuse plastik minimal 3 kali',
    done: 2,
    total: 3,
    xp: 25,
    point: 60
  },
  {
    title: 'Ikut Program Daur Ulang',
    desc: 'Ikuti minimal 1 program',
    done: 1,
    total: 1,
    xp: 60,
    point: 120
  },
  {
    title: 'Kurangi Sampah Harian',
    desc: 'Kurangi produksi sampah selama 7 hari',
    done: 5,
    total: 7,
    xp: 35,
    point: 80
  }
]

// 🔥 HITUNG TOTAL
const totalXP = computed(() => 
  quests.reduce((sum, q) => sum + q.xp, 0)
)

const totalPoint = computed(() => 
  quests.reduce((sum, q) => sum + q.point, 0)
)

// 🔥 PROGRESS GLOBAL
const doneQuest = computed(() => 
  quests.filter(q => q.done === q.total).length
)

const progressPercent = computed(() => 
  (doneQuest.value / quests.length) * 100
)
</script>