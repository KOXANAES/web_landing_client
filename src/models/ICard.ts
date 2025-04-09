export interface ICard {
    id: string;
    isChecked?: boolean;
    homeType?: HomeType;
    city: string;
    street: string;
    home: string;
    apartment?: string;
    rooms?: number;
    apis?: number;
    faultyapis?: number;
    nobatteryapis?: number;
    heating?: Heating;
    ovens?: number;
    usedovens?: number;
    faultyovens?: number;
    residents?: Resident[];
    category: Categories;
    nliv?: number;
    cnchildliv?: number;
    other?: string;
    criterias?: Criterias[];
    violations?: Violations[];
    creationDate?: Date;
    inspectionDate?: Date;
    inspectionDeadline?: Date;
    instructured?: number;
    isWithSocials?: boolean;
    
    creatorUsername: string
    inspectorUsername: string

    formattedInspectionDate: any
    formattedCreationDate: any
    formattedInspectionDeadline: any

}

export enum HomeType {
    NOT_SPECIFIED = "NOT_SPECIFIED",
    APARTMENT = "APARTMENT",
    HOUSE = "HOUSE",
    LODGE = "LODGE",
    COTTAGE = "COTTAGE",
}

export enum Heating {
    STOVE = "STOVE",
    CENTRAL = "CENTRAL",
    ELECTRIC = "ELECTRIC",
    GAS = "GAS",
}

export enum Categories {
    SENIORAL = "senioral",
    SENIORALLIV = "senioralliv",
    SENIORALINV = "senioralinv",
    SENIORALLIVINV = "seniorallivinv",
    FAMILY = "family",
    MANYCHILDFAMILY = "manychildfamily",
    SOP = "sop",
    OVD = "ovd",
}

export enum Criterias {
    EX1 = "EX1",
    EX2 = "EX2",
    EX3 = "EX3",
}

export enum Violations {
    EX1 = "EX1",
    EX2 = "EX2",
    EX3 = "EX3",
}

export interface Resident {
    id: string;
    name: string;
    surname: string;
    paternity?: string;
    birth: Date;
}