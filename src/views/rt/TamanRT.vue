<template>
  <div class="min-h-screen bg-gray-100 pb-24">

    <!-- HEADER -->
    <div class="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-b-3xl">
      <div class="flex items-center gap-2">
        <span class="text-xl"></span>
        <h1 class="text-lg font-bold">Taman Digital</h1>
      </div>
    </div>

    <div class="p-4 space-y-4">

      <!-- MAIN TREE CARD -->
      <div class="bg-gradient-to-b from-green-100 to-blue-100 p-5 rounded-3xl shadow text-center">

        <span class="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
          Level 3
        </span>

        <h2 class="mt-2 text-lg font-bold">Pohon Ek</h2>
        <p class="text-sm text-gray-500">Tumbuh bersama aktivitasmu!</p>

        <div class="text-7xl my-4">🌳</div>

        <!-- PROGRESS -->
        <div class="bg-white p-4 rounded-xl shadow-sm">
          <div class="flex justify-between text-sm font-semibold">
            <span>Pertumbuhan</span>
            <span class="text-green-600">75%</span>
          </div>

          <div class="w-full bg-gray-200 h-2 rounded-full mt-2">
            <div class="bg-green-500 h-2 rounded-full w-[75%]"></div>
          </div>

          <p class="text-xs text-gray-400 mt-2">
            25% lagi untuk level 4
          </p>
        </div>

      </div>

      <!-- STATS -->
      <div class="grid grid-cols-3 gap-3">
        <div class="bg-white p-4 rounded-xl shadow text-center">
          <p>💧</p>
          <p class="text-xs text-gray-500">Kesehatan</p>
          <p class="font-bold">90%</p>
        </div>

        <div class="bg-white p-4 rounded-xl shadow text-center">
          <p>☀️</p>
          <p class="text-xs text-gray-500">Energi</p>
          <p class="font-bold">Tinggi</p>
        </div>

        <div class="bg-white p-4 rounded-xl shadow text-center">
          <p>🌬</p>
          <p class="text-xs text-gray-500">Usia</p>
          <p class="font-bold">45 hari</p>
        </div>
      </div>

      <!-- DAMPAK -->
      <div class="bg-gradient-to-r from-blue-500 to-green-500 text-white p-5 rounded-2xl shadow">
        <h3 class="font-semibold mb-3">Dampak Lingkungan</h3>

        <div class="grid grid-cols-2 gap-3">
          <div class="bg-white/20 p-3 rounded-xl">
            <p class="text-xs">Total Sampah</p>
            <p class="text-xl font-bold">245.5 kg</p>
          </div>

          <div class="bg-white/20 p-3 rounded-xl">
            <p class="text-xs">CO₂ Diselamatkan</p>
            <p class="text-xl font-bold">122.75 kg</p>
          </div>
        </div>

        <p class="text-xs mt-3 opacity-80">
          Setara dengan menanam 24 pohon nyata
        </p>
      </div>

      <!-- TAHAPAN -->
      <div class="bg-white p-4 rounded-2xl shadow space-y-3">
        <h3 class="font-semibold">Tahapan Pertumbuhan</h3>

        <div class="p-3 border rounded-xl flex justify-between items-center bg-green-50">
          <span>🌱 Level 1: Biji</span>
          <span class="text-xs bg-gray-200 px-2 py-1 rounded">Selesai</span>
        </div>

        <div class="p-3 border rounded-xl flex justify-between items-center bg-green-50">
          <span>🌿 Level 2: Tunas</span>
          <span class="text-xs bg-gray-200 px-2 py-1 rounded">Selesai</span>
        </div>

        <div class="p-3 border rounded-xl flex justify-between items-center border-green-400">
          <span>🌳 Level 3: Pohon Muda</span>
          <span class="text-xs bg-green-500 text-white px-2 py-1 rounded">Saat Ini</span>
        </div>

        <div class="p-3 border rounded-xl flex justify-between items-center opacity-40">
          <span>🌲 Level 4: Dewasa</span>
          <span class="text-xs bg-gray-200 px-2 py-1 rounded">Terkunci</span>
        </div>

      </div>

      <!-- DEKORASI -->
      <div class="bg-white p-4 rounded-2xl shadow">
        <h3 class="font-semibold mb-3">Dekorasi Taman</h3>

        <div class="grid grid-cols-3 gap-3 text-center">

          <div class="border rounded-xl p-3 bg-green-50">
            <p class="text-2xl">🪴</p>
            <p class="text-xs mt-1">Pot Premium</p>
          </div>

          <div class="border rounded-xl p-3 bg-green-50">
            <p class="text-2xl">🎍</p>
            <p class="text-xs mt-1">Pagar Bambu</p>
          </div>

          <div class="border rounded-xl p-3 opacity-40">
            <p class="text-2xl">🪨</p>
            <p class="text-xs mt-1">Terkunci</p>
          </div>

        </div>
      </div>

      <!-- AKTIVITAS -->
      <div class="bg-white p-4 rounded-2xl shadow">
        <h3 class="font-semibold mb-3">Aktivitas Pertumbuhan</h3>

        <div class="space-y-3 text-sm">

          <div class="flex justify-between items-center bg-gray-50 p-3 rounded-xl">
            <span>♻️ Catat 5kg plastik</span>
            <span class="text-green-600 font-semibold">+5%</span>
          </div>

          <div class="flex justify-between items-center bg-gray-50 p-3 rounded-xl">
            <span>🎯 Selesaikan quest</span>
            <span class="text-green-600 font-semibold">+10%</span>
          </div>

          <div class="flex justify-between items-center bg-gray-50 p-3 rounded-xl">
            <span>🚛 Penjemputan</span>
            <span class="text-green-600 font-semibold">+8%</span>
          </div>

        </div>
      </div>

    </div>

    <!-- NAVBAR -->
    <div class="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around py-2">

      <div @click="$router.push('/rt')" class="text-gray-400 text-center cursor-pointer">
        <div>🏠</div>
        <p class="text-xs">Beranda</p>
      </div>

      <div @click="$router.push('/rt/quest')" class="text-gray-400 text-center cursor-pointer">
        <div>🎯</div>
        <p class="text-xs">Quest</p>
      </div>

      <div class="text-green-600 text-center cursor-pointer">
        <div>🌱</div>
        <p class="text-xs">Taman</p>
      </div>

      <div @click="$router.push('/rt/peringkat')" class="text-gray-400 text-center cursor-pointer">
        <div>🏆</div>
        <p class="text-xs">Peringkat</p>
      </div>

    </div>

  </div>
</template>