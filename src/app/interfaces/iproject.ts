export type TypeOfProject = "UI/UX" | "Software" | "Data Science";

export interface IProject {
    _id: string;
    title: string;
    desc: string;
    imageUrl: string;
    typeOfProject: TypeOfProject;
}
