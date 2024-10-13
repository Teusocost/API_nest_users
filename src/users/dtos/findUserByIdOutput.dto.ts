import { ApiProperty } from "@nestjs/swagger"

export class FindUderByIdOutputDTO{
    @ApiProperty()
    id:number
    @ApiProperty()
	name: string
    @ApiProperty()
	email: string
    @ApiProperty()
	password: string
}