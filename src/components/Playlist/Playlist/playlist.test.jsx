import React from 'react'
import Playlist from './Playlist'
import { setupApiStore } from '../../../utils/reduxQueryTest-utils'
import { musicApi } from '../../../api/musicApi'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { render, screen } from '@testing-library/react'
// имитируем данные
const allTracks = [
    {
      id: 8,
      name: 'Chase',
      author: 'Alexander Nakarada',
      release_date: '2005-06-11',
      genre: 'Классическая музыка',
      duration_in_seconds: 205,
      album: 'Chase',
      logo: null,
      track_file:
        'https://painassasin.online/media/music_files/Alexander_Nakarada_-_Chase.mp3',
      stared_user: [
        {
          id: 1,
          username: 'test',
          first_name: '',
          last_name: '',
          email: 'test@example.ru',
        },
      ],
    },
  ]
  
  // Описываем endpoint-ы, которые хотим замокировать
  export const handlers = [
    rest.get('https://painassasin.online/catalog/track/all', (req, res, ctx) => {
      return res(ctx.json(allTracks))
    }),
  ]
  
  const server = setupServer(...handlers)
  const storeRef = setupApiStore(musicApi)
  
  describe('MusicList feature', () => {
    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())
  
    it('should show playlist', async () => {
      render(<Playlist />, { wrapper: storeRef.wrapper })
  
      // Ищем в списке текст Chase, который совпадает с названием трека
      expect(screen.findAllByText('Chase')).toBeTruthy()
    })
  })


