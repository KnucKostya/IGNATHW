import React from 'react'
import up from '../../icons/up.png'
import down from '../../icons/down.png'
import doubleArrows from '../../icons/doublearrows.png'
import s from './sort.module.css'

// добавить в проект иконки и импортировать
const downIcon = down
const upIcon = up
const noneIcon = doubleArrows

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {

    return sort === down ? up : sort === up ? '' : down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {

    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img
                id={id + '-icon-' + sort}
                src={icon}
                className={s.icon}
            />
        </span>
    )
}

export default SuperSort
