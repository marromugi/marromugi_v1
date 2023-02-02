import { NEWT_SPACE_ID, NEWT_API_TOKEN } from '@/const/auth/newt'
import { createClient } from 'newt-client-js'
import { useCallback, useEffect, useState } from 'react'
import { UseNewtProps } from './type'

export const useNewt = <T>({ app, model, contentId }: UseNewtProps) => {
  const [contents, setContents] = useState<T[]>([])
  const client = createClient({
    spaceUid: NEWT_SPACE_ID,
    token: NEWT_API_TOKEN,
    apiType: 'cdn',
  })

  const fetchDate = useCallback(async () => {
    if (!!contentId) {
      const result = await client.getContent<T>({
        appUid: app,
        modelUid: model,
        contentId: contentId,
      })
      setContents([result])
    }
    if (!contentId) {
      const result = await client.getContents<T>({
        appUid: app,
        modelUid: model,
      })
      setContents(result.items)
    }
  }, [app, client, contentId, model])

  useEffect(() => {
    fetchDate()
  }, [fetchDate])

  return contents
}
