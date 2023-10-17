<template>
  <div ref="main" style="width: 100%; height: 400px"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const main = ref() // 使用ref创建虚拟DOM引用,使用时用main.value

const init = () => {
  const myChart = echarts.init(main.value)
  const option = {
    title: {
      text: '平滑折线图'
    },
    tooltip: {},
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }
    ]
  }
  // 使用刚指定的配置项和数据显示图表.
  myChart.setOption(option)
}

onMounted(() => {
  init()
})
</script>

<style lang="scss" scoped></style>
