export type Subject<T> = {
  subject: T,
  property: keyof T
};

export default interface ModificatorInterface{
  subjects: Array<Subject<any>>
};
