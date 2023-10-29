export interface IBaseRepository<T> {
  create(dto: any): Promise<T>;
  getAll(search: any, orderByField: any, orderBy: any): Promise<T[]>;
  getById(id: number): Promise<T>;
  update(id: number, dto: any): Promise<T>;
  delete(id: number): Promise<void>;
}
