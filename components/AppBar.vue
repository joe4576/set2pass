<script setup lang="ts">
interface MenuItem {
  text: string;
  to: string;
  icon?: string;
  subMenuItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    text: "How to Start",
    to: "/how-to-start",
    icon: "mdi-help",
  },
  {
    text: "Pricing",
    to: "/pricing",
    icon: "mdi-cash-multiple",
  },
  {
    text: "BlackBox",
    to: "/blackbox",
    icon: "mdi-cellphone",
    subMenuItems: [
      {
        text: "Privacy Policy",
        to: "/blackbox/privacy-policy",
        icon: "mdi-calendar-question-outline",
      },
    ],
  },
  {
    text: "Terms",
    to: "/terms",
    icon: "mdi-newspaper-variant-outline",
  },

  {
    text: "Contact",
    to: "/contact",
    icon: "mdi-phone",
  },
];

const { mdAndUp: showFullMenu } = useVuetifyBreakpoints();

const showNavigationDrawer = ref(false);

watch(showFullMenu, () => {
  // close the nav draw when changing between breakpoints
  showNavigationDrawer.value = false;
});
</script>

<template>
  <v-app-bar>
    <v-container class="max-width">
      <v-row class="align-center">
        <v-col cols="auto">
          <nuxt-link to="/" class="d-flex">
            <img
              src="/img/set2pass.webp"
              style="width: 175px"
              alt="Set2Pass Logo"
            />
          </nuxt-link>
        </v-col>
        <v-spacer />
        <v-col v-if="showFullMenu" cols="auto">
          <template v-for="(item, i) in menuItems">
            <v-btn
              v-if="!item.subMenuItems"
              :key="item.text"
              class="mx-1"
              :to="item.to"
            >
              {{ item.text }}
            </v-btn>
            <v-menu
              v-else
              :key="i"
              open-on-hover
              close-on-content-click
              :open-delay="0"
            >
              <template #activator="{ props }">
                <v-btn v-bind="props" :key="item.text" :to="item.to">
                  {{ item.text }}
                </v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="subMenu in item.subMenuItems"
                  :key="subMenu.to"
                  :to="subMenu.to"
                >
                  <v-list-item-title>{{ subMenu.text }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
        </v-col>
        <v-col v-else cols="auto">
          <v-btn icon @click="showNavigationDrawer = !showNavigationDrawer">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
  <!-- Show navigation draw for mobile view only -->
  <v-navigation-drawer
    v-model="showNavigationDrawer"
    location="right"
    disable-resize-watcher
  >
    <v-list aria-label="Navigate the Set2Pass website">
      <!-- Include a home item, regardless of menuItems -->
      <v-list-item role="option" to="/" prepend-icon="mdi-home">
        Home
      </v-list-item>
      <template v-for="(item, i) in menuItems">
        <v-list-item
          v-if="!item.subMenuItems"
          :key="item.to"
          role="option"
          :to="item.to"
          :prepend-icon="item.icon"
        >
          {{ item.text }}
        </v-list-item>
        <!-- Create a list group if the menu item has a subMenu -->
        <v-list-group v-else :key="i" :value="item.text" role="presentation">
          <template #activator="{ props }">
            <!-- The activator is the original menu item -->
            <v-list-item v-bind="props" role="option" :prepend-icon="item.icon">
              {{ item.text }}
            </v-list-item>
          </template>
          <!-- First item in the dropdown will be the activator repeated -->
          <v-list-item :to="item.to" role="option" :prepend-icon="item.icon">
            {{ item.text }}
          </v-list-item>
          <v-list-item
            v-for="subMenu in item.subMenuItems"
            :key="subMenu.to"
            :to="subMenu.to"
            role="option"
            :prepend-icon="subMenu.icon"
          >
            {{ subMenu.text }}
          </v-list-item>
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
