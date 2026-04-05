<template>
  <div class="min-h-screen bg-gray-100 pb-20">

    <!-- HEADER -->
    <div class="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-b-3xl shadow">
      <p class="text-sm opacity-80">Selamat Datang!</p>
      <h1 class="text-2xl font-bold">RT 02 Mawar</h1>

      <div class="mt-4 bg-white/20 p-4 rounded-xl">
        <div class="flex justify-between text-sm mb-1">
          <span>⭐ Level 5</span>
          <span>Eco Warrior</span>
        </div>
        <div class="w-full bg-white/30 h-2 rounded-full">
          <div class="bg-black h-2 rounded-full w-[70%]"></div>
        </div>
        <p class="text-xs mt-1">350 / 500 XP</p>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="p-4 space-y-4">

      <!-- PROGRESS -->
      <div class="bg-white p-4 rounded-2xl shadow">
        <h2 class="font-semibold mb-2">Progress Minggu Ini</h2>
        <div class="flex justify-between items-center">
          <div>
            <p class="text-green-600 text-2xl font-bold">45.5 kg</p>
            <p class="text-sm text-gray-500">dari target 60 kg</p>
          </div>
          <p class="text-xl font-bold text-gray-400">76%</p>
        </div>
      </div>

      <!-- TAMAN -->
      <div class="bg-green-100 p-4 rounded-2xl shadow text-center">
        <h2 class="font-semibold mb-2">Taman Digital Anda</h2>
        <div class="text-5xl">🌳</div>
        <p class="text-sm text-gray-600 mt-2">
          Pohon Anda tumbuh sehat! 75% berkembang
        </p>
      </div>

      <!-- ACTION -->
      <div class="grid grid-cols-2 gap-3">
        <div @click="$router.push('/rt/add')" class="bg-green-500 text-white p-4 rounded-2xl text-center cursor-pointer">
          ➕ Tambah Data
        </div>
        <div class="bg-blue-500 text-white p-4 rounded-2xl text-center">
          📦 Penjemputan
        </div>
      </div>

      <!-- STATUS -->
      <div class="bg-yellow-50 border border-yellow-300 p-4 rounded-2xl">
        <h2 class="font-semibold">Status Penjemputan</h2>
        <p class="text-xl font-bold">32.5 kg</p>
        <p class="text-sm">Dijadwalkan</p>
      </div>

      <!-- PERINGKAT -->
      <div class="bg-white p-4 rounded-2xl shadow">
        <h2 class="font-semibold mb-3">Peringkat RT</h2>

        <div class="space-y-2">
          <div class="flex justify-between">
            <span>🥇 RT 05</span>
            <span class="text-green-600 font-semibold">1250 pts</span>
          </div>

          <div class="flex justify-between bg-green-100 p-2 rounded-xl border border-green-300">
            <span>🥈 RT 02 (Anda)</span>
            <span class="text-green-600 font-semibold">1180 pts</span>
          </div>

          <div class="flex justify-between">
            <span>🥉 RT 07</span>
            <span class="text-green-600 font-semibold">1120 pts</span>
          </div>
        </div>
      </div>

      <!-- BADGE -->
      <div class="bg-white p-4 rounded-2xl shadow">
        <h2 class="font-semibold mb-3">Badge Pencapaian</h2>

        <div class="flex justify-around text-center">
          <div>
            <div class="text-3xl">🌱</div>
            <p class="text-sm">Starter</p>
          </div>

          <div>
            <div class="text-3xl">⭐</div>
            <p class="text-sm">Eco Hero</p>
          </div>

          <div class="opacity-40">
            <div class="text-3xl">🏆</div>
            <p class="text-sm">Green Master</p>
          </div>
        </div>
      </div>

          <!-- BOTTOM NAV -->
          <div class="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around py-2">

            <!-- BERANDA -->
            <div 
              @click="$router.push('/rt')" 
              :class="$route.path === '/rt' ? 'text-green-600' : 'text-gray-400'"
              class="text-center cursor-pointer"
            >
              <div>🏠</div>
              <p class="text-xs">Beranda</p>
            </div>

            <!-- QUEST -->
            <div 
              @click="$router.push('/rt/quest')" 
              :class="$route.path === '/rt/quest' ? 'text-green-600' : 'text-gray-400'"
              class="text-center cursor-pointer"
            >
              <div>🎯</div>
              <p class="text-xs">Quest</p>
            </div>

            <!-- TAMAN -->
            <div 
              @click="$router.push('/rt/taman')" 
              :class="$route.path === '/rt/taman' ? 'text-green-600' : 'text-gray-400'"
              class="text-center cursor-pointer"
            >
              <div>🌱</div>
              <p class="text-xs">Taman</p>
            </div>

            <!-- PERINGKAT -->
            <div 
              @click="$router.push('/rt/peringkat')" 
              :class="$route.path === '/rt/peringkat' ? 'text-green-600' : 'text-gray-400'"
              class="text-center cursor-pointer"
            >
              <div>🏆</div>
              <p class="text-xs">Peringkat</p>
            </div>

          </div>

    </div>
  </div>
</template>