export interface Change {
  timestamp: string;
  user: string;
  story?: string;
  description: string;
}

export interface Changelog {
  service: string;
  changes: Change[];
}
