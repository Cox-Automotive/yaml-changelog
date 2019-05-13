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

export interface Release {
  id: string;
  changes: Change[];
}

export interface ReleaseLog {
  project: string;
  releases: Release[];
}

export interface ReleaseMd {
  [id: string]: {
    name: string;
    changes: string[];
  }[];
}
