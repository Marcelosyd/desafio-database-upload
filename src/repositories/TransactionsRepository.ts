import { EntityRepository, Repository, getRepository } from 'typeorm';

import Transaction from '../models/Transaction';
import Category from '../models/Category';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface TransactionDTO {
  id: string;
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: {
    id?: string;
    title?: string;
  };
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async all(): Promise<TransactionDTO[]> {
    const transactions = await this.find();
    const transactionsDTO: TransactionDTO[] = [];

    await transactions.reduce(async (promise, transaction) => {
      await promise;
      const categoryRepository = getRepository(Category);
      const category = await categoryRepository.findOne(
        transaction.category_id,
      );

      transactionsDTO.push({
        id: transaction.id,
        title: transaction.title,
        value: Number(transaction.value),
        type: transaction.type,
        category: {
          id: category?.id,
          title: category?.title,
        },
      });
    }, Promise.resolve());

    return transactionsDTO;
  }

  public async getBalance(): Promise<Balance> {
    const transactions = await this.find();

    const income = transactions
      .filter(transaction => transaction.type === 'income')
      .reduce((acc, transaction) => acc + Number(transaction.value), 0);

    const outcome = transactions
      .filter(transaction => transaction.type === 'outcome')
      .reduce((acc, transaction) => acc + Number(transaction.value), 0);

    const total = income - outcome;

    return { income, outcome, total };
  }
}

export default TransactionsRepository;
