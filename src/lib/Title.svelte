<script lang="ts">
    import type { Snippet } from 'svelte'

    let { children }: { children: Snippet } = $props()
</script>

<h1 class="title">{@render children()}</h1>

<style>
    .title {
        font-weight: 700;
        font-size: 2.83rem;
        margin-bottom: 0rem;
    }

    @media (min-width: 476px) {
        .title {
            font-size: 3.1rem;
        }
    }

    @media (min-width: 768px) {
        .title {
            font-size: 5.66rem;
        }
    }

    @media (min-width: 1200px) {
        .title {
            font-size: 7.66rem;
        }
    }

    @media (min-width: 1600px) {
        .title {
            font-size: 9.66rem;
        }
    }
</style>
