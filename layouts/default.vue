<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" disable-resize-watcher fixed app>
      <v-list>
        <v-list-item v-for="(menuItem, i) in menuItems" :key="i">
          <v-list-item-content>
            <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-container>
        <template v-if="showNavigationDrawerIcon">
          <v-row align="center">
            <v-app-bar-nav-icon
              v-if="showNavigationDrawerIcon"
              @click.stop="drawer = !drawer"
            />
            image
            <v-spacer />
            <v-btn>Contact Us</v-btn>
          </v-row>
        </template>
        <template v-else>
          <v-row align="center" justify="center" class="mx-2" dense>
            <v-col cols="auto">Image</v-col>
            <v-col v-for="(menuItem, i) in menuItems" :key="i" cols="auto">
              <v-btn>
                {{ menuItem.name }}
              </v-btn>
            </v-col>
            <v-spacer />
            <v-btn>Contact Us</v-btn>
          </v-row>
        </template>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "@nuxtjs/composition-api";
import { useVuetify } from "@/components/composables/vuetify";

interface MenuItem {
  name: string;
}

export default defineComponent({
  name: "Default",
  setup() {
    const { vuetify } = useVuetify();

    const drawer = ref(false);

    const showNavigationDrawerIcon = computed(
      () => vuetify.breakpoint.smAndDown
    );

    const menuItems: MenuItem[] = [
      {
        name: "Home",
      },
      { name: "About" },
      { name: "Find Out More" },
    ];

    return {
      menuItems,
      showNavigationDrawerIcon,
      drawer,
    };
  },
});
</script>
