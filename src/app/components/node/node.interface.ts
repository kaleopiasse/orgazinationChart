export interface INode {
  id: string | number;
  parentId?: string | number;
  name: string;
  level: number;
}
