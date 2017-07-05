import styled from 'styled-components'

import {
  getBrightness,
  darken,
} from './utils'


const PAYMENT_SYSTEM_LOGOS = {
  visa: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAYAAADskT9PAAADt0lEQVRIDcVVW0yUVxD+/n93f90FlkUKG1hQcFdXqSjBekEeSrRaazRpowZrX1oS29g0xntiNKY+8NCX+mDAu2n70hgTGymJaaOmolhrJMhNUFjuC0QEBZaFvfD/nhl2FxMg6YNZJ9nzz5mZc77vzJk5KzkLS/dDk4o1wIToiU/gNUvQDkjOwrNeTYMxethTSHMVfZv8vsCJRiA4kSlP8Ym+NqFqkLxer7iO9yf6MPR4x0NADfJUkvUwpGRDVmJ4HgiqqHrWx7pz/jz0DYxiaNQHW1Ic0pPj2P7a48OzzkEMC3usUcFKpxWKQcc+73gATcLnD0xghSMZxjkRWEQ0Q2ImRmuvY+S/S1C9AzAt2YLE7aW8wd3qLhwu+QeiaPDXzztwpPQuul+M4OQ365hAyfVq/HazAT4BEJZfjn+GnEXJEDWGPT/9jYa2l+wqOfQJ8rNt4bApArpYK8zr9uK2ZxXs7Wcgd4qMhOSPimbWNq/N5FP19Ht4vjA1Hrced+BiWS3b936egw8sRs6EIy2BYx7UuyPgZKhp6Z+ZAEeLYVmWHV/+XoDLawHrkBuDagIeNvSwu3DDErT3DUOlYwmx2yx41NjLuqKXUZCbDrqit+XqrSae5i1Lxb/1Pahv7X/bjWld4LAlIN4cgx+qPkZfpwtl91tA1brCkYSlC+bB1f2KN0iymBBnUrBh5QLEGA3wjAWw+8dynLryQOh+jmnrGcK92m6OO7jrI7bVuV5GDkCGaQQkCSC2I34dyp+bUFbp4oV0ehKX2JTEkWbhL2Xh1+NbsCYrhYnSdR07d499V+80cQ18ujoDdDBzjIIRrx8dvcPsp2EaATLmfZhCH1yraEWnSHmieS42rspgW6t7MgMLUycJkJHInD+6CV9tyuKYJ80vMCoyUh4iXylSv/tUuegClf31oYKkSaQL2BMa8penQRapGBgaY8vO9U4YxB2ThDNAJ6eCunCjBrmi5ahV74t0k9D8TwFO16LXyfCIU9OPsktS5+rHtnw76zMSsMTOEcWUgMaOQQbeUeDk4DFfEOEOsNvi0ep+jco6N/84QAy5i6048XUeiopvsun7L3JQtDWb9Yqabuw7fRu1gnhYZn0J3aLV6FFRFB3soXTTQ+ISoCSUAYNeh+ddg+gVDxMdLs0ax7GUjZZQsc63mrlIac24PwgqTJ3IyuL0yTadlQAtiIbou4ozooEzK4YMacZGmHXBO3VIsiaLRp18qt7pzv9zM01tlKGq3wJao1gSzb9lwnoqIL97A4rrbeeY3QMFAAAAAElFTkSuQmCC',
  mastercard: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAYAAADskT9PAAAEuUlEQVRIDb1WW2wbRRQ9u+tdv+JXbGedd+Ikbpw0tCIUQ6AQQJZQ1QgKFa0EEkIVQtAfKsQH4vEHf6D+kIo/UEEgUfFRqQoSoFLa0qa0Udo0L4GbEMd51HadrN9re5fZTdnESZr0B0Za7Z0759575s7MnaF2HOp/GzL1sQyY8P+1PIn3JwX5GOV7qT8FUOZ7xbYV03AVlqGXC8jQesxzTuRpdlO4mc2h3hKDkRWRL7KYTzuQyFVsir2rHNfdK/iudAjBxBBacxFQMuF7t5UoGhPGBpx29mDawKvaNkcEhzsuIOCZBMuU/oWiJNO4EW3C9xOP4dpCq6ZfI/hIBk6seicjHJnpkYUB7E6F1uA2ijJF4UxlAHxvCgd3XARFlbnZYPBreCc+HTwAUSJzXtPKejRkHJ07jfbMzBrI5qKSlV5uBF769rbBFQ+99Tdh4bL44PwrkCRac7oqEVVf7NJ9BVes43Ybqj0JZP9iUUyUudGcrxe6+RBe7TxbptYsK4tJBJeulQ1u1eFrl0EbJPVLDnOQV5d+KzMc8P0Ol1HQMBqBPUmygeSiNrCVELXZYWvMQOeQVj67BClHqSYUY9zKFHqmiGearmsYjUBH5m80vv4WHh04B35fH3qHJmHxd6KivQOMwQiDpwbWnbvA738e/mAQ+bAbVCmA9DgHKdmBwmw9qnpOou7ZK7C0vAbO3gXGWK1+OnMDaL0TOmMNGR9Ed3VYI6BtwsqCALO3FcVkEo5HHid/QQ1u7w6Qk0rBsSeA2LlfiCMDxFgUjc99hWImjehPA2h95z3EfjsFmdSM8JkusFYfrC1HYPQQovFB6CqaQbM2lHJRyGStXPq4RkDLgHICTM0tyEbC0FmsyM6GYe9+GMaGBlA0hdx8BKV0GqYmL4SR62ArnZBFEXo3j6WhqxDjCxCXbqiOOasfrMUHRl9JgnuRmvoGBWESyxOfoZAMgaZWN4yWgaTBRliyqtPMzBRZ0yxsDz6E1PgoCZzCnUsX4X46CNbugM5kQimbIUSG1YDJsZvIJ4bh6fsEjKmWpLoWojAGnbmRYBV5FLb2Y7D730UufhmxrE3LgFaIDgqDeMEpQBLzKAqCmmrO5Vb7JDkwVNcgOToCPc8jeScGR5sRek8jcpEQimkBRu807IEHQOnMKKZukcB1JN3KpmbIMlyBwd1DTkqOLMMivvyjDSdHn1JJaARqxRg+nPm6rOxqNNcJeYaFK5gGR6+cGpqTYe4srENt3pVA4c0fj2JacKsAbQ9EOBcGLf7NrdZp9aUCbl+wqAVILUJkj9xv+3lqtxZcsdEIKJ3v3L1Y5ByKuG3Tp0QsxB3gqiSY/eK2eAUwvczj86F9ZdgyAlly3R6vfRFKNrZryqkJzfGYsDZsB1XHby158P75l5ErcWV4xtm5/yOi0XKokLhsJYWF1qEuHyW348bqGGXtOOV+Aj+49uLsXBfiZFc32xZRweXKnCsdQTTh27EncfxqH5E3PDtKlO/QiXEymfYNlkTByBLaszPgxQQp0yXkaA7Teh4zhipionFWTZXruMMZhte2sPIgKekwm3RheLGZvAuYzdwrujHKd7h/LyTqC9JRSJR7VSD/TVMeD2Ti9Bv/ALHKtnf6q/muAAAAAElFTkSuQmCC',
}

