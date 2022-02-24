interface Ic {
    name?: string,
    age?: number,
    cardId: number | string
}

function sayPeople(): Ic {
    return {
        cardId: 21
    }
}
export default sayPeople;