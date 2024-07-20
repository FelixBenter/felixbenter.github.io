<template>
  <q-layout view="hHh lpR fff" class="q-px-lg">
    <q-header
      :bordered="windowTop != 0.0"
      class="bg-white text-primary center-column"
    >
      <q-toolbar class="q-pa-none">
        <q-toolbar-title class="text-weight-medium">
          <router-link v-if="$route.path != '/'" to="/" class="text-primary"
            >Felix Benter</router-link
          >
          <div v-if="$route.path == '/'">Felix Benter</div>
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
                target="_blank"
                >LinkedIn</a
              >
              /
              <a
                href="https://github.com/FelixBenter"
                class="text-primary"
                target="_blank"
                >Github</a
              ></q-item-label
            >
          </q-item-section>
        </q-item>
      </q-toolbar>
    </q-header>

    <q-page-container
      class="row no-wrap q-mx-lg text-primary text-body1 text-weight-light center-column"
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

    <div style="height: 30px" />

    <q-footer class="center-column">
      <q-card square flat bordered>
        <q-card-section>
          <q-card-section>
            <q-card-actions class="q-px-none row justify-center q-gutter-y-sm">
              <q-btn
                v-for="link in links"
                :key="link"
                class="row"
                :class="$q.platform.is.mobile ? 'full-width' : ''"
                square
                outline
                color="primary"
                :label="link.title"
                :href="link.href"
                target="_blank"
              />
            </q-card-actions>
          </q-card-section>
        </q-card-section>
      </q-card>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "ResumePage",
  components: {},
  data() {
    return {
      windowTop: 0.0,
      links: [
        {
          title: "Email",
          href: "mailto:felixbenter1@gmail.com",
        },
        {
          title: "LinkedIn",
          href: "https://www.linkedin.com/in/felix-benter-8a7157191/",
        },
        {
          title: "Github",
          href: "https://github.com/FelixBenter",
        },
        {
          title: "resume",
          href: "Resume_2024.pdf",
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(e) {
      this.windowTop = window.top.scrollY;
    },
  },
  watch: {
    windowTop() {},
  },
});
</script>

<style>
.center-column {
  max-width: 800px;
  margin-left: auto;
  left: 24px;
  margin-right: auto;
  right: 24px;
}
</style>
