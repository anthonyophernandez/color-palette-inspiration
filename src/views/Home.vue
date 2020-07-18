<template>
  <div class="flex w-full h-full" :class="'bg' + currentPalette[0]">
    <!-- Color Palette Selection -->
    <transition name="hide">
      <aside v-show="showAsideBar" class="w-64 sm:w-48 h-full py-2 overflow-y-auto" :class="'bg' + currentPalette[0]">
        <div
          class="flex w-32 h-16 mx-auto mb-4 rounded shadow-lg cursor-pointer"
          v-for="(palette, index) in palettes"
          :key="index" @click="selectPalette(index)"
          :class="selectedClass(index)"
        >
          <div
            class="w-full h-full border border-indigo-700"
            v-for="(color, index) in palette.colors"
            :key="index"
            :class="'bg' + color">
          </div>
        </div>
      </aside>
    </transition>
    <!-- Main -->
    <main class="w-full h-full overflow-x-auto" ref="top">
      <!-- Toolbar -->
      <div class="flex w-full h-16" :class="'bg' + currentPalette[0]">
        <button @click="toggleSidebar" class="text-white font-bold focus:outline-none ">
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
      <section class="relative w-full min-h-full overflow-hidden">

        <section ref="section-1" class="relative pb-16" :class="'bg' + currentPalette[0]">
          <div class="flex flex-col-reverse md:flex-row justify-between w-4/5 lg:w-4/5 xl:w-4/6 m-auto">
            <div class="w-full md:w-1/2">
              <h2 class="text-4xl font-bold mb-3" :class="'text' + currentPalette[1]">Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
              <p class="leading-relaxed text-base" :class="'text' + currentPalette[1]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sit, odit ipsam libero nisi eos veritatis delectus veniam ullam, placeat consectetur incidunt perferendis dolorum rem nam nesciunt est quia soluta? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quibusdam esse ex sed sint rem, quisquam autem repellat blanditiis eum doloremque tenetur reiciendis soluta doloribus velit, deleniti commodi placeat ipsam?</p>
              <button class="w-full sm:w-64 h-12 mx-auto mt-6 py-2 px-5 font-bold focus:outline-none rounded" :class="['bg' + currentPalette[3], 'text' + currentPalette[1]]" @click="randomPalette">Try changing the palette!</button>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-64 h-64 m-auto icon icon-tabler icon-tabler-photo stroke-current" :class="'text' + currentPalette[1]" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <line x1="15" y1="8" x2="15.01" y2="8" />
              <rect x="4" y="4" width="16" height="16" />
              <path d="M4.2 15l4 -4a3 5 0 0 1 3 0l 5 5" />
              <path d="M13.9 13l1 -1a3 5 0 0 1 3 0l 2 2" />
            </svg>
          </div>
          <CopyToClipboard class="absolute right-0 top-0 mt-1 mr-2" section="section-1" :color="'text' + currentPalette[1]" />
        </section>

        <section ref="section-2" class="relative pb-16" :class="'bg' + currentPalette[1]">
          <div class="w-4/5 lg:w-4/5 xl:w-4/6 m-auto py-8">
            <div class="w-1/2 m-auto mb-8">
              <h2 class="text-4xl text-center font-bold" :class="'text' + currentPalette[0]">Lorem ipsum dolor sit</h2>
              <p class="text-center ml-3 leading-relaxed text-base" :class="'text' + currentPalette[0]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="flex flex-wrap flex-col lg:flex-row">
              <div class="w-full lg:w-1/2 xl:w-1/3" v-for="index in 6" :key="index">
                <div class="px-6 py-10 lg:mr-4 mb-4 rounded" :class="'bg' + currentPalette[0]">
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 icon icon-tabler icon-tabler-photo stroke-current" :class="'text' + currentPalette[1]" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z"/>
                      <line x1="15" y1="8" x2="15.01" y2="8" />
                      <rect x="4" y="4" width="16" height="16" />
                      <path d="M4.2 15l4 -4a3 5 0 0 1 3 0l 5 5" />
                      <path d="M13.9 13l1 -1a3 5 0 0 1 3 0l 2 2" />
                    </svg>
                    <h3 class="text-xl font-bold" :class="'text' + currentPalette[1]">Lorem ipsum</h3>
                  </div>
                  <p class="ml-3 leading-relaxed text-base" :class="'text' + currentPalette[1]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sit, odit ipsam libero nisi eos veritatis delectus veniam ullam, placeat consectetur incidunt perferendis dolorum rem nam nesciunt est quia soluta? Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>
          </div>
          <CopyToClipboard class="absolute right-0 top-0 mt-1 mr-2" section="section-2" :color="'text' + currentPalette[0]" />
        </section>

        <section ref="section-3" class="relative pb-16" :class="'bg' + currentPalette[0]">
          <div class="w-4/5 lg:w-4/5 xl:w-4/6 m-auto">
            <div class="py-8">
              <h2 class="text-4xl font-bold" :class="'text' + currentPalette[1]">Lorem ipsum dolor sit</h2>
              <p class="leading-relaxed text-base" :class="'text' + currentPalette[1]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="flex flex-wrap flex-col lg:flex-row">
              <div class="w-full lg:w-1/2 xl:w-1/3" v-for="index in 8" :key="index">
                <div class="px-6 py-10 lg:mr-4 mb-4 rounded" :class="'bg' + currentPalette[1]">
                  <div class="flex justify-between ml-3 mb-4">
                    <h3 class="text-xl font-bold" :class="'text' + currentPalette[0]">Lorem ipsum</h3>
                    <div class="font-bold" :class="'text' + currentPalette[2]">Lorem ipsum</div>
                  </div>
                  <p class="ml-3 leading-relaxed text-base" :class="'text' + currentPalette[0]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sit, odit ipsam libero nisi eos veritatis delectus veniam ullam, placeat consectetur incidunt perferendis dolorum rem nam nesciunt est quia soluta? Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                  <div class="mt-6 ml-3">
                    <div class="font-bold mb-2" :class="'text' + currentPalette[0]">Lorem ipsum dolor</div>
                    <div class="inline-block font-bold p-1 px-3 mb-1 mr-1 rounded" :class="['bg' + currentPalette[3], 'text' + currentPalette[1]]" v-for="index in 7" :key="index">
                      Lorem
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CopyToClipboard class="absolute right-0 top-0 mt-1 mr-2" section="section-3" :color="'text' + currentPalette[1]" />
        </section>

        <section ref="section-4" class="relative pb-16" :class="'bg' + currentPalette[1]">
          <div class="w-4/5 lg:w-4/5 xl:w-4/6 m-auto">
            <div class="flex flex-col-reverse md:flex-row justify-between mb-6">
              <div class="w-full md:w-1/2 py-6">
                <h2 class="text-4xl font-bold mb-3" :class="'text' + currentPalette[0]">Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
                <p class="leading-relaxed text-base mb-2" :class="'text' + currentPalette[0]">Lorem ipsum dolor sit amet <a href="#" class="font-bold underline" :class="'text' + currentPalette[2]">consectetur</a> adipisicing elit. Molestiae, sit, odit ipsam libero nisi eos veritatis delectus veniam ullam, placeat consectetur incidunt perferendis dolorum rem nam nesciunt est quia soluta? Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p class="leading-relaxed text-base" :class="'text' + currentPalette[0]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sit, odit ipsam libero nisi eos veritatis delectus veniam ullam, placeat consectetur incidunt perferendis dolorum rem nam nesciunt est quia soluta? Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-64 h-64 m-auto icon icon-tabler icon-tabler-photo stroke-current" :class="'text' + currentPalette[0]" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <line x1="15" y1="8" x2="15.01" y2="8" />
                <rect x="4" y="4" width="16" height="16" />
                <path d="M4.2 15l4 -4a3 5 0 0 1 3 0l 5 5" />
                <path d="M13.9 13l1 -1a3 5 0 0 1 3 0l 2 2" />
              </svg>
            </div>
            <div class="mb-6">
              <h3 class="text-xl font-bold mb-3" :class="'text' + currentPalette[0]">Lorem ipsum dolor sit amet</h3>
              <div class="flex flex-col md:flex-row">
                <div class="w-full md:w-1/3 px-6 py-10 md:mr-2 mb-2 rounded" :class="'bg' + currentPalette[0]" v-for="index in 3" :key="index">
                  <h3 class="ml-3 text-xl font-bold" :class="'text' + currentPalette[1]">Lorem ipsum</h3>
                  <p class="ml-3 leading-relaxed text-base" :class="'text' + currentPalette[1]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>
            <div class="mb-6">
              <h3 class="text-xl font-bold mb-6" :class="'text' + currentPalette[0]">Lorem ipsum dolor sit amet consectetur adipisicing</h3>
              <form @submit.prevent="" class="flex flex-col lg:flex-row items-end">
                <div class="flex flex-col w-full lg:w-5/12 mr-1">
                  <label class="font-bold mt-2 mb-2" :class="'text' + currentPalette[0]" for="name">First Name</label>
                  <input class="font-bold h-16 py-4 px-3 rounded" :class="['bg' + currentPalette[0],'placeholder' + currentPalette[1]]" id="name" type="text" placeholder="Your name">
                </div>
                <div class="flex flex-col w-full lg:w-5/12 mr-1">
                  <label class="font-bold mt-2 mb-2" :class="'text' + currentPalette[0]" for="email">First Name</label>
                  <input class="font-bold h-16 py-4 px-3 rounded" :class="['bg' + currentPalette[0],'placeholder' + currentPalette[1]]" id="email" type="email" placeholder="you@example.com">
                </div>
                <button class="h-16 w-full lg:w-2/12 mr-1 mt-2 rounded font-bold focus:outline-none" :class="['bg' + currentPalette[2], 'text' + currentPalette[1]]">Subscribe</button>
              </form>
            </div>
          </div>
          <CopyToClipboard class="absolute right-0 top-0 mt-1 mr-2" section="section-4" :color="'text' + currentPalette[0]" />
        </section>

        <footer ref="footer" class="relative pt-8 pb-4" :class="'bg' + currentPalette[0]">
          <div class="w-4/5 lg:w-4/5 xl:w-4/6 m-auto mb-6">
            <div class="flex flex-col md:flex-row justify-between">
              <div class="w-full md:w-1/2 mb-8">
                <h3 class="text-xl font-bold" :class="'text' + currentPalette[1]">Lorem ipsum</h3>
                <p class="leading-relaxed text-base" :class="'text' + currentPalette[1]">Lorem ipsum dolor sit amet <a href="#" class="font-bold underline" :class="'text' + currentPalette[3]">consectetur</a> adipisicing elit.</p>
              </div>
              <div class="w-full md:w-auto">
                <h3 class="text-xl font-bold" :class="'text' + currentPalette[1]">Lorem ipsum</h3>
                <ul class="py-2 text-lg" :class="'text' + currentPalette[1]">
                  <li class="mb-2 cursor-pointer" :class="'hover:text' + currentPalette[3]" v-for="index in 5" :key="index">Link {{ index }}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="w-full text-center" :class="'text' + currentPalette[1]">©20XX. All Rights Reserved.</div>
          <CopyToClipboard class="absolute right-0 top-0 mt-1 mr-2" section="footer" :color="'text' + currentPalette[1]" />
        </footer>

        <button @click="scrollToTop" class="flex justify-center items-center fixed right-0 bottom-0 focus:outline-none rounded-full border-2 cursor-pointer mr-4 mb-4 w-16 h-16 bg-gray-100" :class="['bg' + currentPalette[0], 'border' + currentPalette[1]]">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up w-12 h-12 stroke-current" :class="'text' + currentPalette[1]" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="18" y1="11" x2="12" y2="5" />
            <line x1="6" y1="11" x2="12" y2="5" />
          </svg>
        </button>
      </section>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CopyToClipboard from '../components/CopyToClipboard.vue'
export default {
  name: 'Home',
  components: {
    CopyToClipboard
  },
  data () {
    return {
      showAsideBar: false,
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
      this.showAsideBar = false
    },
    selectedClass (index) {
      return (this.selectedPalette === index) ? 'border-solid border-4 border-indigo-500' : ''
    },
    setCurrentPalette (index) {
      this.currentPalette = this.palettes[index].colors
    },
    scrollToTop () {
      this.$refs.top.scrollTop = 0
    },
    randomPalette () {
      const id = Math.floor(Math.random() * this.palettes.length)
      this.selectPalette(id)
    },
    toggleSidebar () {
      this.showAsideBar = !this.showAsideBar
    }
  },
  created () {
    this.$store.dispatch('loadPalettes')
    this.selectPalette(0)
  }
}
</script>

<style scoped>
  .hide-enter-active, .hide-leave-active {
    transition: 0.15s ease-in-out;
  }
  .hide-enter, .hide-leave-to {
    transform: translate(-100%);
  }
</style>
