<template>
  <div id="root" :data-app="currentApp">
    <a-layout class="main-wrapper">
      <a-layout-header class="main-header clearfix">
        <div class="main-header-logo">八爪鱼流处理计算平台</div>
        <div class="main-header-menu">
          <a-menu
            class="header-menu"
            mode="horizontal"
            :selectedKeys="[currentApp]"
            @click="handleMenuClick"
          >
            <a-menu-item key="main"><a-icon type="calendar" />main</a-menu-item>
            <a-menu-item key="app1"><a-icon type="calendar" />app1</a-menu-item>
            <a-menu-item key="app2"><a-icon type="calendar" />app2</a-menu-item>
          </a-menu>
        </div>
        <div class="main-header-right">
          <span class="ant-dropdown-link">
            管理员 <a-icon type="caret-down" />
          </span>
        </div>
      </a-layout-header>
      <a-layout class="main-layout">
        <div class="left-menus" v-if="['app1', 'app2'].includes(currentApp)">
          <a-layout-sider width="160" class="main-sider">
            <a-menu
              mode="inline"
              class="main-menu scrollbar"
              :inlineIndent="18"
              :selectedKeys="[$route.path]"
              @click="handleMenuChange"
            >
              <template v-if="currentApp === 'app1'">
                <a-menu-item key="/app1/page1">
                  <a-icon type="user" />
                  <span>app1 page1</span>
                </a-menu-item>
                <a-menu-item key="/app1/page2">
                  <a-icon type="user" />
                  <span>app1 page2</span>
                </a-menu-item>
                <a-menu-item key="/app1/page3">
                  <a-icon type="user" />
                  <span>app1 page3</span>
                </a-menu-item>
              </template>
              <template v-if="currentApp === 'app2'">
                <a-menu-item key="/app2/page1">
                  <a-icon type="bell" />
                  <span>app2 page1</span>
                </a-menu-item>
                <a-menu-item key="/app2/page2">
                  <a-icon type="bell" />
                  <span>app2 page2</span>
                </a-menu-item>
                <a-menu-item key="/app2/page3">
                  <a-icon type="bell" />
                  <span>app2 page3</span>
                </a-menu-item>
              </template>
            </a-menu>
          </a-layout-sider>
        </div>
        <a-layout class="main-content scrollbar scrollbar-lg">
          <router-view></router-view>
          <div id="app"></div>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apps: ["app1", "app2"],
      currentApp: "main",
      appPathKey: {}
    };
  },

  created() {
    this.getCurrentApp(this.$route);
  },

  watch: {
    $route: function(newVal, oldVal) {
      const newPath = newVal.path.split("/")[1];
      const oldPath = oldVal.path.split("/")[1];
      if (newPath !== oldPath) {
        this.getCurrentApp(newVal);
      }
    }
  },

  methods: {
    getCurrentApp(route) {
      const prePath = route.path.split("/")[1];
      this.currentApp = this.apps.includes(prePath) ? prePath : "main";
    },

    handleMenuClick({ key }) {
      const path = key === "main" ? "/" : "/" + key;
      this.currentApp = key;
      // 记录各app点击过的菜单
      const pathKey = this.appPathKey[this.currentApp];
      if (pathKey) {
        this.$router.push(pathKey);
      } else {
        this.$router.push(path);
      }
    },

    handleMenuChange({ key }) {
      this.$router.push(key);
      this.appPathKey[this.currentApp] = key;
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/layout.scss";
</style>
