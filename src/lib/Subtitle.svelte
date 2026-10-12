<script lang="ts">
    import type { Snippet } from 'svelte'

    let { children }: { children: Snippet } = $props()
</script>

<p class="subtitle">{@render children()}</p>

<style>
    .subtitle {
        margin-top: 0rem;
        font-size: 1.75rem;
        font-weight: 300;
    }

    @media (min-width: 476px) {
        .subtitle {
            font-size: 1.9rem;
        }
    }

    @media (min-width: 768px) {
        .subtitle {
            font-size: 3.5rem;
        }
    }

    @media (min-width: 1200px) {
        .subtitle {
            font-size: 4.7rem;
        }
    }

    @media (min-width: 1600px) {
        .subtitle {
            font-size: 5.97rem;
        }
    }
</style>
