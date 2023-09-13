<template>
  <div>
    <AuSection>
      <AuContainer>
        <h3>default grid</h3>
        <AuGrid>
          <div v-for="item in 8" :key="item" class="uk-width-1-4@s">
            <AuCard theme="muted"> col {{ item }} </AuCard>
          </div>
        </AuGrid>
      </AuContainer>
    </AuSection>

    <AuSection>
      <AuContainer>
        <h3>gap small</h3>
        <AuGrid gap="small">
          <div v-for="item in 8" :key="item" class="uk-width-1-4@s">
            <AuCard theme="muted"> col {{ item }} </AuCard>
          </div>
        </AuGrid>
      </AuContainer>
    </AuSection>

    <AuSection>
      <AuContainer>
        <h3>gap medium</h3>
        <AuGrid gap="medium">
          <div v-for="item in 8" :key="item" class="uk-width-1-4@s">
            <AuCard theme="muted"> col {{ item }} </AuCard>
          </div>
        </AuGrid>
      </AuContainer>
    </AuSection>

    <AuSection>
      <AuContainer>
        <h3>gap large</h3>
        <AuGrid gap="large">
          <div v-for="item in 8" :key="item" class="uk-width-1-4@s">
            <AuCard theme="muted"> col {{ item }} </AuCard>
          </div>
        </AuGrid>
      </AuContainer>
    </AuSection>

    <AuSection>
      <AuContainer>
        <h3>gap collapse</h3>
        <small>border added addtionally for visual representation</small>
        <AuGrid gap="collapse">
          <div v-for="item in 8" :key="item" class="uk-width-1-4@s">
            <AuCard theme="muted" style="border: 1px solid black">
              col {{ item }}
            </AuCard>
          </div>
        </AuGrid>
      </AuContainer>
    </AuSection>

    <AuSection>
      <AuContainer>
        <h3>nested grids</h3>
        <AuGrid class="uk-child-width-1-2 uk-text-center">
          <div>
            <AuCard theme="muted">col</AuCard>
          </div>

          <div>
            <AuGrid class="uk-child-width-1-2 uk-text-center">
              <div>
                <AuCard theme="primary"> col </AuCard>
              </div>
              <div>
                <AuCard theme="secondary"> col </AuCard>
              </div>
            </AuGrid>
          </div>
        </AuGrid>
      </AuContainer>
    </AuSection>

    <AuSection>
      <AuContainer>
        <h3>gap Divider</h3>
        <AuGrid divider>
          <div v-for="item in 8" :key="item" class="uk-width-1-4@s">
            <AuCard theme="muted"> col {{ item }} </AuCard>
          </div>
        </AuGrid>
      </AuContainer>
    </AuSection>

    <AuSection>
      <AuContainer>
        <h3>gap divider with gap = collapse</h3>
        <AuGrid divider gap="collapse">
          <div v-for="item in 8" :key="item" class="uk-width-1-4@s">
            <AuCard theme="muted"> col {{ item }} </AuCard>
          </div>
        </AuGrid>
      </AuContainer>
    </AuSection>

    <AuSection>
      <AuContainer>
        <h3>match height</h3>
        <AuGrid match-height>
          <div class="uk-width-1-4@s">
            <AuCard theme="muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              iusto cum aliquid aspernatur velit consequuntur deserunt sint
              maxime accusantium rem quam nostrum maiores quo tempora soluta a!
              Enim, debitis maiores?
            </AuCard>
          </div>

          <div class="uk-width-1-4@s">
            <AuCard theme="muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </AuCard>
          </div>

          <div class="uk-width-1-4@s">
            <AuCard theme="muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              iusto cum aliquid aspernatur velit consequuntur deserunt.
            </AuCard>
          </div>

          <div class="uk-width-1-4@s">
            <AuCard theme="muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              iusto cum aliquid aspernatur velit consequuntur deserunt sint
              maxime accusantium rem quam nostrum maiores quo tempora soluta a!
              Enim, debitis maiores?
            </AuCard>
          </div>
        </AuGrid>
      </AuContainer>
    </AuSection>

    <AuSection>
      <AuContainer>
        <h3>masonry</h3>
        <AuGrid masonry>
          <div class="uk-width-1-3@s">
            <AuCard theme="muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              iusto cum aliquid aspernatur velit consequuntur deserunt sint
            </AuCard>
          </div>

          <div class="uk-width-1-3@s">
            <AuCard theme="muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </AuCard>
          </div>

          <div class="uk-width-1-3@s">
            <AuCard theme="muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              iusto cum aliquid aspernatur velit consequuntur deserunt.
            </AuCard>
          </div>

          <div class="uk-width-1-3@s">
            <AuCard theme="muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              iusto cum aliquid aspernatur velit consequuntur deserunt sint
              maxime accusantium rem quam nostrum maiores quo tempora soluta a!
              Enim, debitis maiores?
            </AuCard>
          </div>

          <div class="uk-width-1-3@s">
            <AuCard theme="muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              iusto cum aliquid aspernatur velit consequuntur deserunt sint
            </AuCard>
          </div>

          <div class="uk-width-1-3@s">
            <AuCard theme="muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </AuCard>
          </div>

          <div class="uk-width-1-3@s">
            <AuCard theme="muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              iusto cum aliquid aspernatur velit consequuntur deserunt.
            </AuCard>
          </div>

          <div class="uk-width-1-3@s">
            <AuCard theme="muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              iusto cum aliquid aspernatur velit consequuntur deserunt sint
              maxime accusantium rem quam nostrum maiores quo tempora soluta a!
              Enim, debitis maiores?
            </AuCard>
          </div>
        </AuGrid>
      </AuContainer>
    </AuSection>

    <AuSection>
      <AuContainer>
        <h3>parallax</h3>
        <AuGrid :parallax="150">
          <div v-for="item in 8" :key="item" class="uk-width-1-4@s">
            <AuCard theme="muted"> col {{ item }} </AuCard>
          </div>
        </AuGrid>
      </AuContainer>
    </AuSection>
  </div>
</template>
