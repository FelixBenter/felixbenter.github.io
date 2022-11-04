<template>
  <q-layout view="hHh lpr lfr">
    <q-header
      bordered
      class="bg-white text-primary"
      style="
        max-width: 800px;
        margin-left: auto;
        left: 24px;
        margin-right: auto;
        right: 24px;
      "
    >
      <q-toolbar class="q-pa-none">
        <q-toolbar-title v-if="$route.path != '/'" class="text-weight-medium">
          <router-link to="/" class="text-primary">Felix Benter</router-link>
        </q-toolbar-title>
        <q-toolbar-title v-if="$route.path == '/'" class="text-weight-medium">
          Felix Benter
        </q-toolbar-title>

        <q-item>
          <q-item-section class="text-caption text-weight-light">
            <q-item-label>
              <a href="mailto:felixbenter1@gmail.com" class="text-primary"
                >felixbenter1@gmail.com</a
              ></q-item-label
            >
            <q-item-label>
              <a
                href="https://www.linkedin.com/in/felix-benter-8a7157191/"
                class="text-primary"
                >LinkedIn</a
              >
              /
              <a href="https://github.com/FelixBenter" class="text-primary"
                >Github</a
              ></q-item-label
            >
          </q-item-section>
        </q-item>
      </q-toolbar>
    </q-header>

    <q-page-container
      class="row no-wrap q-mx-lg text-primary text-body1 text-weight-light"
      style="
        position: absolute;
        max-width: 800px;
        margin-left: auto;
        left: 24px;
        margin-right: auto;
        right: 24px;
      "
    >
      <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        appear
        :duration="300"
      >
        <RouterView />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "ResumePage",
  components: {},
  data() {
    return {};
  },
});
</script>
