<script setup lang="ts">

const { getWebFlow } = useWebFlow();
getWebFlow().then(data => console.log(data));

</script>


<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
