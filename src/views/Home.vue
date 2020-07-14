<template>
  <div class="flex w-full h-full">
    <!-- Color Palette Selection -->
    <aside v-show="showAsideBar" class="w-64 sm:w-48 h-full py-2 overflow-y-auto" :class="'bg' + currentPalette[0]">
      <div
        class="flex w-32 h-16 mx-auto mb-4 rounded shadow-lg cursor-pointer"
        v-for="(palette, index) in palettes"
        :key="index" @click="selectPalette(index)"
        :class="selectedClass(index)"
      >
        <div
          class="w-full h-full border border-gray-900"
          v-for="(color, index) in palette.colors"
          :key="index"
          :class="'bg' + color">
        </div>
      </div>
    </aside>
    <!-- Main -->
    <main class="w-full h-full overflow-x-auto">
      <!-- Toolbar -->
      <div class="flex w-full h-16" :class="'bg' + currentPalette[0]">
        <button @click="showAsideBar = !showAsideBar" class="text-white font-bold focus:outline-none ">
          <!-- Menu Icon -->
          <svg v-show="!showAsideBar" xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 ml-3 icon icon-tabler icon-tabler-menu stroke-current" :class="'text' + currentPalette[1]" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="4" y1="8" x2="20" y2="8" />
            <line x1="4" y1="16" x2="20" y2="16" />
          </svg>
          <!-- Left Arrow Icon -->
          <svg v-show="showAsideBar" xmlns="http://www.w3.org/2000/svg" class="w-24 h-12 ml-3 icon icon-tabler icon-tabler-arrow-left stroke-current" :class="'text' + currentPalette[1]" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="5" y1="12" x2="11" y2="18" />
            <line x1="5" y1="12" x2="11" y2="6" />
          </svg>
        </button>
      </div>
      <!-- Content -->
      <section class="w-full min-h-full py-8" :class="'bg' + currentPalette[0]">

        <section class="flex justify-between w-4/5 m-auto">
          <div class="w-1/2">
            <h2 class="text-2xl mb-3" :class="'text' + currentPalette[1]">Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
            <p class="leading-relaxed text-base" :class="'text' + currentPalette[1]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sit, odit ipsam libero nisi eos veritatis delectus veniam ullam, placeat consectetur incidunt perferendis dolorum rem nam nesciunt est quia soluta? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quibusdam esse ex sed sint rem, quisquam autem repellat blanditiis eum doloremque tenetur reiciendis soluta doloribus velit, deleniti commodi placeat ipsam?</p>
            <button class="w-64 h-12 mx-auto mt-6 py-2 px-5 font-bold focus:outline-none rounded" :class="['bg' + currentPalette[3], 'text' + currentPalette[1]]">Button</button>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-64 h-64 icon icon-tabler icon-tabler-photo stroke-current" :class="'text' + currentPalette[1]" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="15" y1="8" x2="15.01" y2="8" />
            <rect x="4" y="4" width="16" height="16" />
            <path d="M4.2 15l4 -4a3 5 0 0 1 3 0l 5 5" />
            <path d="M13.9 13l1 -1a3 5 0 0 1 3 0l 2 2" />
          </svg>
        </section>

      </section>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      showAsideBar: true,
      selectedPalette: -1,
      currentPalette: []
    }
  },
  computed: {
    ...mapState({
      palettes: state => state.palettes
    })
  },
  methods: {
    selectPalette (index) {
      this.selectedPalette = index
      this.setCurrentPalette(index)
    },
    selectedClass (index) {
      return (this.selectedPalette === index) ? 'border-solid border-2 border-indigo-500' : ''
    },
    setCurrentPalette (index) {
      this.currentPalette = this.palettes[index].colors
    }
  },
  created () {
    this.setCurrentPalette(0)
  }
}
</script>
