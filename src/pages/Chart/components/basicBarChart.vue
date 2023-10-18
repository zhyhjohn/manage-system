<template>
  <div ref="main" style="width: 100%; height: 400px"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const main = ref(); // 使用ref创建虚拟DOM引用,使用时用main.value

const init = () => {
  // 基于准备好的dom,初始化echarts实例
  const myChart = echarts.init(main.value);
  // 指定图表的配置项和数据
  const option = {
    title: {
      text: '基础柱状图',
    },
    tooltip: {},
    legend: {
      data: ['销量'],
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
      },
    ],
  };
  // 使用刚指定的配置项和数据显示图表.
  myChart.setOption(option);
};

onMounted(() => {
  init();
});
</script>

<style lang="scss" scoped></style>
