import './init'

import { InputYamlFile, main } from '@/main'

main(new InputYamlFile(process.argv[2]), process.argv[3])

// (async () => {
//   await main(new InputYamlText('- !echo thanh', process.argv[2]))
//   console.log('here', context.tc)
// })()
