import { Grid } from '@geist-ui/core'
import { Action } from '../../components/Action'
import * as S from './styles'

const mock = {
  title: 'Entrada',
  cards: {
    title: 'Envio de email',
    cards: {
      title: 'Segmentação',
      cards: {
        title: 'Envio de email',
      },
    },
  },
}

const HomeTemplate = () => {
  return (
    <Grid.Container>
      <Grid xs={24} justify="center">
        <Grid xs={20}>
          <S.Container>
            <Action actionCards={mock} />
          </S.Container>
        </Grid>
      </Grid>
    </Grid.Container>
  )
}

export default HomeTemplate
