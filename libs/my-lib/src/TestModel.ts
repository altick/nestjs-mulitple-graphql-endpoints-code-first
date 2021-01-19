import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class TestModel {
    @Field()
    message: string;
}