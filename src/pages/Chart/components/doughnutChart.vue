<template>
  <div ref="main" style="width: 100%; height: 400px"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const main = ref(); // 使用ref创建虚拟DOM引用,使用时用main.value

const init = () => {
  const myChart = echarts.init(main.value);
  const option = {
    title: {
      text: '环形图',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '5%',
      left: 'center',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
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
