import { Set } from './Set'

export interface Training {
    Id: number
    Name: string,
    FinishDate: Date,
    Sets: Set[]
}