const CARD_HEIGHT = 264 // 5398
const CARD_WIDTH = 420 // 8560
const BORDER_RADIUS = CARD_HEIGHT / 25
const STRIPE_HEIGHT = CARD_HEIGHT / 5
const X_MARGIN = CARD_WIDTH / 10
const Y_MARGIN = CARD_HEIGHT / 11

export const Root = styled.div`
  display: flex;
  & > * {
    background-color: ${({ color }) => color};
    border: 1px solid ${({ color }) => darken(color)};
  }
  color: ${({ color }) => getBrightness(color) > 0.5 ? 'black' : 'white'};
  width: ${CARD_WIDTH * 1.5}px;
  height: ${CARD_HEIGHT * (23 / 22)}px;
`

export const Card = styled.div`
  min-width: ${CARD_WIDTH}px;
  height: ${CARD_HEIGHT}px;
  border-radius: ${BORDER_RADIUS}px;
`

export const Front = styled(Card)`
  z-index: 1;
`

export const Back = styled(Card)`
  transform: translate3d(${-CARD_WIDTH / 2}px, ${CARD_HEIGHT / 22}px, 0px);
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
  height: ${STRIPE_HEIGHT}px;
`

export const Content = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  margin: ${X_MARGIN}px;
`

export const BackContent = styled.div`
  display: flex;
  margin-right: auto;
  margin: ${Y_MARGIN}px;
  margin-left: ${X_MARGIN}px;
  margin-right: ${X_MARGIN}px;
  margin-top: ${Y_MARGIN}px;
  margin-bottom: ${Y_MARGIN};
  flex-direction: column;
  align-items: flex-end;
`

export const Label = styled.label`
  font-size: 14px;
  margin-top: 50px;
`

export const FrontFooter = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PaymentSystemLogo = styled.div`
  width: 20%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: ${({ paymentSystem }) => `url('${PAYMENT_SYSTEM_LOGOS[paymentSystem]}')`};
`

export const BankName = styled.div`
  font-size: 20px;
  font-weight: 600;
`

export const Stripe = styled(Header)`
  background-color: ${({ color }) => darken(color)};
`
