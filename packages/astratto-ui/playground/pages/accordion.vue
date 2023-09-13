<script setup lang="ts">
const itemsDefault = [
  {
    title: 'Is there a free trial available?',
    content:
      'Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.'
  },
  {
    title: 'Can I change my plan later?',
    content:
      'Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.'
  },
  {
    title: 'What is your cancellation policy?',
    content:
      'We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.'
  },
  {
    title: 'Can other info be added to an invoice?',
    content:
      "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name."
  },
  {
    title: 'How does billing work?',
    content:
      'Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.'
  },
  {
    title: 'How do I change my account email?',
    content:
      'You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.'
  }
]

const itemsWithIcons = [
  {
    icon: 'heart',
    title: 'Is there a free trial available?',
    content:
      'Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.'
  },
  {
    icon: 'future',
    title: 'Can I change my plan later?',
    content:
      'Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.'
  },
  {
    icon: 'ban',
    title: 'What is your cancellation policy?',
    content:
      'We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.'
  },
  {
    icon: 'file-text',
    title: 'Can other info be added to an invoice?',
    content:
      "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name."
  },
  {
    icon: 'credit-card',
    title: 'How does billing work?',
    content:
      'Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.'
  },
  {
    icon: 'mail',
    title: 'How do I change my account email?',
    content:
      'You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.'
  }
]

const itemsWithOpenedItem = [
  {
    icon: 'heart',
    title: 'Is there a free trial available?',
    content:
      'Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.'
  },
  {
    icon: 'future',
    title: 'Can I change my plan later?',
    content:
      'Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.',
    open: true
  },
  {
    icon: 'ban',
    title: 'What is your cancellation policy?',
    content:
      'We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.'
  },
  {
    icon: 'file-text',
    title: 'Can other info be added to an invoice?',
    content:
      "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name."
  },
  {
    icon: 'credit-card',
    title: 'How does billing work?',
    content:
      'Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.'
  },
  {
    icon: 'mail',
    title: 'How do I change my account email?',
    content:
      'You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.'
  }
]

const itemsWithOpenedMulti = [
  {
    icon: 'heart',
    title: 'Is there a free trial available?',
    content:
      'Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.',
    open: true
  },
  {
    icon: 'future',
    title: 'Can I change my plan later?',
    content:
      'Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.',
    open: true
  },
  {
    icon: 'ban',
    title: 'What is your cancellation policy?',
    content:
      'We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.'
  },
  {
    icon: 'file-text',
    title: 'Can other info be added to an invoice?',
    content:
      "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name."
  },
  {
    icon: 'credit-card',
    title: 'How does billing work?',
    content:
      'Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.'
  },
  {
    icon: 'mail',
    title: 'How do I change my account email?',
    content:
      'You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.'
  }
]
</script>

<template>
  <AuSection>
    <AuContainer>
      <h3 class="uk-text-bold uk-heading-bullet">Default</h3>
      <AuAccordion id="accordion-default" :items="itemsDefault" />

      <h3 class="uk-text-bold uk-heading-bullet">Title Icon</h3>
      <AuAccordion id="accordion-with-icon" :items="itemsWithIcons" />

      <h3 class="uk-text-bold uk-heading-bullet">Custom Open/Close Icon</h3>
      <AuAccordion
        id="accordion-with-custom-icon"
        :items="itemsWithIcons"
        icon-close="chevron-up"
        icon-open="chevron-down"
      />

      <h3 class="uk-text-bold uk-heading-bullet">Open an Item</h3>
      <AuAccordion id="accordion-opened-item" :items="itemsWithOpenedItem" />

      <h3 class="uk-text-bold uk-heading-bullet">Multiple Items Open</h3>
      <AuAccordion
        id="accordion-opened-multi"
        multiple
        :items="itemsWithOpenedMulti"
      />

      <h3 class="uk-text-bold uk-heading-bullet">None Collapsible</h3>
      <AuAccordion
        id="accordion-collapsible"
        :collapsible="false"
        :items="itemsDefault"
      />

      <h3 class="uk-text-bold uk-heading-bullet">No Animation</h3>
      <AuAccordion
        id="accordion-no-animation"
        :animation="false"
        :items="itemsDefault"
      />

      <h3 class="uk-text-bold uk-heading-bullet">Animation Duration</h3>
      <AuAccordion
        id="accordion-animation-duration"
        :animation-duration="2000"
        :items="itemsDefault"
      />

      <h3 class="uk-text-bold uk-heading-bullet">Animation Transition</h3>
      <AuAccordion
        id="accordion-transition"
        transition="linear"
        :items="itemsDefault"
      />
    </AuContainer>
  </AuSection>
</template>
