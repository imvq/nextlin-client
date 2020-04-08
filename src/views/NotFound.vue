<template>
  <div>
    <NotFoundContent />
  </div>
</template>

<script>
import NotFoundContent from '@/components/NotFoundContent';

export default {
  name: 'NotFound',
  components: {
    NotFoundContent
  }
};
</script>

<style lang="scss" scoped>
body {
  padding-top: 50px;
}
</style>

