export interface GoalsResponse {
    resp_code: string;
    resp_desc: string;
    data: Goal[];
  }
  
  export interface Goal {
    created_at: string; // ISO 8601 date string
    description: string;
    id: string;
    milestones: Milestone[];
    progress: number; // Represents progress as a percentage (0-100)
    title: string;
    color?: string;
  }
  
  export interface Milestone {
    comments: [] | null;
    completed: boolean;
    id: string;
    title: string;
  }
  