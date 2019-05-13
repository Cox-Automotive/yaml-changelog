export interface Change {
  timestamp: string;
  user: string;
  story?: string;
  description: string;
}

export interface Changelog {
  project: string;
  changes: Change[];
}
