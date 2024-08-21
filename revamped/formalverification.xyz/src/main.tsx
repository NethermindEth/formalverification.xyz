import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Theme } from '@radix-ui/themes';

// Import Fonts
import '@fontsource/dm-sans';
import '@fontsource/merriweather-sans';

// Radix UI Imports
import '@radix-ui/themes/styles.css';

//  Initial CSS
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme>
      <App />
    </Theme>
  </StrictMode>,
)
