export interface CardJob {
    primaryPathImage?: string;
    secondaryPathImage?: string;
    frontCard: FrontCard[];
    role: string;
    tags: Tags;
    backCard: BackCard[];
}

export interface FrontCard {
    label: string;
    icon: string;
    description: string;
    
}

export interface BackCard {
    title: string;
    items: string[];
}

export interface Tags {
    main?: string;
    arraytags: string[];
}


