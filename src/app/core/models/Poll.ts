export interface PollOption {
  id: number;
  label: string;
  value: string;
  votes?: number;
}

export interface Poll {
  id: number;
  question: string;
  options: PollOption[];
  selectedOption?: string;
}
