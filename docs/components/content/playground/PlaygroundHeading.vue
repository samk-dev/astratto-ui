<script setup>
const sizes = ['small', 'medium', 'large', 'xlarge', '2xlarge']
</script>

<template>
  <AuSection>
    <AuContainer>
      <h1>Heading</h1>

      <div v-for="size in sizes" :key="size">
        <AuHeading as="h2" :size="size"> Heading {{ size }} </AuHeading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          aliquam, odit veniam corporis tempora officiis consectetur laborum
          sint animi accusamus magnam mollitia quo praesentium consequatur
          voluptas expedita, quidem quasi. Et.
        </p>
      </div>

      <div>
        <AuHeading as="h3" divider> Heading with divider </AuHeading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          laboriosam aperiam dolorum pariatur quis praesentium quisquam,
          blanditiis hic dignissimos enim odio quam voluptates. Possimus, quas!
          Ab laboriosam inventore facere vero!
        </p>
      </div>

      <div>
        <AuHeading as="h3" bullet> Heading with bullet </AuHeading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          laboriosam aperiam dolorum pariatur quis praesentium quisquam,
          blanditiis hic dignissimos enim odio quam voluptates. Possimus, quas!
          Ab laboriosam inventore facere vero!
        </p>
      </div>

      <div>
        <AuHeading as="h3" line> <span>Heading with line</span> </AuHeading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          laboriosam aperiam dolorum pariatur quis praesentium quisquam,
          blanditiis hic dignissimos enim odio quam voluptates. Possimus, quas!
          Ab laboriosam inventore facere vero!
        </p>
      </div>

      <div class="uk-text-right">
        <AuHeading as="h3" line> <span>Heading with line</span> </AuHeading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          laboriosam aperiam dolorum pariatur quis praesentium quisquam,
          blanditiis hic dignissimos enim odio quam voluptates. Possimus, quas!
          Ab laboriosam inventore facere vero!
        </p>
      </div>

      <div class="uk-text-center">
        <AuHeading as="h3" line> <span>Heading with line</span> </AuHeading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          laboriosam aperiam dolorum pariatur quis praesentium quisquam,
          blanditiis hic dignissimos enim odio quam voluptates. Possimus, quas!
          Ab laboriosam inventore facere vero!
        </p>
      </div>
    </AuContainer>
  </AuSection>
</template>
