import { Card } from '@geist-ui/core'

type Card = {
  title: string
  cards?: Card
}

type ActionProps = {
  actionCards: Card
}

export const Action = ({ actionCards }: ActionProps) => {
  return (
    <>
      <Card height="100px" width="200px">
        <h1>{actionCards.title}</h1>
      </Card>

      {actionCards.cards && <Action actionCards={actionCards.cards} />}
    </>
  )
}
