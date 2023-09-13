<script setup lang="ts">
const { app } = useAppConfig()

// const squery = ref<string>('')

// // function handleSearch() {
// //   console.log(squery.value)
// // }
</script>

<template>
  <header class="app-header">
    <nav class="uk-navbar-container uk-navbar-transparent">
      <AuContainer size="xlarge" class="app-header-container">
        <div uk-navbar class="uk-navbar">
          <div class="uk-navbar-left">
            <NuxtLink to="/" class="uk-navbar-item uk-logo app-header-logo">
              <img src="/astratto-logo.svg" alt="app logo" width="150" />
            </NuxtLink>

            <ul class="uk-navbar-nav uk-visible@m">
              <li v-for="navItem in app.mainNavigation" :key="navItem.href">
                <NuxtLink
                  :to="navItem.href"
                  :target="navItem.target"
                  active-class="uk-active"
                  exact-active-class="uk-active"
                >
                  <AuIcon
                    :name="navItem.iconLeading"
                    class="uk-margin-small-right"
                  />
                  {{ navItem.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="uk-navbar-right">
            <div class="uk-navbar-item">
              <ul class="uk-iconnav app-header-nav-right">
                <li>
                  <AuIcon name="search" aria-label="open search"></AuIcon>
                </li>

                <li>
                  <AuIcon
                    name="paint-bucket"
                    aria-label="change theme color"
                  ></AuIcon>
                </li>

                <li class="uk-visible@m">
                  <AuIcon
                    tag="a"
                    :href="app.git.url"
                    target="_blank"
                    name="github"
                    aria-label="go to github"
                  >
                  </AuIcon>
                </li>
              </ul>
            </div>

            <div
              uk-navbar-toggle-icon
              class="uk-navbar-toggle uk-navbar-toggle-animate uk-icon uk-navbar-toggle-icon uk-hidden@m"
            ></div>
            <div uk-dropdown="mode: click" class="uk-hidden@m">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
      </AuContainer>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  &-container {
    border-bottom: 1px solid var(--au-global-color-muted);
  }
  &-logo {
    width: 145px;
  }
  &-nav-right {
    li > a,
    li > span {
      display: flex;
      align-items: center;
      column-gap: 0.25em;
      line-height: 0;
      text-decoration: none;
    }
  }
}
</style>
