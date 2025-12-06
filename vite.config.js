import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  // adding backend proxy
  // server : {
  //   proxy :{
  //     'api/':{
  //       target:"BASE URI" || http://localhost:3000
  //     }
  //   }
  // },
  plugins: [react(), tailwindcss()],
})

