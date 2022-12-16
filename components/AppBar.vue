<script setup lang="ts">
import { useDisplay } from "vuetify/lib/framework.mjs";

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
    text: "Terms",
    to: "/terms",
    icon: "mdi-newspaper-variant-outline",
  },
  {
    text: "Contact",
    to: "/contact",
    icon: "mdi-phone",
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
];

// setting this to true does some weird things with hydration, breaks all other
// useDisplay() usages with lots of unintelligible errors. leave as false
const showFullMenu = ref(false);
const showNavigationDrawer = ref(false);
const { mdAndUp } = useDisplay();

const updateShowFullMenu = () => {
  showFullMenu.value = mdAndUp.value;
  // close the nav draw when changing between breakpoints
  showNavigationDrawer.value = false;
};

// force close navigation drawer
watch(showNavigationDrawer, () => {
  if (mdAndUp.value) {
    showNavigationDrawer.value = false;
  }
});

watch(mdAndUp, updateShowFullMenu);
onMounted(updateShowFullMenu);
</script>

<template>
  <v-app-bar>
    <v-container>
      <v-row class="align-center">
        <v-col cols="auto">
          <nuxt-link to="/">
            <v-img src="/img/set2pass.png" width="175px" eager />
          </nuxt-link>
        </v-col>
        <v-spacer />
        <v-col v-if="showFullMenu" cols="auto">
          <template v-for="(item, i) in menuItems">
            <v-btn v-if="!item.subMenuItems" :key="item.text" :to="item.to">
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
  <!-- Show bottom navigation draw for mobile view only -->
  <v-navigation-drawer v-model="showNavigationDrawer" location="bottom">
    <v-list>
      <!-- Include a home item, regardless of menuItems -->
      <v-list-item to="/" prepend-icon="mdi-home">Home</v-list-item>
      <template v-for="(item, i) in menuItems">
        <v-list-item
          v-if="!item.subMenuItems"
          :key="item.to"
          :to="item.to"
          :prepend-icon="item.icon"
        >
          {{ item.text }}
        </v-list-item>
        <!-- Create a list group if the menu item has a subMenu -->
        <v-list-group v-else :key="i" :value="item.text">
          <template #activator="{ props }">
            <!-- The activator is the original menu item -->
            <v-list-item v-bind="props" :prepend-icon="item.icon">
              {{ item.text }}
            </v-list-item>
          </template>
          <!-- First item in the dropdown will be the activator repeated -->
          <v-list-item :to="item.to" :prepend-icon="item.icon">
            {{ item.text }}
          </v-list-item>
          <v-list-item
            v-for="subMenu in item.subMenuItems"
            :key="subMenu.to"
            :to="subMenu.to"
            :prepend-icon="subMenu.icon"
          >
            {{ subMenu.text }}
          </v-list-item>
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
