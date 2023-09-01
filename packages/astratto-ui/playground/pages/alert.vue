<template>
  <AuSection>
    <AuContainer>
      <AuAlert title="New software update available" />

      <AuAlert
        title="New products in our gift shop"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
        theme="primary"
        icon="happy"
      />

      <AuAlert
        title="Attention needed"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
        theme="warning"
        icon="info"
      />

      <AuAlert
        title="There were 2 errors with your submission"
        theme="danger"
        icon="ban"
      >
        <ul>
          <li>Your password must be at least 8 characters</li>
          <li>
            Your password must include at least one pro wrestling finishing move
          </li>
        </ul>
      </AuAlert>

      <AuAlert
        title="Order completed"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
        theme="success"
        icon="check"
      />
    </AuContainer>
  </AuSection>
</template>
