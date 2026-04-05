<template>
  <div class="min-h-screen bg-gray-100 pb-20">

    <!-- HEADER -->
    <div class="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-b-3xl">
      <h1 class="text-xl font-bold">Quest Mingguan 🎯</h1>
      <p class="text-sm opacity-80">Selesaikan misi untuk naik level</p>
    </div>

    <!-- CONTENT -->
    <div class="p-4 space-y-4">

      <!-- QUEST 1 -->
      <div class="bg-white p-4 rounded-2xl shadow">
        <div class="flex justify-between items-center mb-2">
          <h2 class="font-semibold">Kumpulkan 10kg plastik</h2>
          <span class="text-sm text-gray-500">7/10</span>
        </div>

        <div class="w-full bg-gray-200 h-2 rounded-full">
          <div class="bg-green-500 h-2 rounded-full w-[70%]"></div>
        </div>
      </div>

      <!-- QUEST 2 -->
      <div class="bg-white p-4 rounded-2xl shadow">
        <div class="flex justify-between items-center mb-2">
          <h2 class="font-semibold">Catat sampah 3 kali</h2>
          <span class="text-sm bg-green-100 text-green-600 px-2 py-1 rounded">
            Selesai
          </span>
        </div>

        <div class="w-full bg-gray-200 h-2 rounded-full">
          <div class="bg-green-500 h-2 rounded-full w-full"></div>
        </div>
      </div>

    </div>

    <!-- NAVBAR -->
    <div class="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around py-2">

      <div @click="$router.push('/rt')" class="text-gray-400 text-center cursor-pointer">
        <div>🏠</div>
        <p class="text-xs">Beranda</p>
      </div>

      <div class="text-green-600 text-center cursor-pointer">
        <div>🎯</div>
        <p class="text-xs">Quest</p>
      </div>

      <div @click="$router.push('/rt/taman')" class="text-gray-400 text-center cursor-pointer">
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