// import { type PropsWithChildren } from 'react'

// import { useClientOnce } from '@/src/hooks/useClientOnce'
// import { useTelegramMock } from '@/src/hooks/useTelegramMock'

// import { telegramSDKInit } from './init'

// export function TelegramSDKInitProvider({ children }: PropsWithChildren) {
//  if (process.env.NODE_ENV === 'dev') {
//    useTelegramMock()
//  }

//  useClientOnce(() => {
//    telegramSDKInit(false)
//  })

//  return children
// }