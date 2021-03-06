import { IFinance } from '../../models/index.js';

export type FinanceInput = {
    amount: number;
    description: string;
    category: number;
};

export interface IFinanceService {
    addFinance(financeInput: FinanceInput): Promise<IFinance>;
    findAllFinance(): Promise<IFinance[]>;
    findFinanceById(id: number): Promise<IFinance | null>;
    updateFinance(id: number, finace: FinanceInput): Promise<IFinance>;
    deleteFinance(id: number): Promise<IFinance>;
}
