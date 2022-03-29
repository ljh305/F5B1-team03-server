import { Field, ObjectType } from '@nestjs/graphql';
import { ChatRoom } from 'src/apis/chatRoom/entities/chatRoom.entity';
import { User } from 'src/apis/user/entities/user.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Chat {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id!: string;

  @Column()
  @Field(() => String)
  content!: string;

  @CreateDateColumn()
  @Field(() => Date)
  createdAt!: Date;

  @ManyToOne(() => ChatRoom)
  @Field(() => ChatRoom)
  chatRoom!: ChatRoom;

  @ManyToOne(() => User)
  @Field(() => User)
  user!: User;
}
