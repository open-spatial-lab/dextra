import { makeViteConfig } from '../../utils/viteUtils'

export default makeViteConfig({
  entry: 'src/CoreBundle.ts',
  excludeDeps: []
})
