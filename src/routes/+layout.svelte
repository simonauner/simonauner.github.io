<script lang="ts">
    import 'bootstrap/dist/css/bootstrap.min.css'
    import 'bootstrap-icons/font/bootstrap-icons.min.css'
    import type { LayoutProps } from './$types'

    let { children }: LayoutProps = $props()
</script>

{@render children()}
