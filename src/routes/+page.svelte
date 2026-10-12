<script lang="ts">
    import Contact from '#lib/Contact.svelte'
    import Subtitle from '#lib/Subtitle.svelte'
    import Title from '#lib/Title.svelte'
</script>

<svelte:head>
    <title>Simon Aunér - auner.se</title>
</svelte:head>

<main class="main">
    <div>
        <Title>www.auner.se</Title>
        <Subtitle>Simon Aunér</Subtitle>
        <Contact />
    </div>
</main>

<style>
    .main {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
