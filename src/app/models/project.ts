import { IProject, IProjectDetails, TypeOfProject } from "../interfaces/iproject";

export class Project implements IProject {
    _id!: string;
    title!: string;
    desc!: string;
    details!: IProjectDetails;
    imageUrl!: string;
    typeOfProject!: TypeOfProject;
}
