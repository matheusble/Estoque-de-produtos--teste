import { PartialType } from "@nestjs/swagger";
import { CreateProductDto } from "./create-product.dto";

/*UpdateCourseDto herda da classe 
create com os métodos opcionais 
para atualizar somente o que o usuário necessitar*/ 
export class UpdateProductDto extends PartialType(CreateProductDto){

}
