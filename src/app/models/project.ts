import { IProject, TypeOfProject } from "../interfaces/iproject";

export class Project implements IProject {
    _id!: string;
    title!: string;
    desc!: string;
    imageUrl!: string;
    typeOfProject!: TypeOfProject;

    /**
     *
     */
    constructor() {
    }
}
