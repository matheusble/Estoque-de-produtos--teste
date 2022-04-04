import { PartialType } from "@nestjs/swagger";
import { CreateCategorytDto } from "./create-category.dto";

/*UpdateCourseDto herda da classe 
create com os métodos opcionais 
para atualizar somente o que o usuário necessitar*/ 
export class UpdateCategorytDto extends PartialType(CreateCategorytDto){

}
