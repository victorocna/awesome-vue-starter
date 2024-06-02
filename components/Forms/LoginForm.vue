<template>
  <div class="grid gap-4 mb-4">
    <Fieldset name="email" label="Your email">
      <Email id="email" name="email" autofocus />
    </Fieldset>

    <Fieldset name="password" label="Your password">
      <Password id="password" name="password" />
    </Fieldset>

    <Submit class="button full primary">Login</Submit>
  </div>
</template>
