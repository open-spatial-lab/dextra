import { makeViteConfig } from '../utils/viteUtils'

export default makeViteConfig({
  entry: 'src/FullBundle.ts',
  excludeDeps: []
})
