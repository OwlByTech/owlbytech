export interface CaseCard {
  id: number;
  case_card_id: number;
  languages_code: string;
  image: string;
  title: string;
  description: string;
  tags: string[] | null;
}
