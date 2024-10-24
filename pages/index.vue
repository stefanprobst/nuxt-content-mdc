<script setup lang="ts">
const sections = [
  "## First section\n\nSome **bold** text.",
  "## Second section\n\nSome more **bold** text.",
];

const { data } = await useAsyncData("sections", () => {
  return Promise.all(
    sections.map((content) => {
      return $fetch("/api/parse-mdc", {
        method: "POST",
        body: { content },
      });
    })
  );
});
</script>

<template>
	<section v-for="ast of data">
		<MDCRenderer :body="ast.body" :data="ast.data" />
	</section>
</template>
