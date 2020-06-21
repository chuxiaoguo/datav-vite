<template>
  <div id="app">
    <DataVTemplate :palette="palette" :scaleMode="mode">
      <CellGroup></CellGroup>
    </DataVTemplate>
  </div>
</template>

<script lang="ts">
import CellGroup from './cellGroup/index.vue';
import bg from './assets/bg.png'
const enum ScaleMode {
    // 等比缩放
    EQUAL = 1,
    // 宽度铺满，高度等比缩放
    HSCALE,
    // 高度铺满，宽度等比缩放
    WSCALE,
}

export default {
  name: 'app',
  components: {
    CellGroup
  },
  data: () => {

    return {
      palette: {
        backgroundImage: bg,
      },
      mode: ScaleMode.HSCALE
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
