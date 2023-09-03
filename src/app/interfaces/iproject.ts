export type TypeOfProject = "uiux" | "software" | "ds";

export interface IProject {
    _id: string;
    title:string;
    desc:string;
    imageUrl: string;
    typeOfProject: TypeOfProject;
}
