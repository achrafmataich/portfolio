export type TypeOfProject = "UI/UX" | "Software" | "Data Science";
export type CodeExampleType = Paragraph | Section | Code;
export type Technology = TechnologyDetailed | string;

export interface Paragraph {
    par: string;
}

export interface Section {
    sec: string;
}

export interface Code {
    code: string;
    type: string;
}

export interface TechnologyDetailed {
    name: string;
    version: string;
};

export interface IProjectDetails {
    overview: string;
    motivation: string;
    solution: string;
    benefits?: string[];
    technologies_used?: Technology[];
    links?: string[];
    codeExample?: CodeExampleType[];
};

export interface IProject {
    _id: string;
    title: string;
    desc: string;
    imageUrl: string;
    details: IProjectDetails;
    typeOfProject: TypeOfProject;
};
