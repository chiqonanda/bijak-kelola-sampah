<template>
  <div class="min-h-screen bg-gray-100 pb-20">

    <!-- HEADER -->
    <div class="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-b-3xl">
      <h1 class="text-xl font-bold">Peringkat RT 🏆</h1>
      <p class="text-sm opacity-80">Kompetisi pengelolaan sampah</p>
    </div>

    <!-- LIST -->
    <div class="p-4 space-y-3">

      <!-- TOP 1 -->
      <div class="bg-yellow-100 border border-yellow-300 p-4 rounded-2xl flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="bg-yellow-400 text-white w-8 h-8 flex items-center justify-center rounded-full">1</div>
          <span class="font-semibold">RT 05</span>
        </div>
        <span class="text-green-600 font-bold">1250 pts</span>
      </div>

      <!-- USER -->
      <div class="bg-green-100 border border-green-400 p-4 rounded-2xl flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="bg-gray-400 text-white w-8 h-8 flex items-center justify-center rounded-full">2</div>
          <span class="font-semibold">RT 02 (Anda)</span>
        </div>
        <span class="text-green-600 font-bold">1180 pts</span>
      </div>

      <!-- 3 -->
      <div class="bg-white p-4 rounded-2xl shadow flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="bg-orange-400 text-white w-8 h-8 flex items-center justify-center rounded-full">3</div>
          <span class="font-semibold">RT 07</span>
        </div>
        <span class="text-green-600 font-bold">1120 pts</span>
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