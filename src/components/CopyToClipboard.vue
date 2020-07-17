<template>
  <div>
    <button class="focus:outline-none" @click="copyToClipboard">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-copy w-12 h-12 stroke-current" :class="color" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <rect x="8" y="8" width="12" height="12" rx="2" />
        <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
      </svg>
    </button>
    <p class="text-sm" v-show="isCopied" :class="color">Copied!</p>
  </div>
</template>

<script>
export default {
  name: 'CopyToClipboard',
  props: ['section', 'color'],
  data () {
    return {
      isCopied: false
    }
  },
  methods: {
    copyToClipboard () {
      const html = this.$parent.$refs[this.section].outerHTML
      navigator.clipboard.writeText(html)
      this.isCopied = true
      setTimeout(() => {
        this.isCopied = false
      }, 1000)
    }
  }
}
</script>
