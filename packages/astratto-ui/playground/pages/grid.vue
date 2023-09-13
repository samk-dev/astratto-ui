<template>
  <div>
    <AuSection>
      <AuContainer>
        <h3>default grid</h3>
        <AuGrid>
          <div v-for="item in 8" :key="item" class="uk-width-1-4@s">
            <div class="uk-background-muted uk-height-small">
              col {{ item }}
            </div>
          </div>
        </AuGrid>
      </AuContainer>
    </AuSection>

    <AuSection>
      <AuContainer>
        <h3>gap small</h3>
        <AuGrid gap="small">
          <div v-for="item in 8" :key="item" class="uk-width-1-4@s">
            <div class="uk-background-muted uk-height-small">
              col {{ item }}
            </div>
          </div>
        </AuGrid>
      </AuContainer>
    </AuSection>

    <AuSection>
      <AuContainer>
        <h3>gap medium</h3>
        <AuGrid gap="medium">
          <div v-for="item in 8" :key="item" class="uk-width-1-4@s">
            <div class="uk-background-muted uk-height-small">
              col {{ item }}
            </div>
          </div>
        </AuGrid>
      </AuContainer>
    </AuSection>

    <AuSection>
      <AuContainer>
        <h3>gap large</h3>
        <AuGrid gap="large">
          <div v-for="item in 8" :key="item" class="uk-width-1-4@s">
            <div class="uk-background-muted uk-height-small">
              col {{ item }}
            </div>
          </div>
        </AuGrid>
      </AuContainer>
    </AuSection>

    <AuSection>
      <AuContainer>
        <h3>gap collapse</h3>
        <small>border added addtionally</small>
        <AuGrid gap="collapse">
          <div v-for="item in 8" :key="item" class="uk-width-1-4@s">
            <div
              class="uk-background-muted uk-height-small"
              style="border: 1px solid black"
            >
              col {{ item }}
            </div>
          </div>
        </AuGrid>
      </AuContainer>
    </AuSection>

    <AuSection>
      <AuContainer>
        <h3>nested grids</h3>
        <AuGrid class="uk-child-width-1-2 uk-text-center">
          <div>
            <div class="uk-background-muted uk-height-small">Item</div>
          </div>

          <div>
            <AuGrid class="uk-child-width-1-2 uk-text-center">
              <div>
                <div
                  class="uk-background-primary uk-height-small uk-text-light"
                >
                  Item
                </div>
              </div>
              <div>
                <div
                  class="uk-background-secondary uk-height-small uk-text-light"
                >
                  Item
                </div>
              </div>
            </AuGrid>
          </div>
        </AuGrid>
      </AuContainer>
    </AuSection>

    <AuSection>
      <AuContainer>
        <h3>match height</h3>
        <AuGrid match-height>
          <div class="uk-width-1-4@s">
            <div class="uk-background-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              iusto cum aliquid aspernatur velit consequuntur deserunt sint
              maxime accusantium rem quam nostrum maiores quo tempora soluta a!
              Enim, debitis maiores?
            </div>
          </div>

          <div class="uk-width-1-4@s">
            <div class="uk-background-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>

          <div class="uk-width-1-4@s">
            <div class="uk-background-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              iusto cum aliquid aspernatur velit consequuntur deserunt.
            </div>
          </div>

          <div class="uk-width-1-4@s">
            <div class="uk-background-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              iusto cum aliquid aspernatur velit consequuntur deserunt sint
              maxime accusantium rem quam nostrum maiores quo tempora soluta a!
              Enim, debitis maiores?
            </div>
          </div>
        </AuGrid>
      </AuContainer>
    </AuSection>

    <AuSection>
      <AuContainer>
        <h3>masonry</h3>
        <AuGrid masonry>
          <div class="uk-width-1-3@s">
            <div class="uk-background-muted" style="height: 100px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              iusto cum aliquid aspernatur velit consequuntur deserunt sint
            </div>
          </div>

          <div class="uk-width-1-3@s">
            <div class="uk-background-muted" style="height: 130px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>

          <div class="uk-width-1-3@s">
            <div class="uk-background-muted" style="height: 150px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              iusto cum aliquid aspernatur velit consequuntur deserunt.
            </div>
          </div>

          <div class="uk-width-1-3@s">
            <div class="uk-background-muted" style="height: 160px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              iusto cum aliquid aspernatur velit consequuntur deserunt sint
              maxime accusantium rem quam nostrum maiores quo tempora soluta a!
              Enim, debitis maiores?
            </div>
          </div>

          <div class="uk-width-1-3@s">
            <div class="uk-background-muted" style="height: 120px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              iusto cum aliquid aspernatur velit consequuntur deserunt sint
            </div>
          </div>

          <div class="uk-width-1-3@s">
            <div class="uk-background-muted" style="height: 140px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>

          <div class="uk-width-1-3@s">
            <div class="uk-background-muted" style="height: 200px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              iusto cum aliquid aspernatur velit consequuntur deserunt.
            </div>
          </div>

          <div class="uk-width-1-3@s">
            <div class="uk-background-muted" style="height: 180px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              iusto cum aliquid aspernatur velit consequuntur deserunt sint
              maxime accusantium rem quam nostrum maiores quo tempora soluta a!
              Enim, debitis maiores?
            </div>
          </div>
        </AuGrid>
      </AuContainer>
    </AuSection>

    <AuSection>
      <AuContainer>
        <h3>parallax</h3>
        <AuGrid :parallax="150">
          <div v-for="item in 8" :key="item" class="uk-width-1-4@s">
            <div class="uk-background-muted uk-height-small">
              col {{ item }}
            </div>
          </div>
        </AuGrid>
      </AuContainer>
    </AuSection>
  </div>
</template>
