import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Esto permite que otras máquinas (como tu teléfono) se conecten
    port: 5173,        // El puerto sigue siendo el 5173 (o el que prefieras)
  },
});
