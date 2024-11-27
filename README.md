# LangChat Web SDK

A standalone chat widget that can be integrated into any website.

## Usage

### In Vue project

```shell
npm i @langchat/web-sdk
```

```vue
<script lang="ts" setup>
import {onMounted, ref} from 'vue'
import '@langchat/web-sdk/style.css'
import LangChatBot from '@langchat/web-sdk'

onMounted(() => {
  new LangChatBot({
    apiUrl: 'https://your-api-url/chat',
    token: 'your-api-token',
    layout: 'widget', // or 'fullpage'
    position: 'bottom-right', // or 'bottom-left'
    theme: {
      primary: '#3B82F6',
      secondary: '#1D4ED8'
    }
  });
})
</script>
```

### In Html project

1. Include the required files in your HTML:

```html
<link rel="stylesheet" href="https://path-to-your-cdn/style.css">
<script src="https://path-to-your-cdn/index.js"></script>
```

2. Initialize the chat widget:

```html
<script>
  new LangChatBot({
    apiUrl: 'https://your-api-url/chat',
    token: 'your-api-token',
    layout: 'widget', // or 'fullpage'
    position: 'bottom-right', // or 'bottom-left'
    theme: {
      primary: '#3B82F6',
      secondary: '#1D4ED8'
    }
  });
</script>
```

## Configuration Options

- `apiUrl` (optional): The URL for your chat API endpoint
- `token` (optional): Authentication token for API requests
- `layout`: 'widget' (floating chat) or 'fullpage' (centered chat page)
- `position`: 'bottom-right' or 'bottom-left' (only for widget layout)
- `theme`: Customize colors
  - `primary`: Primary color for buttons and accents
  - `secondary`: Secondary color for hover states