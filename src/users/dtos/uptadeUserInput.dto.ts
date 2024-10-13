import { PartialType } from "@nestjs/mapped-types";
import { CreateUserInputDTO } from "./createUserInput.dto";

export class UptadeUserDTO extends PartialType(CreateUserInputDTO){ //a partial deixa o tipo opcional

}

