<script setup lang="ts"></script>

<template>
  <AuSection>
    <AuContainer>
      <AuGrid class="uk-child-width-1-3@s uk-text-center" gap="small" masonry>
        <div>
          <AuCard style="border: 1px solid var(--au-global-color-muted)">
            <p>
              Content Slot, amet consectetur adipisicing elit. Mollitia
              veritatis ea enim ullam fugit impedit quam quibusdam ducimus
              tempore eos ut, deserunt perferendis. Praesentium nisi quaerat
              molestiae? Quasi, sequi molestiae.
            </p>
          </AuCard>
        </div>

        <div>
          <AuCard style="border: 1px solid var(--au-global-color-muted)">
            <template #header> Header Slot </template>
          </AuCard>
        </div>

        <div>
          <AuCard style="border: 1px solid var(--au-global-color-muted)">
            <template #footer> <p>Footer Slot</p> </template>
          </AuCard>
        </div>

        <div>
          <AuCard style="border: 1px solid var(--au-global-color-muted)">
            <p>
              "Clear thinking at the wrong moment can stifle creativity." -
              <small>Karl Lagerfeld</small>
            </p>
          </AuCard>
        </div>

        <div>
          <AuCard style="border: 1px solid var(--au-global-color-muted)">
            <template #header>
              <h3>
                Clear thinking at the wrong moment can stifle inspiration. -
                <small>Karl Lagerfeld</small>
              </h3>
            </template>
          </AuCard>
        </div>

        <div>
          <AuCard style="border: 1px solid var(--au-global-color-muted)">
            <AuIcon name="quote-right" :ratio="2" />
            <p class="uk-margin-small-top">
              Clear thinking at the wrong moment can stifle imagination.
            </p>

            <template #footer> <p>Karl Lagerfeld</p> </template>
          </AuCard>
        </div>

        <div>
          <AuCard
            theme="primary"
            badge-text="Badge"
            style="border: 1px solid var(--au-global-color-muted)"
          >
            <template #header> <h3>Primary Kitchen Sink</h3> </template>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              soluta officiis accusantium iure architecto? Ipsum nesciunt,
              soluta, a nemo quaerat, iste deserunt labore est animi itaque iure
              nostrum laudantium architecto.
            </p>

            <template #footer> <p>Footer</p> </template>
          </AuCard>
        </div>

        <div>
          <AuCard
            badge-text="Badge"
            theme="secondary"
            style="border: 1px solid var(--au-global-color-muted)"
          >
            <template #header> <h3>Secondary Kitchen Sink</h3> </template>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              soluta officiis accusantium iure architecto? Ipsum nesciunt,
              soluta, a nemo quaerat, iste deserunt labore est animi itaque iure
              nostrum laudantium architecto.
            </p>

            <template #footer> <p>Footer</p> </template>
          </AuCard>
        </div>

        <div>
          <AuCard
            badge-text="Badge"
            theme="muted"
            style="border: 1px solid var(--au-global-color-muted)"
          >
            <template #header> <h3>Muted Kitchen Sink</h3> </template>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              soluta officiis accusantium iure architecto? Ipsum nesciunt,
              soluta, a nemo quaerat, iste deserunt labore est animi itaque iure
              nostrum laudantium architecto.
            </p>

            <template #footer> <p>Footer</p> </template>
          </AuCard>
        </div>

        <div>
          <AuCard
            badge-text="Badge"
            theme="default"
            style="border: 1px solid var(--au-global-color-muted)"
          >
            <template #header> <h3>Default Kitchen Sink</h3> </template>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              soluta officiis accusantium iure architecto? Ipsum nesciunt,
              soluta, a nemo quaerat, iste deserunt labore est animi itaque iure
              nostrum laudantium architecto.
            </p>

            <template #footer> <p>Footer</p> </template>
          </AuCard>
        </div>

        <div>
          <AuCard
            badge-text="Badge"
            theme="default"
            size="small"
            style="border: 1px solid var(--au-global-color-muted)"
          >
            <template #header> <h3>Default Small Kitchen Sink</h3> </template>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              soluta officiis accusantium iure architecto? Ipsum nesciunt,
              soluta, a nemo quaerat, iste deserunt labore est animi itaque iure
              nostrum laudantium architecto.
            </p>

            <template #footer> <p>Footer</p> </template>
          </AuCard>
        </div>

        <div>
          <AuCard
            badge-text="Badge"
            theme="default"
            size="large"
            style="border: 1px solid var(--au-global-color-muted)"
          >
            <template #header> <h3>Default Large Kitchen Sink</h3> </template>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              soluta officiis accusantium iure architecto? Ipsum nesciunt,
              soluta, a nemo quaerat, iste deserunt labore est animi itaque iure
              nostrum laudantium architecto.
            </p>

            <template #footer> <p>Footer</p> </template>
          </AuCard>
        </div>
      </AuGrid>
    </AuContainer>
  </AuSection>
</template>
