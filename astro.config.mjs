import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
    site: 'https://brandoncreed.dev',
    integrations: [
        partytown({
            config: {
                forward: ["dataLayer.push"],
            }
        })
    ]
});
