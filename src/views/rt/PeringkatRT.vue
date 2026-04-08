<template>
  <div class="min-h-screen bg-gray-100 pb-24">

    <!-- HEADER -->
    <div class="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-b-3xl">
      <div class="flex items-center gap-2">
        <span>⬅</span>
        <h1 class="text-lg font-bold">Peringkat RT</h1>
      </div>
    </div>

    <div class="p-4 space-y-4">

      <!-- HERO -->
      <div class="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-3xl shadow text-center">
        <div class="text-5xl mb-2">🏆</div>
        <h2 class="font-bold text-lg">Papan Peringkat</h2>
        <p class="text-sm opacity-90">Kompetisi Pengelolaan Sampah</p>
      </div>

      <!-- TOP 3 -->
      <div class="bg-white p-4 rounded-2xl shadow text-center">

        <h3 class="font-semibold mb-4">🏆 Top 3 RT Terbaik</h3>

        <div class="flex justify-center items-end gap-3">

          <!-- #2 -->
          <div class="flex flex-col items-center">
            <div class="bg-gray-300 w-20 h-24 rounded-xl flex flex-col justify-center">
              <p class="font-bold">RT 02</p>
              <p class="text-xs">1180 pts</p>
            </div>
            <p class="mt-2 text-sm font-semibold">#2</p>
          </div>

          <!-- #1 -->
          <div class="flex flex-col items-center">
            <div class="text-2xl">👑</div>
            <div class="bg-yellow-400 w-24 h-28 rounded-xl flex flex-col justify-center text-white shadow-lg">
              <p class="font-bold">RT 05</p>
              <p class="text-xs">1250 pts</p>
            </div>
            <p class="mt-2 font-bold">#1</p>
          </div>

          <!-- #3 -->
          <div class="flex flex-col items-center">
            <div class="bg-orange-300 w-20 h-24 rounded-xl flex flex-col justify-center">
              <p class="font-bold">RT 07</p>
              <p class="text-xs">1120 pts</p>
            </div>
            <p class="mt-2 text-sm font-semibold">#3</p>
          </div>

        </div>
      </div>

      <!-- LIST -->
      <div class="bg-white p-4 rounded-2xl shadow space-y-3">
        <h3 class="font-semibold">Peringkat Lengkap</h3>

        <div
          v-for="(rt, index) in rts"
          :key="index"
          class="flex justify-between items-center p-3 rounded-xl"
          :class="[
            rt.isUser ? 'bg-green-50 border border-green-400' : 'bg-gray-50'
          ]"
        >
          <div class="flex items-center gap-3">

            <!-- RANK -->
            <div
              class="w-8 h-8 flex items-center justify-center rounded-full text-white text-sm"
              :class="getRankColor(index + 1)"
            >
              {{ index + 1 }}
            </div>

            <!-- INFO -->
            <div>
              <p class="font-semibold">
                {{ rt.name }}
                <span v-if="rt.isUser" class="text-xs bg-green-500 text-white px-2 py-1 rounded ml-1">
                  Anda
                </span>
              </p>
              <p class="text-xs text-gray-500">
                {{ rt.area }} • {{ rt.weight }} kg
              </p>
            </div>

          </div>

          <!-- POINT -->
          <div class="text-right">
            <p class="font-bold text-green-600">{{ rt.points }}</p>
            <p class="text-xs text-gray-400">points</p>
          </div>

        </div>
      </div>

      <!-- TIPS -->
      <div class="bg-purple-100 border border-purple-300 p-4 rounded-2xl">
        <h3 class="font-semibold mb-2">🏅 Raih Peringkat Teratas!</h3>
        <ul class="text-sm space-y-1">
          <li>✅ Catat sampah secara rutin</li>
          <li>✅ Selesaikan quest mingguan</li>
          <li>✅ Ajak warga RT berpartisipasi</li>
        </ul>
      </div>

      <!-- FOOTER INFO -->
      <div class="text-center text-xs text-gray-400">
        <p>Periode: Maret 2026</p>
        <p>Update setiap hari pukul 00:00 WIB</p>
      </div>

    </div>

    <!-- NAVBAR -->
    <div class="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around py-2">

      <div @click="$router.push('/rt')" class="text-gray-400 text-center cursor-pointer">
        🏠<p class="text-xs">Beranda</p>
      </div>

      <div @click="$router.push('/rt/quest')" class="text-gray-400 text-center cursor-pointer">
        🎯<p class="text-xs">Quest</p>
      </div>

      <div @click="$router.push('/rt/taman')" class="text-gray-400 text-center cursor-pointer">
        🌱<p class="text-xs">Taman</p>
      </div>

      <div class="text-green-600 text-center">
        🏆<p class="text-xs">Peringkat</p>
      </div>

    </div>

  </div>
</template>

<script setup>
const rts = [
  { name: "RT 05", area: "Melati", weight: 156.5, points: 1250 },
  { name: "RT 02", area: "Mawar", weight: 145.5, points: 1180, isUser: true },
  { name: "RT 07", area: "Anggrek", weight: 138, points: 1120 },
  { name: "RT 01", area: "Tulip", weight: 132.5, points: 1050 },
  { name: "RT 03", area: "Dahlia", weight: 125, points: 980 },
  { name: "RT 08", area: "Sakura", weight: 118.5, points: 920 },
  { name: "RT 04", area: "Seroja", weight: 110, points: 850 },
  { name: "RT 06", area: "Kenanga", weight: 98.5, points: 780 },
  { name: "RT 09", area: "Flamboyan", weight: 90, points: 720 },
  { name: "RT 10", area: "Bougenville", weight: 85, points: 690 }
]

const getRankColor = (rank) => {
  if (rank === 1) return "bg-yellow-400"
  if (rank === 2) return "bg-gray-400"
  if (rank === 3) return "bg-orange-400"
  return "bg-gray-300"
}
</script>