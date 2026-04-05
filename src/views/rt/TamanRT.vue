<template>
  <div class="min-h-screen bg-gray-100 pb-20">

    <!-- HEADER -->
    <div class="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-b-3xl">
      <h1 class="text-xl font-bold">Taman Digital 🌱</h1>
      <p class="text-sm opacity-80">Perkembangan pohon kamu</p>
    </div>

    <div class="p-4">

      <div class="bg-white p-6 rounded-2xl shadow text-center">
        <div class="text-6xl">🌳</div>

        <h2 class="mt-3 font-semibold">Pohon Sehat</h2>
        <p class="text-sm text-gray-500">75% berkembang</p>

        <div class="w-full bg-gray-200 h-2 rounded-full mt-3">
          <div class="bg-green-500 h-2 rounded-full w-[75%]"></div>
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