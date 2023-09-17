<script setup lang="ts"></script>

<template>
  <AuSection>
    <AuContainer>
      <h1>Link</h1>

      <AuGrid class="uk-child-width-auto">
        <AuCard>
          <ul class="uk-list">
            <li><NuxtLink to="#">Link</NuxtLink></li>
            <li>
              <NuxtLink to="#" class="uk-link-muted">Link Muted</NuxtLink>
            </li>
            <li><NuxtLink to="#" class="uk-link-text">Link Text</NuxtLink></li>
            <li>
              <NuxtLink to="#" class="uk-link-heading">Link Heading</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="uk-link-reset">Link Reset</NuxtLink>
            </li>
          </ul>
        </AuCard>
        <div>
          <NuxtLink
            to="#"
            class="uk-display-block uk-card uk-card-body uk-card-muted uk-link-toggle uk-width-medium"
          >
            <h2 class="uk-h4">Link Toggle</h2>
            <ul class="uk-list">
              <li class="uk-link-muted">Link Muted</li>
              <li class="uk-link-text">Link Text</li>
              <li class="uk-link-heading">Link Heading</li>
            </ul>
          </NuxtLink>
        </div>
      </AuGrid>

      <h1>
        <NuxtLink to="#" class="uk-link-text">Heading with link text</NuxtLink>
      </h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <h1>
        <NuxtLink to="#" class="uk-link-heading"
          >Heading with link heading</NuxtLink
        >
      </h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <h1>
        <NuxtLink to="#" class="uk-link-reset"
          >Heading with link reset</NuxtLink
        >
      </h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </AuContainer>
  </AuSection>
</template>
