/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        float1: 'float 10s ease-in-out infinite',
        float2: 'float 10s ease-in-out infinite 2s',
        float3: 'float 10s ease-in-out infinite 4s',
        float4: 'float 10s ease-in-out infinite 6s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(20px, -20px) scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
}

