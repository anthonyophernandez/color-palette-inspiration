<template>
  <div class="flex w-full h-full">
    <!-- Color Palette Selection -->
    <aside v-show="showAsideBar" class="relative w-64 sm:w-48 h-full py-2 bg-gray-200 overflow-y-auto">
      <div class="w-32 h-16 mx-auto mb-4 bg-gray-100 rounded shadow-lg cursor-pointer" v-for="index in 100" :key="index" @click="selectPalette(index)" :class="selectedClass(index)"></div>
    </aside>
    <!-- Toolbar -->
    <div class="flex w-full h-16 bg-indigo-500">
      <button @click="showAsideBar = !showAsideBar" class="text-white font-bold focus:outline-none ">
        <!-- Menu Icon -->
        <svg v-show="!showAsideBar" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z"/>
          <line x1="4" y1="8" x2="20" y2="8" />
          <line x1="4" y1="16" x2="20" y2="16" />
        </svg>
        <!-- Left Arrow Icon -->
        <svg v-show="showAsideBar" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z"/>
          <line x1="5" y1="12" x2="19" y2="12" />
          <line x1="5" y1="12" x2="11" y2="18" />
          <line x1="5" y1="12" x2="11" y2="6" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      showAsideBar: false,
      selectedPalette: -1
    }
  },
  methods: {
    selectPalette (index) {
      this.selectedPalette = index
    },
    selectedClass (index) {
      return (this.selectedPalette === index) ? 'bg-indigo-500 bg-opacity-25 border-solid border-2 border-indigo-500' : ''
    }
  }
}
</script>
