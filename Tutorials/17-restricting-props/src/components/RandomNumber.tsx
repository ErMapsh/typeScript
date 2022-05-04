import React from 'react'
type RandomNumber = {
    value: number
}

type positiveNumber = RandomNumber & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}

type negativeNumber = RandomNumber & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}

type zeroNumber = RandomNumber & {
    isZero: boolean
    isPositive?: never
    isNegative?: never
}

type RandomNumberProps = positiveNumber | negativeNumber | zeroNumber

export const RandomNumber = ({ value, isPositive, isNegative, isZero, }: RandomNumberProps) => {
    return (
        <div>
            {value} {isPositive && 'positive'} {isNegative && 'negative'}{' '}
            {isZero && 'zero'}
        </div>
    )
}
