import fs from 'fs';
import csv from 'csv-parse';
import Transaction from '../models/Transaction';
import CreateTransactionService from './CreateTransactionService';

interface RequestDTO {
  filePath: string;
}

interface TransactionDTO {
  title: string;
  type: 'income' | 'outcome';
  value: number;
  category: string;
}

class ImportTransactionsService {
  public async execute({ filePath }: RequestDTO): Promise<Transaction[]> {
    const createTransactionService = new CreateTransactionService();
    const transactions: Transaction[] = [];
    const transactionsToSave: TransactionDTO[] = [];

    const parser = csv({ delimiter: ', ', from_line: 2, ltrim: true });
    const parseCSV = fs.createReadStream(filePath).pipe(parser);

    parseCSV.on('data', async row => {
      const [title, type, value, category] = row;
      const transactionToSave: TransactionDTO = {
        title,
        type,
        value: Number(value),
        category,
      };
      transactionsToSave.push(transactionToSave);
    });

    await new Promise(resolve => parseCSV.on('end', resolve));

    await transactionsToSave.reduce(async (promise, transactionToSave) => {
      await promise;
      const transaction = await createTransactionService.execute(
        transactionToSave,
      );
      transactions.push(transaction);
    }, Promise.resolve());

    await fs.promises.unlink(filePath);

    return transactions;
  }
}

export default ImportTransactionsService;
