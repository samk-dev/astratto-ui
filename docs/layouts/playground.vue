<script setup lang="ts">
const { navigation, page /* surround, globals */ } = useContent()
console.log({
  navigation: navigation.value,
  page: page.value
})

const nav = computed(() => {
  // TODO: explicit return
  // eslint-disable-next-line array-callback-return
  const navPlayground = navigation.value.filter((el: any) => {
    if (el._path === '/playground') {
      return el.children
    }
  })

  return navPlayground[0].children
})

console.log(nav.value)
</script>

<template>
  <div>
    <div>
      <AuContainer>
        <div class="uk-inline">
          <ul>
            <li v-for="parent in nav" :key="parent._path">
              {{ parent.title }}

              <ul>
                <li v-for="navItem in parent.children" :key="navItem._path">
                  <NuxtLink :to="navItem._path">{{ navItem.title }}</NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </AuContainer>
    </div>
    <slot />
  </div>
</template>
