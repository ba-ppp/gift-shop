<script>
import { store } from "@/store";
import Collapse from "ant-design-vue/lib/collapse/Collapse";
import CollapsePanel from "ant-design-vue/lib/collapse/CollapsePanel";
import List from "ant-design-vue/lib/list/";
import ListItem from "ant-design-vue/lib/list/";
import { ref } from "vue";
const isMenuOpen = store?.state.toggle.isShowMenuSlider;
import { mapGetters, mapState } from "vuex";

export default {
  components: { Collapse, CollapsePanel, List, ListItem },
  computed: {
    ...mapState({
      isMenuOpen: (state) => state.toggle.isShowMenuSlider,
    }),
  },
};
</script>

<template>
  <List
    v-bind:class="isMenuOpen ? 'duration-500 w-64' : 'duration-500 w-20'"
    class="fixed top-[73px] left-0"
  >
    <Collapse>
      <CollapsePanel class="p-5" :show-arrow="false" header="Dog">
       
      </CollapsePanel>
      <CollapsePanel :show-arrow="false" header="Pokemon">
        <List>
          <List.Item>Content 1</List.Item>
          <List.Item>Content 2</List.Item>
          <List.Item>Content 3</List.Item>
        </List>
      </CollapsePanel>
      <CollapsePanel :show-arrow="false" header="Other">
        <List.Item>Content 1</List.Item>
        <List.Item>Content 2</List.Item>
        <List.Item>Content 3</List.Item>
      </CollapsePanel>
    </Collapse>
  </List>
</template>
<!-- <style scoped src="ant-design-vue/dist/antd.css"><style> -->
<style scoped>
@import "ant-design-vue/dist/antd.css";
</style>
